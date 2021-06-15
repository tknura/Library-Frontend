import { useState } from 'react'
import constate from 'constate'

const useCart = () => {
  const [cartIterator, setCartIterator] = useState<number>(0)

  const changeItemsAmount = (itemNumber: number) => {
    setCartIterator(itemNumber)
  }

  const finishOrder = () => setCartIterator(0)

  return { changeItemsAmount, finishOrder, cartIterator }
}

const [
  CartProvider,
  useChangeItemsAmount,
  useGetAmountOfItems,
  useFinishOrder,
] = constate(
  useCart,
  value => value.changeItemsAmount,
  value => value.cartIterator,
  value => value.finishOrder,
)

export {
  CartProvider,
  useChangeItemsAmount,
  useGetAmountOfItems,
  useFinishOrder
}
