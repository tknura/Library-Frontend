import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import { Print } from '@material-ui/icons'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import fileDownload from 'js-file-download'

import { useAllReservationsQuery, usePrintReservationsQuery } from 'api/reservations'
import { DatePicker } from 'components/inputs/DatePicker'
import { reservationsColumns } from './AllReservationsScreen.constants'
import * as Styled from './AllReservationsScreen.styles'

interface ReservationToPrint {
  [key: string]: string | string[] | boolean | number | undefined
  id: number,
  name: string,
  author: string,
  publisher: string,
  publicationDate: string,
  endTime: string,
  status: string
}

const AllReservationsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const todayDate = new Date()
  const [startDate, setStartDate] = useState<number | Date>(todayDate)
  const [endDate, setEndDate] = useState<number | Date>(todayDate)
  const { data } = useAllReservationsQuery()
  const [isQueryEnabled, setQueryEnabled] = useState<boolean>(false)
  const { data: reportData } = usePrintReservationsQuery(
    format(startDate, 'yyyy-MM-dd'), format(endDate, 'yyyy-MM-dd'), {
      enabled: isQueryEnabled,
    }
  )
  const [reservationsToPrint, setReservationsToPrint] = useState<ReservationToPrint[]>()

  useEffect(() => {
    setReservationsToPrint(data?.map(reservation => ({
      id: reservation.id,
      name: reservation.rentalBook.details.name,
      author: reservation.rentalBook.details.author,
      publisher: reservation.rentalBook.details.publisher,
      publicationDate: reservation.rentalBook.details.publicationDate,
      endTime: reservation.endTime,
      status: reservation.status
    })) || [])
  }, [data])

  useEffect(() => {
    if (reportData && isQueryEnabled) {
      setQueryEnabled(false)
      const binary = atob(reportData)
      const len = binary.length
      const buffer = new ArrayBuffer(len)
      const view = new Uint8Array(buffer)
      for (let i = 0; i < len; i += 1) {
        view[i] = binary.charCodeAt(i)
      }
      const blob = new Blob([view], { type: 'application/pdf' })
      fileDownload(blob, 'report.pdf')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reportData])

  const handlePrintButton = () => {
    setQueryEnabled(true)
  }

  const handleChangeStartDate = (targetDate: MaterialUiPickersDate) => {
    if (targetDate) {
      setStartDate(targetDate)
    }
  }

  const handleChangeEndDate = (targetDate: MaterialUiPickersDate) => {
    if (targetDate) {
      setEndDate(targetDate)
    }
  }

  return (
    <Styled.RootContainer>
      <Styled.ActionsContainer>
        <DatePicker
          label={t('screen.allReservations.startDate')}
          value={startDate}
          onChange={handleChangeStartDate}
          maxDate={endDate}
          InputProps={{ readOnly: true }}
        />
        <DatePicker
          label={t('screen.allReservations.endDate')}
          value={endDate}
          onChange={handleChangeEndDate}
          minDate={startDate}
          maxDate={todayDate}
          InputProps={{ readOnly: true }}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Print />}
          onClick={handlePrintButton}
        >
          {t('screen.allReservations.printRaport')}
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
              {reservationsToPrint?.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {reservationsColumns.map(column => (
                    <TableCell key={column.id} align="left">
                      {row[column.id] || '-'}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {!data?.length && (
            <Styled.NoDataContainer>
              <Typography color="primary">
                {t('screen.allReservations.empty')}
              </Typography>
            </Styled.NoDataContainer>
          )}
        </TableContainer>
      </Styled.Paper>
    </Styled.RootContainer>
  )
}

export { AllReservationsScreen }
