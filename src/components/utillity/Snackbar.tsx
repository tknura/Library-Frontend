import { Snackbar as MuiSnackbar, SnackbarProps } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { useAlertProps, useSnackbarProps } from 'components/providers/SnackbarProviders'

const Snackbar = (props: SnackbarProps): JSX.Element => {
  const snackbarProps = useSnackbarProps()
  const snackbarAlertProps = useAlertProps()

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      autoHideDuration={4000}
      {...snackbarProps}
      {...props}
    >
      <Alert
        elevation={6}
        variant="filled"
        {...snackbarAlertProps}
      />
    </MuiSnackbar>
  )
}

export { Snackbar }
