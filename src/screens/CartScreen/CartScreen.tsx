import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { Typography } from '@material-ui/core'

import { ConfirmReservationModal } from 'components/data/ConfirmReservationDialog/ConfirmReservationDialog'
import { AUTH_ROUTE } from 'constants/routeNames'
import { useUserLoggedIn } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { useSubmitCart, useGetCartItems, useIsError, useIsLoading, useDeleteCartItem, useEditCartItem, useMissingBooksError } from 'components/providers/CartProvider'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { CartItem, CartItemArea } from 'components/data/CartItemArea/CartItemArea'
import * as Styled from './CartScreen.styles'

const CartScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const cartItems = useGetCartItems()
  const isError = useIsError()
  const isLoading = useIsLoading()
  const finishOrder = useSubmitCart()
  const deleteItem = useDeleteCartItem()
  const editItem = useEditCartItem()
  const missingBooksError = useMissingBooksError()
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState<boolean>(false)
  const [invalidDate, setInvalidDate] = useState<boolean>(false)
  const { show } = useShowSnackbar()
  const isLoggedIn = useUserLoggedIn()
  const history = useHistory()

  if (isError) {
    show({ message: t('screen.cart.errorMessage'), type: SNACKBAR_ERROR })
  }

  const handleDelete = (item: CartItem) => {
    deleteItem(item)
  }

  const handleEdit = (item: CartItem) => {
    editItem(item)
    setInvalidDate(false)
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
    finishOrder()
    if (!missingBooksError) {
      setModalConfirmationOpen(false)
    }
  }

  return (
    <>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <>
          <Styled.CartItemsContainer>
            {cartItems ? (
              cartItems.map(cartItem => (
                <CartItemArea
                  key={cartItem.itemId}
                  cartItem={cartItem}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />))
            ) : (
              <Styled.NoDataContainer>
                <Typography color="primary">
                  {t('screen.cart.empty')}
                </Typography>
              </Styled.NoDataContainer>
            )}
          </Styled.CartItemsContainer>
          <Styled.CartFooterContainer>
            <Styled.ReservationButton
              variant="contained"
              color="primary"
              onClick={handleReserve}
              disabled={isLoggedIn && isError && !invalidDate}
            >
              {isLoggedIn
                ? t('screen.cart.order')
                : t('screen.cart.login')}
            </Styled.ReservationButton>
            <ConfirmReservationModal
              open={modalConfirmationOpen}
              missingBooks={missingBooksError}
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
