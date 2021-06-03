import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CartItem } from 'components/data/CartItem/CartItem'
import * as Styled from './CartScreen.styles'

export interface CartItemTemp {
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
  const { t } = useTranslation()
  const [cartItems, setCartItems] = useState<CartItemTemp[]>(items)

  const handleDelete = (cartItem: CartItemTemp) => {
    const newCartItems = cartItems.filter(value => value.id !== cartItem.id)
    setCartItems(newCartItems)
  }

  return (
    <>
      <Styled.CartItemsContainer>
        {cartItems.map(cartItem => <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          onDelete={handleDelete}
        />)}
      </Styled.CartItemsContainer>
      <Styled.CartFooterContainer>
        <Styled.AddToCartButton
          variant="contained"
          color="primary"
        >
          {t('screen.cart.order')}
        </Styled.AddToCartButton>
      </Styled.CartFooterContainer>
    </>
  )
}

export { CartScreen }
