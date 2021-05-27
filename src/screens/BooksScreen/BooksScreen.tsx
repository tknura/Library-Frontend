import { useTranslation } from 'react-i18next'

import { BookList } from 'components/data/BookList/BookCardList'
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

  return (
    <div>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <BookList
          items={booksData}
          onItemButtonClick={() => null}
        />
      )}
    </div>
  )
}

export { BooksScreen }
