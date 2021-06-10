import { useTranslation } from 'react-i18next'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Link } from 'react-router-dom'

import { Borrow } from 'screens/AccountScreen/AccountScreen'

interface Props {
  borrow: Borrow
}

const BorrowArea = ({
  borrow
}: Props): JSX.Element => {
  const { t } = useTranslation()
  return (
    <TableRow key={borrow.id}>
      <TableCell>
        <Link to={`/books/${borrow.book.id}`}>
          {`${borrow.book.author}, ${borrow.book.title}`}
        </Link>
      </TableCell>
      <TableCell>{`${borrow.returnDate.getDay()}.${borrow.returnDate.getMonth()}.${borrow.returnDate.getFullYear()}`}</TableCell>
      <TableCell>{borrow.isReturned ? t('screen.account.yes') : t('screen.account.no')}</TableCell>
    </TableRow>
  )
}

export { BorrowArea }
