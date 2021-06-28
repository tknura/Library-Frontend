import { useTranslation } from 'react-i18next'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Link } from 'react-router-dom'

import { BOOKS_ROUTE } from 'constants/routeNames'

interface Book {
  id: number
  title: string
  author: string
}

export interface Borrow {
  id: number
  book: Book
  returnDate: string
  isReturned: boolean
}

interface BorrowAreaProps {
  borrow: Borrow
}

const BorrowArea = ({
  borrow: {
    id,
    book,
    returnDate,
    isReturned
  }
}: BorrowAreaProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <TableRow key={id}>
      <TableCell>
        <Link to={`${BOOKS_ROUTE}/${book.id}`}>
          {`${book.author}, ${book.title}`}
        </Link>
      </TableCell>
      <TableCell>{returnDate}</TableCell>
      <TableCell>{isReturned ? t('screen.account.yes') : t('screen.account.no')}</TableCell>
    </TableRow>
  )
}

export { BorrowArea }
