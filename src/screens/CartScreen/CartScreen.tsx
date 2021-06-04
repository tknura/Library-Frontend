import { useTranslation } from 'react-i18next'

import { useHistory } from 'react-router'
import { CartItem, useCartItemsQuery } from 'api/cart'
import { AUTH_ROUTE } from 'constants/routeNames'
import { useUserLoggedIn } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { CartItemArea } from 'components/data/CartItemArea/CartItemArea'
import * as Styled from './CartScreen.styles'

const CartScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading, isError, data: cartData } = useCartItemsQuery()
  const { show } = useShowSnackbar()
  const isLoggedIn = useUserLoggedIn()
  const history = useHistory()

  if (isError) {
    show({ message: t('screen.cart.errorMessage'), type: SNACKBAR_ERROR })
  }

  const handleDelete = (cartItem: CartItem) => {
    // delete cartItem
  }

  const handleReserve = () => {
    if (isLoggedIn) {
      // reserve
    } else {
      history.push(AUTH_ROUTE)
    }
  }

  return (
    <>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <>
          <Styled.CartItemsContainer>
            {cartData?.map(cartItem => <CartItemArea
              key={cartItem.itemId}
              cartItem={cartItem}
              onDelete={handleDelete}
            />)}
          </Styled.CartItemsContainer>
          <Styled.CartFooterContainer>
            <Styled.ReservationButton
              variant="contained"
              color="primary"
              onClick={handleReserve}
            >
              {t('screen.cart.order')}
            </Styled.ReservationButton>
          </Styled.CartFooterContainer>
        </>
      )}
    </>
  )
}

export { CartScreen }
