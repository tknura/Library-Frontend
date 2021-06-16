import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { useState } from 'react'

import { ConfirmReservationModal } from 'components/data/ConfirmReservationDialog/ConfirmReservationDialog'
import { AUTH_ROUTE } from 'constants/routeNames'
import { useUserLoggedIn } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { CartItemArea } from 'components/data/CartItemArea/CartItemArea'
import { useChangeCartItems, useFinishOrder, useGetCartItems, useIsError, useIsLoading } from 'components/providers/CartProvider'
import * as Styled from './CartScreen.styles'

const CartScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const cartItems = useGetCartItems()
  const isError = useIsError()
  const isLoading = useIsLoading()
  const changeItems = useChangeCartItems()
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState<boolean>(false)
  const finishOrder = useFinishOrder()
  const [missingBooksData] = useState<string>()
  const { show } = useShowSnackbar()
  const isLoggedIn = useUserLoggedIn()
  const history = useHistory()

  if (isError) {
    show({ message: t('screen.cart.errorMessage'), type: SNACKBAR_ERROR })
  }

  const handleDelete = (id: number) => {
    const newCartItems = cartItems?.filter(value => value.itemId !== id)
    changeItems(newCartItems)
  }

  const handleReserve = () => {
    if (isLoggedIn) {
      setModalConfirmationOpen(true)
    } else {
      history.push(AUTH_ROUTE)
    }
  }

  const handleCancelConfirmationModal = () => {
    setModalConfirmationOpen(false)
  }

  const handleConfirmReservationModal = () => {
    setModalConfirmationOpen(false)
    finishOrder()
  }

  return (
    <>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <>
          <Styled.CartItemsContainer>
            {cartItems?.map(cartItem => (
              <CartItemArea
                key={cartItem.itemId}
                cartItem={cartItem}
                onDelete={handleDelete}
              />))}
          </Styled.CartItemsContainer>
          <Styled.CartFooterContainer>
            <Styled.ReservationButton
              variant="contained"
              color="primary"
              onClick={handleReserve}
              disabled={isLoggedIn && isError}
            >
              {isLoggedIn
                ? t('screen.cart.order')
                : t('screen.cart.login')}
            </Styled.ReservationButton>
            <ConfirmReservationModal
              open={modalConfirmationOpen}
              missingBooks={missingBooksData}
              onConfirm={handleConfirmReservationModal}
              onCancel={handleCancelConfirmationModal}
            />
          </Styled.CartFooterContainer>
        </>
      )}
    </>
  )
}

export { CartScreen }
