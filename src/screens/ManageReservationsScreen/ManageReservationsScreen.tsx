import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import { BlockRounded, CheckCircleOutlineRounded, Print } from '@material-ui/icons'
import { useAcceptReservation, usePendingReservationsQuery, useRejectReservation } from 'api/reservations'
import { useTranslation } from 'react-i18next'

import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { reservationsColumns } from './ManageReservationsScreen.constants'
import * as Styled from './ManageReservationsScreen.styles'

const ManageReservationsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const { data } = usePendingReservationsQuery()

  const { mutate: acceptReservationMutate } = useAcceptReservation({
    onError: () => show({ message: t('screen.manageReservations.errors.acceptReservation'), type: SNACKBAR_ERROR })
  })

  const { mutate: rejectReservationMutate } = useRejectReservation({
    onError: () => show({ message: t('screen.manageReservations.errors.rejectReservation'), type: SNACKBAR_ERROR })
  })

  const handlePrintButton = () => {
    // print
  }

  const handleAcceptButton = (id: number) => {
    acceptReservationMutate(id)
  }

  const handleRejectButton = (id: number) => {
    rejectReservationMutate(id)
  }

  return (
    <Styled.RootContainer>
      <Styled.ActionsContainer>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Print />}
          onClick={handlePrintButton}
        >
          {t('common.printRaport')}
        </Button>
      </Styled.ActionsContainer>
      <Styled.Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {reservationsColumns.map(column => (
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
              {data?.items.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {reservationsColumns.map(column => (
                    <TableCell key={column.id} align="left">
                      {column.id === 'actions' ? (
                        <>
                          <IconButton onClick={() => handleRejectButton(row.id)}>
                            <BlockRounded />
                          </IconButton>
                          <IconButton onClick={() => handleAcceptButton(row.id)}>
                            <CheckCircleOutlineRounded />
                          </IconButton>
                        </>
                      ) : (
                        row.id || '-'
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {!data?.items.length && (
            <Styled.NoDataContainer>
              <Typography color="primary">
                {t('screen.manageReservations.empty')}
              </Typography>
            </Styled.NoDataContainer>
          )}
        </TableContainer>
      </Styled.Paper>
    </Styled.RootContainer>
  )
}

export { ManageReservationsScreen }
