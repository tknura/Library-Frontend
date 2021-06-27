import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useBooksQuery } from 'api/books'
import * as Styled from './BooksScreen.styles'

const BooksScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading, isError, data: booksData } = useBooksQuery()
  const { show } = useShowSnackbar()

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }

  const books = useMemo(() => (
    booksData?.content.map(book => ({
      id: book.bookId,
      title: book.name,
      author: book.author,
      photos: book.urls,
      howMany: book.numberOfBooks - book.numberOfOccupiedBooks
    })) || []
  ), [booksData?.content])

  return (
    <Styled.RootContainer>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <Styled.BookList items={books} />
      )}
    </Styled.RootContainer>
  )
}

export { BooksScreen }
