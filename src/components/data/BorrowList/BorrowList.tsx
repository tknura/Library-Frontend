import { useTranslation } from 'react-i18next'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import { Borrow } from 'screens/AccountScreen/AccountScreen'
import { BorrowArea } from './BorrowArea'
import * as Styled from './BorrowList.styles'

interface Props {
  borrows: Borrow[]
}

const BorrowList = ({
  borrows
}: Props): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Styled.BorrowsContainer>
      <Typography variant="h5" gutterBottom>
        {t('screen.account.borrows')}
      </Typography>
      <Styled.TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('screen.account.book')}</TableCell>
              <TableCell>{t('screen.account.returnDate')}</TableCell>
              <TableCell>{t('screen.account.isReturned')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrows.map((row) => (
              <BorrowArea
                key={row.id}
                borrow={row}
              />
            ))}
          </TableBody>
        </Table>
      </Styled.TableContainer>
    </Styled.BorrowsContainer>
  )
}

export { BorrowList }
