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

import { Book, useBooksQuery } from 'api/books'
import { useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation } from 'api/stocks'
import { BookFormFields, BookFormModal, BookModalMode } from 'components/forms/BookFormModal/BookFormModal'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR, SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import { booksColumns } from './ManageBookScreen.constants'
import * as Styled from './ManageBookScreen.styles'
import { mapApiBookToBookFormField } from './ManageBooksScreen.utils'

const ManageBooksScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const [isQueryEnabled, setQueryEnabled] = useState<boolean>(true)
  const [isBookModalOpen, setBookModalOpen] = useState<boolean>(false)
  const [bookFormInitialValues, setBookFormInitialValues] = useState<BookFormFields | null>(null)
  const [bookModalMode, setBookModalMode] = useState<BookModalMode>('CREATE')
  const { data } = useBooksQuery({
    onSuccess: () => setQueryEnabled(false),
    enabled: isQueryEnabled
  })

  const { mutate: addBookMutate } = useAddBookMutation({
    onSuccess: () => {
      setQueryEnabled(true)
      setBookModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageBooks.errors.addBook'), type: SNACKBAR_ERROR })
  })
  const { mutate: updateBookMutate } = useUpdateBookMutation({
    onSuccess: () => {
      setQueryEnabled(true)
      setBookModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageBooks.errors.editBook'), type: SNACKBAR_ERROR })
  })
  const { mutate: deleteBookMutate } = useDeleteBookMutation({
    onSuccess: () => {
      setQueryEnabled(true)
      show({ message: t('screen.manageBooks.removedBook'), type: SNACKBAR_SUCCESS })
    },
    onError: () => show({ message: t('screen.manageBooks.errors.removeBook'), type: SNACKBAR_ERROR })
  })

  const handleDeleteButton = (serialNumber: number) => {
    deleteBookMutate(serialNumber)
  }

  const handleAddButton = () => {
    setBookModalMode('CREATE')
    setBookFormInitialValues(null)
    setBookModalOpen(true)
  }

  const handleEditButton = (row: Book) => {
    setBookModalMode('EDIT')
    const mappedRow = mapApiBookToBookFormField(row)
    setBookFormInitialValues(mappedRow)
    setBookModalOpen(true)
  }

  const handleCloseBookModal = () => {
    setBookModalOpen(false)
  }

  const handleBookFormSubmit = (values: BookFormFields) => {
    const mutationHandler = bookFormInitialValues ? updateBookMutate : addBookMutate
    mutationHandler({
      serial_number: values.serialNumber,
      title: values.title,
      author: values.author,
      description: values.description,
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
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {t(column.labeli18nCode)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.content.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.bookId}>
                  {booksColumns.map(column => (
                    <TableCell key={column.id} align="left">
                      {column.id === 'actions' ? (
                        <>
                          <IconButton onClick={() => handleDeleteButton(row.serialNumber)}>
                            <DeleteRoundedIcon />
                          </IconButton>
                          <IconButton onClick={() => handleEditButton(row)}>
                            <EditRoundedIcon />
                          </IconButton>
                        </>
                      ) : (
                        row[column.id] || '-'
                      )}
                    </TableCell>
                  ))}
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
        mode={bookModalMode}
      />
    </Styled.RootContainer>
  )
}

export { ManageBooksScreen }
