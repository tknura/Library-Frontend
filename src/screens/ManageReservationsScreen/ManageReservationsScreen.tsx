import { useState, useMemo } from 'react'
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import { BlockRounded, CheckCircleOutlineRounded } from '@material-ui/icons'
import { useAcceptReservation, usePendingReservationsQuery, useRejectReservation } from 'api/reservations'
import { useTranslation } from 'react-i18next'

import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR, SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import { reservationsColumns } from './ManageReservationsScreen.constants'
import * as Styled from './ManageReservationsScreen.styles'

interface ReservationToPrint {
  [key: string]: string | string[] | boolean | number | undefined | null
  id: number,
  name: string | null,
  author: string | null,
  publisher: string | null,
  publicationDate: string | null,
  endTime: string,
}

const ManageReservationsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const [isQueryEnabled, setQueryEnabled] = useState<boolean>(true)
  const { data } = usePendingReservationsQuery({
    onSuccess: () => setQueryEnabled(false),
    enabled: isQueryEnabled
  })

  const { mutate: acceptReservationMutate } = useAcceptReservation({
    onSuccess: () => {
      setQueryEnabled(true)
      show({ message: t('screen.manageReservations.acceptedReservation'), type: SNACKBAR_SUCCESS })
    },
    onError: () => show({ message: t('screen.manageReservations.errors.acceptReservation'), type: SNACKBAR_ERROR })
  })

  const { mutate: rejectReservationMutate } = useRejectReservation({
    onSuccess: () => {
      setQueryEnabled(true)
      show({ message: t('screen.manageReservations.rejectedReservation'), type: SNACKBAR_SUCCESS })
    },
    onError: () => show({ message: t('screen.manageReservations.errors.rejectReservation'), type: SNACKBAR_ERROR })
  })

  const handleAcceptButton = (id: number) => {
    acceptReservationMutate(id)
  }

  const handleRejectButton = (id: number) => {
    rejectReservationMutate(id)
  }

  const reservationsToPrint: ReservationToPrint[] = useMemo(() => (
    (data?.map(reservation => ({
      id: reservation.id,
      name: reservation.rentalBook?.details.name || null,
      author: reservation.rentalBook?.details.author || null,
      publisher: reservation.rentalBook?.details.publisher || null,
      publicationDate: reservation.rentalBook?.details.publicationDate || null,
      endTime: reservation.endTime,
      status: reservation.status
    })) || [])
  ), [data])

  return (
    <Styled.RootContainer>
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
              {reservationsToPrint?.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {reservationsColumns.map(column => (
                    <TableCell key={column.id} align="left">
                      {column.id === 'actions' ? (
                        <>
                          <IconButton onClick={() => handleRejectButton(row.id)}>
                            <BlockRounded />
                          </IconButton>
                          <IconButton
                            disabled={!row.name && !row.author && !row.publisherr}
                            onClick={() => handleAcceptButton(row.id)}
                          >
                            <CheckCircleOutlineRounded />
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
          {!data?.length && (
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
