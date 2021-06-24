import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import AddRoundedIcon from '@material-ui/icons/AddRounded'

import { useDeliveriesQuery } from 'api/deliveries'
import { ManageDeliveriesArea } from './ManageDeliveryArea'
import * as Styled from './ManageDeliveriesScreen.styles'

const ManageDeliveriesScreen = (): JSX.Element => {
  const { t } = useTranslation()

  const { data } = useDeliveriesQuery()

  return (
    <Styled.RootContainer>
      <Styled.ActionsContainer>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddRoundedIcon />}
          disabled
        >
          {t('common.add')}
        </Button>
      </Styled.ActionsContainer>
      <Styled.Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('screen.manageDeliveries.deliveryArticle')}</TableCell>
                <TableCell>{t('screen.manageDeliveries.quantity')}</TableCell>
                <TableCell>{t('screen.manageDeliveries.requestDate')}</TableCell>
                <TableCell>{t('screen.manageDeliveries.expectedDelivery')}</TableCell>
                <TableCell>{t('screen.manageBooks.actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(row => (
                <ManageDeliveriesArea
                  key={row.id}
                  id={row.id}
                />
              ))}
            </TableBody>
          </Table>
          {!data?.length && (
            <Styled.NoDataContainer>
              <Typography color="primary">
                {t('screen.manageBooks.empty')}
              </Typography>
            </Styled.NoDataContainer>
          )}
        </TableContainer>
      </Styled.Paper>
    </Styled.RootContainer>
  )
}

export { ManageDeliveriesScreen }
