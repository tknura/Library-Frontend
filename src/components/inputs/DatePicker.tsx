import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { isValid } from 'date-fns'

interface DatePickerProps{
    date: Date
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleChange: Function
}

const DatePicker = ({
  date,
  handleChange
}: DatePickerProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(date)

  const handleDateChange = (targetDate: Date | null) => {
    setSelectedDate(targetDate)
    if (isValid(targetDate)) {
      handleChange(targetDate)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  )
}

export { DatePicker }
