import { useTranslation } from 'react-i18next'

import { AccountDataForm } from 'components/forms/AccountDataForm/AccountDataForm'
import { BorrowList } from 'components/data/BorrowList/BorrowList'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useUsersMetaQuery, useUsersQuery } from 'api/users'
import { useReservationsQuery } from 'api/reservations'
import * as Styled from './AccountScreen.styles'

const AccountScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { data: userMeta } = useUsersMetaQuery()
  const userId = userMeta?.userId || 0
  const {
    isLoading: borrowLoading,
    isError: borrowError,
    data: borrowsQueryData } = useReservationsQuery(userId)
  const {
    isLoading: userLoading,
    isError: userError,
    data: usersQueryData } = useUsersQuery()

  const userQueryData = usersQueryData?.users.filter(user => user.id === userId)[0]

  const { show } = useShowSnackbar()

  if (userError || borrowError) {
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

  const userData = {
    id: userQueryData?.id || 0,
    email: userQueryData?.accountCredentialsDTO.emailAddress || '',
    username: userQueryData?.accountCredentialsDTO.username || '',
    firstName: userQueryData?.firstName || '',
    lastName: userQueryData?.lastName || '',
    password: userQueryData?.accountCredentialsDTO.password || ''
  }

  return (
    <Styled.RootContainer>
      {userLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <AccountDataForm
          userData={userData}
        />
      )}
      {borrowLoading ? (
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
