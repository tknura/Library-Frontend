import { useState } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'

import { useBooksQuery } from 'api/books'
// import { useAddBookMutation, useUpdateBookMutation } from 'api/stocks'
import { UserFormFields, UserFormModal } from 'components/forms/UserFormModal/UserFormModal'
// import { useShowSnackbar } from 'components/providers/SnackbarProviders'
// import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { booksColumns } from './ManageUsersScreen.constants'
import * as Styled from './ManageUsersScreen.styles'

const ManageUsersScreen = (): JSX.Element => {
  const { t } = useTranslation()
  // const { show } = useShowSnackbar()

  const [isUserModalOpen, setUserModalOpen] = useState<boolean>(false)
  const [userFormInitialValues, setBookFormInitialValues] = useState<UserFormFields | null>(null)

  const { data } = useBooksQuery()
  // const { mutate: updateUserMutate } = useUpdateBookMutation({
  //   onSuccess: () => {
  //     setUserModalOpen(false)
  //   },
  //   onError: () => {
  //     show({ message: t('screen.manageBooks.errors.editBook'), type: SNACKBAR_ERROR })
  //   },
  // })

  const handleAddButton = () => {
    setBookFormInitialValues(null)
    setUserModalOpen(true)
  }

  const handleCloseBookModal = () => {
    setUserModalOpen(false)
  }

  const handleBookFormSubmit = async (values: UserFormFields) => {
    // await updateUserMutate({
    //   id: 0,
    //   title: values.title,
    //   author: values.author,
    //   description: values.description,
    //   photos: [''],
    //   publicationDate: values.publicationDate,
    //   publisher: values.publisher,
    //   available: true,
    // })
  }

  return (
    <Styled.RootContainer>
      <Styled.ActionsContainer>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddRoundedIcon />}
          onClick={handleAddButton}
        >
          {t('common.add')}
        </Button>
      </Styled.ActionsContainer>
      <Styled.Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {booksColumns.map(column => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{ maxWidth: column.maxWidth }}
                  >
                    {t(column.labeli18nCode)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.content.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.bookId}>
                  {booksColumns.map(column => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align="left">
                        {value}
                      </TableCell>
                    )
                  })}
                  <TableCell align="left">
                    <IconButton>
                      <DeleteRoundedIcon />
                    </IconButton>
                    <IconButton>
                      <EditRoundedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {!data?.content.length && (
            <Styled.NoDataContainer>
              <Typography color="primary">
                {t('screen.manageBooks.empty')}
              </Typography>
            </Styled.NoDataContainer>
          )}
        </TableContainer>
      </Styled.Paper>
      <UserFormModal
        open={isUserModalOpen}
        onClose={handleCloseBookModal}
        onSubmit={handleBookFormSubmit}
        initialValues={userFormInitialValues !== null ? userFormInitialValues : undefined}
      />
    </Styled.RootContainer>
  )
}

export { ManageUsersScreen }
