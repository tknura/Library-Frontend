import { useTranslation } from 'react-i18next'

import { BookList } from 'components/data/BookList/BookCardList'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useBooksQuery } from 'api/books'
import * as Styled from './BooksScreen.styles'

const BooksScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading, isError, data: queryData } = useBooksQuery()
  const { show } = useShowSnackbar()

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }

  const data = queryData?.content.map((book) => ({
    id: book.bookId,
    title: book.name,
    author: book.author,
    photos: book.urls,
    howMany: book.numberOfBooks - book.numberOfOccupiedBooks
  })) || []

  return (
    <div>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <BookList
          items={data}
        />
      )}
    </div>
  )
}

export { BooksScreen }
