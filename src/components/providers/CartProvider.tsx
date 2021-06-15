import { useEffect, useState } from 'react'
import constate from 'constate'

import { useCartItemsQuery } from 'api/cart'

interface CartItem {
  itemId: number,
  title: string,
  author: string,
  photoUrl: string,
  endDate: Date
}

interface Cart {
  cartItems: CartItem[] | undefined,
  cartIterator: number | undefined
}

const useCart = () => {
  const { data: cartData } = useCartItemsQuery()
  const [cart, setCart] = useState<Cart>()

  useEffect(() => {
    setCart({
      cartItems: cartData,
      cartIterator: cartData?.length
    })
  }, [cartData])

  const editItems = (items: CartItem[]) => {
    setCart({
      cartItems: items,
      cartIterator: items.length
    })
  }

  const addItem = (item: CartItem) => {
    const newItems = cart?.cartItems?.concat(item)
    setCart({
      cartItems: newItems,
      cartIterator: newItems?.length
    })
  }

  const finishOrder = () => {
    setCart({
      cartItems: undefined,
      cartIterator: 0
    })
  }

  return { editItems, addItem, finishOrder, cart }
}

const [
  CartProvider,
  useChangeItems,
  useAddItem,
  useGetItems,
  useGetAmountOfItems,
  useFinishOrder,
] = constate(
  useCart,
  value => value.editItems,
  value => value.addItem,
  value => value.cart?.cartItems,
  value => value.cart?.cartIterator,
  value => value.finishOrder
)

export {
  CartProvider,
  useChangeItems,
  useAddItem,
  useGetItems,
  useGetAmountOfItems,
  useFinishOrder,
}
