import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers'

const DatePicker = (props: KeyboardDatePickerProps): JSX.Element => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      autoOk
      disableToolbar
      variant="inline"
      format="dd/MM/yyyy"
      margin="normal"
      id="date-picker-inline"
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      {...props}
    />
  </MuiPickersUtilsProvider>
)

export { DatePicker }
