import { useState } from 'react'

import { CartItem } from 'components/data/CartItem/CartItem'
import * as Styled from './CartScreen.styles'

interface CartItemTemp {
  id: number,
  title: string,
  author: string,
  photo: string
}

const items: CartItemTemp[] = [
  {
    id: 1,
    title: 'book1',
    author: 'author1',
    photo: ''
  },
  {
    id: 2,
    title: 'book2',
    author: 'author2',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Question_book-4.svg/1280px-Question_book-4.svg.png'
  },

]

const CartScreen = (): JSX.Element => {
  const [cartItems] = useState<CartItemTemp[]>(items)
  return (
    <Styled.CartContainer>
      {cartItems.map(cartItem => <CartItem
        key={cartItem.id}
        title={cartItem.title}
        author={cartItem.author}
        photo={cartItem.photo}
      />)}
    </Styled.CartContainer>
  )
}

export { CartScreen }
