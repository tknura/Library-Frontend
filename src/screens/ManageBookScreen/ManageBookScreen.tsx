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
import { format } from 'date-fns'

import { useBooksQuery } from 'api/books'
import { useAddBookMutation, useUpdateBookMutation } from 'api/stocks'
import { BookFormFields, BookFormModal } from 'components/forms/BookFormModal/BookFormModal'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { booksColumns } from './ManageBookScreen.constants'
import * as Styled from './ManageBookScreen.styles'

const ManageBooksScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const [isBookModalOpen, setBookModalOpen] = useState<boolean>(false)
  const [bookFormInitialValues, setBookFormInitialValues] = useState<BookFormFields | null>(null)

  const { data } = useBooksQuery()

  const { mutate: addBookMutate } = useAddBookMutation({
    onSuccess: () => {
      setBookModalOpen(false)
    },
    onError: () => {
      show({ message: t('screen.manageBooks.errors.addBook'), type: SNACKBAR_ERROR })
    },
  })
  const { mutate: updateBookMutate } = useUpdateBookMutation({
    onSuccess: () => {
      setBookModalOpen(false)
    },
    onError: () => {
      show({ message: t('screen.manageBooks.errors.editBook'), type: SNACKBAR_ERROR })
    },
  })

  const handleAddButton = () => {
    setBookFormInitialValues(null)
    setBookModalOpen(true)
  }

  const handleCloseBookModal = () => {
    setBookModalOpen(false)
  }

  const handleBookFormSubmit = async (values: BookFormFields) => {
    const mutationHandler = bookFormInitialValues ? updateBookMutate : addBookMutate
    await mutationHandler({
      serial_number: values.serialNumber,
      title: values.title,
      author: values.author,
      description: values.description,
      photos: [values.photo],
      publicationDate: format(values.publicationDate, 'yyyy-MM-dd'),
      publisher: values.publisher,
      available: true,
    })
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
                        {value || '-'}
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
      <BookFormModal
        open={isBookModalOpen}
        onClose={handleCloseBookModal}
        onSubmit={handleBookFormSubmit}
        initialValues={bookFormInitialValues !== null ? bookFormInitialValues : undefined}
      />
    </Styled.RootContainer>
  )
}

export { ManageBooksScreen }
