import { useTranslation } from 'react-i18next'

import { AccountDataForm, UserData } from 'components/forms/AccountDataForm/AccountDataForm'
import { BorrowList } from 'components/data/BorrowList/BorrowList'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useReservationsQuery } from 'api/reservations'
import * as Styled from './AccountScreen.styles'

const tempValues: UserData = {
  id: 1,
  email: 'abc@gmail.com',
  username: 'malyszex123',
  firstName: 'Adam',
  lastName: 'Malysz',
  password: 'qwe123'
}

const AccountScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading, isError, data: borrowsQueryData } = useReservationsQuery(tempValues.id)
  const { show } = useShowSnackbar()

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }

  const borrowsData = borrowsQueryData?.map((borrow) => ({
    id: borrow.id,
    book: {
      id: borrow.rentalBook.id,
      title: borrow.rentalBook.details.name,
      author: borrow.rentalBook.details.author
    },
    returnDate: borrow.endTime,
    isReturned: borrow.returned
  })) || []

  return (
    <Styled.RootContainer>
      <AccountDataForm
        userData={tempValues}
      />
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <BorrowList
          borrows={borrowsData}
        />
      )}
    </Styled.RootContainer>
  )
}

export { AccountScreen }
