import { useEffect, useState } from 'react'
import constate from 'constate'

import { useAddCartItemMutation, useGetCartItemsQuery } from 'api/cart'
import { useUserLoggedIn } from './AuthProvider'

interface CartItemRequest {
  id?: number,
  itemId: number,
  requestedEndDate: string
}
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
  const { isLoading, isError, data: cartData } = useGetCartItemsQuery()
  const [cart, setCart] = useState<Cart>()
  const isLoggedIn = useUserLoggedIn()
  const { mutate: addItemMutate } = useAddCartItemMutation({
    onSuccess: ({ cartItemRequest }) => {
      login(accessToken, userRole)
      userRole === 'CLIENT' ? history.push(BOOKS_ROUTE) : history.push(MANAGE_ROUTE)
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
      cart?.cartItems?.forEach(item => addItemQuery(item))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  const editItems = (items?: CartItem[]) => {
    setCart({
      cartItems: items,
      cartIterator: items?.length
    })
  }

  const addItem = (item: CartItem) => {
    const newItems = cart?.cartItems?.concat(item)
    if (isLoggedIn) {
      // post item into cart
    }
    setCart({
      cartItems: newItems,
      cartIterator: newItems?.length
    })
  }

  const finishOrder = () => {
    // confirm reservation
    setCart({
      cartIterator: 0
    })
  }

  return { editItems, addItem, finishOrder, cart, isError, isLoading }
}

const [
  CartProvider,
  useChangeCartItems,
  useAddCartItem,
  useGetCartItems,
  useGetAmountOfCartItems,
  useFinishOrder,
  useIsLoading,
  useIsError
] = constate(
  useCart,
  value => value.editItems,
  value => value.addItem,
  value => value.cart?.cartItems,
  value => value.cart?.cartIterator,
  value => value.finishOrder,
  value => value.isError,
  value => value.isLoading
)

export {
  CartProvider,
  useChangeCartItems,
  useAddCartItem,
  useGetCartItems,
  useGetAmountOfCartItems,
  useFinishOrder,
  useIsLoading,
  useIsError
}
