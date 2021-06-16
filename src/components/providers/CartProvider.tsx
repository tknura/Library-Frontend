import { useEffect, useState } from 'react'
import constate from 'constate'

import { useAddCartItemMutation, useDeleteCartItemMutation, useEditCartItemMutation, useGetCartItemsQuery, useSubmitCartMutation } from 'api/cart'
import { useTranslation } from 'react-i18next'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useUserCartId, useUserLoggedIn } from './AuthProvider'
import { useShowSnackbar } from './SnackbarProviders'

interface CartItemResponse {
  itemId: number,
  title: string,
  author: string,
  photoUrl: string,
  endDate: string
}

interface Cart {
  cartItems?: CartItemResponse[],
  cartIterator?: number
}

const useCart = () => {
  const { show } = useShowSnackbar()
  const { t } = useTranslation()
  const [cart, setCart] = useState<Cart>()
  const isLoggedIn = useUserLoggedIn()
  const cartId = useUserCartId()
  const { isLoading, isError, data: cartData } = useGetCartItemsQuery({ enabled: isLoggedIn })

  const { mutate: submitCartMutate } = useSubmitCartMutation({
    onSuccess: () => {
      setCart({
        cartItems: cartData,
        cartIterator: cartData?.length
      })
    },
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  const { mutate: addCartItemMutate } = useAddCartItemMutation({
    onSuccess: () => {
      setCart({
        cartItems: cartData,
        cartIterator: cartData?.length
      })
    },
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  const { mutate: deleteCartItemMutate } = useDeleteCartItemMutation({
    onSuccess: () => {
      setCart({
        cartItems: cartData,
        cartIterator: cartData?.length
      })
    },
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  const { mutate: editCartItemMutate } = useEditCartItemMutation({
    onSuccess: () => {
      setCart({
        cartItems: cartData,
        cartIterator: cartData?.length
      })
    },
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  useEffect(() => {
    setCart({
      cartItems: cartData,
      cartIterator: cartData?.length
    })
  }, [cartData])

  useEffect(() => {
    if (isLoggedIn) {
      cart?.cartItems?.forEach(item => addCartItemMutate({
        itemId: item.itemId,
        requestedEndDate: item.endDate
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  const editItem = (item: CartItemResponse) => {
    if (isLoggedIn) {
      editCartItemMutate({
        itemId: item.itemId,
        requestedEndDate: item.endDate
      })
    } else {
      const newItems = cart?.cartItems
      newItems?.forEach(cartItem => {
        if (cartItem.itemId === item.itemId) {
          cartItem = item
        }
      })
      setCart({
        cartItems: newItems,
        cartIterator: newItems?.length
      })
    }
  }

  const deleteItem = (item: CartItemResponse) => {
    if (isLoggedIn) {
      deleteCartItemMutate({
        itemId: item.itemId,
        requestedEndDate: item.endDate
      })
    } else {
      const newItems = cart?.cartItems?.filter(cartItem => cartItem.itemId !== item.itemId)
      setCart({
        cartItems: newItems,
        cartIterator: newItems?.length
      })
    }
  }

  const addItem = (item: CartItemResponse) => {
    if (isLoggedIn) {
      addCartItemMutate({
        itemId: item.itemId,
        requestedEndDate: item.endDate
      })
    } else {
      const newItems = cart?.cartItems?.concat(item)
      setCart({
        cartItems: newItems,
        cartIterator: newItems?.length
      })
    }
  }

  const finishOrder = () => {
    setCart({
      cartIterator: 0
    })
    submitCartMutate(cartId)
  }

  return {
    editItem,
    addItem,
    deleteItem,
    finishOrder,
    cart,
    isError,
    isLoading
  }
}

const [
  CartProvider,
  useAddCartItem,
  useEditCartItem,
  useDeleteCartItem,
  useSubmitCart,
  useGetCartItems,
  useGetCartItemsAmount,
  useIsError,
  useIsLoading
] = constate(
  useCart,
  value => value.addItem,
  value => value.editItem,
  value => value.deleteItem,
  value => value.finishOrder,
  value => value.cart?.cartItems,
  value => value.cart?.cartIterator,
  value => value.isError,
  value => value.isLoading
)

export {
  CartProvider,
  useAddCartItem,
  useEditCartItem,
  useDeleteCartItem,
  useSubmitCart,
  useGetCartItems,
  useGetCartItemsAmount,
  useIsLoading,
  useIsError
}
