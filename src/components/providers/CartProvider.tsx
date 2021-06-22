import { useEffect, useState } from 'react'
import constate from 'constate'

import {
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useEditCartItemMutation,
  useGetCartItemsQuery,
  useSubmitCartMutation
} from 'api/cart'
import { useTranslation } from 'react-i18next'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useUserCartId, useUserLoggedIn } from './AuthProvider'
import { useShowSnackbar } from './SnackbarProviders'

interface CartItem {
  itemId: number,
  title: string,
  author: string,
  photoUrl: string,
  endDate: string
}

interface Cart {
  cartItems?: CartItem[],
  cartIterator?: number
}

const useCart = () => {
  const { show } = useShowSnackbar()
  const { t } = useTranslation()
  const [cart, setCart] = useState<Cart>()
  const isLoggedIn = useUserLoggedIn()
  const cartId = useUserCartId()
  const [isQueryEnabled, setQueryEnabled] = useState<boolean>(false)
  const {
    isLoading,
    isError,
    data: cartData
  } = useGetCartItemsQuery(
    cartId as number, {
      onSuccess: () => setQueryEnabled(false),
      enabled: isQueryEnabled
    }
  )
  const [missingBooksError, setMissingBooksError] = useState<string | null>()

  const { mutate: submitCartMutate } = useSubmitCartMutation({
    onSuccess: () => {
      setQueryEnabled(true)
      setMissingBooksError(null)
    },
    onError: (missingBooks: string) => {
      setMissingBooksError(missingBooks)
    }
  })

  const { mutate: addCartItemMutate } = useAddCartItemMutation({
    onSuccess: () => {
      setQueryEnabled(true)
    },
    onError: () => show({ message: t('screen.cart.errorMessage'), type: SNACKBAR_ERROR })
  })

  const { mutate: deleteCartItemMutate } = useDeleteCartItemMutation({
    onSuccess: () => {
      setQueryEnabled(true)
    },
    onError: () => show({ message: t('screen.cart.errorMessage'), type: SNACKBAR_ERROR })
  })

  const { mutate: editCartItemMutate } = useEditCartItemMutation({
    onSuccess: () => {
      setQueryEnabled(true)
    },
    onError: () => show({ message: t('screen.cart.errorMessage'), type: SNACKBAR_ERROR })
  })

  useEffect(() => {
    setCart({
      cartItems: cartData,
      cartIterator: cartData?.length
    })
  }, [cartData])

  useEffect(() => {
    if (isLoggedIn && cartId) {
      setQueryEnabled(true)
      cart?.cartItems?.forEach(item => {
        if (!cartData?.some(cartItem => cartItem.itemId === item.itemId)) {
          addCartItemMutate({
            cartId,
            cartItem: {
              itemId: item.itemId,
              requestedEndDate: item.endDate
            }
          })
        }
      })
      setCart({
        cartItems: cartData,
        cartIterator: cartData?.length
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, cartId])

  const editItem = (item: CartItem) => {
    if (isLoggedIn && cartId) {
      editCartItemMutate({
        cartId,
        cartItem: {
          itemId: item.itemId,
          requestedEndDate: item.endDate
        }
      })
    } else {
      const newItems = cart?.cartItems
      newItems?.map(cartItem => cartItem.itemId === item.itemId ? item : cartItem)
      setCart({
        cartItems: newItems,
        cartIterator: newItems?.length
      })
    }
  }

  const deleteItem = (item: CartItem) => {
    if (isLoggedIn && cartId) {
      deleteCartItemMutate({
        cartId,
        cartItem: {
          itemId: item.itemId,
          requestedEndDate: item.endDate
        }
      })
    } else {
      const newItems = cart?.cartItems?.filter(cartItem => cartItem.itemId !== item.itemId)
      setCart({
        cartItems: newItems,
        cartIterator: newItems?.length
      })
    }
  }

  const addItem = (item: CartItem) => {
    if (!cart?.cartItems?.some(cartItem => cartItem.itemId === item.itemId)) {
      if (isLoggedIn && cartId) {
        addCartItemMutate({
          cartId,
          cartItem: {
            itemId: item.itemId,
            requestedEndDate: item.endDate
          }
        })
      } else {
        const newItems = [...(cart?.cartItems || []), item]
        setCart({
          cartItems: newItems,
          cartIterator: newItems?.length
        })
      }
    }
  }

  const finishOrder = () => {
    if (isLoggedIn && cartId) {
      setCart({
        cartIterator: 0
      })
      submitCartMutate(cartId)
    }
  }

  return {
    editItem,
    addItem,
    deleteItem,
    finishOrder,
    cart,
    isError,
    isLoading,
    missingBooksError
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
  useIsLoading,
  useMissingBooksError
] = constate(
  useCart,
  value => value.addItem,
  value => value.editItem,
  value => value.deleteItem,
  value => value.finishOrder,
  value => value.cart?.cartItems,
  value => value.cart?.cartIterator,
  value => value.isError,
  value => value.isLoading,
  value => value.missingBooksError
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
  useIsError,
  useMissingBooksError
}
