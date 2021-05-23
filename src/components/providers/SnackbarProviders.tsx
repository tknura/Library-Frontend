import { useRef, useState } from 'react'
import constate from 'constate'
import { SnackbarCloseReason } from '@material-ui/core'

import { SNACKBAR_INFO } from 'constants/snackbarTypes'
import { SnackbarType } from 'types/SnackbarType'

interface SnackbarInfo {
  message: string
  type?: SnackbarType
}

const useSnackbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const self = useRef<SnackbarInfo>({
    message: '',
    type: SNACKBAR_INFO,
  })

  const hideSnackbar = (_: unknown, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const openSnackbar = ({ message, type }: SnackbarInfo) => {
    self.current.message = message
    self.current.type = type
    setOpen(true)
  }

  const snackbarProps = {
    open,
    onClose: hideSnackbar,
  }

  const snackbarAlertProps = {
    severity: self.current.type,
    children: self.current.message,
  }

  return { openSnackbar, snackbarProps, snackbarAlertProps }
}

const [
  SnackbarProvider,
  useShowSnackbar,
  useSnackbarProps,
  useAlertProps,
] = constate(
  useSnackbar,
  value => ({ show: value.openSnackbar }),
  value => value.snackbarProps,
  value => value.snackbarAlertProps,
)

export {
  SnackbarProvider,
  useShowSnackbar,
  useSnackbarProps,
  useAlertProps,
}
