import React, {
  useRef,
  useState,
} from 'react'
import { SNACKBAR_INFO } from 'constants/snackbarTypes'
import { ShowSnackbarContext } from './ShowSnackbarContext'
import { SnackbarContext } from './SnackbarContext'
import { SnackbarAlertContext } from './SnackbarAlertContext'

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const self = useRef({
    message: '',
    type: SNACKBAR_INFO,
  })

  const hideSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const openSnackbar = ({ message, type }) => {
    self.current.message = message
    self.current.type = type
    setOpen(true)
  }

  const snackbarContextValue = {
    open,
    onClose: hideSnackbar,
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  }

  const showSnackbarContextValue = {
    show: openSnackbar,
  }

  const snackbarAlertContextValue = {
    severity: self.current.type,
    children: self.current.message,
    onClose: hideSnackbar,
    autoHideDuration: 4000,
  }

  return (
    <ShowSnackbarContext.Provider value={showSnackbarContextValue}>
      <SnackbarContext.Provider value={snackbarContextValue}>
        <SnackbarAlertContext.Provider value={snackbarAlertContextValue}>
          {children}
        </SnackbarAlertContext.Provider>
      </SnackbarContext.Provider>
    </ShowSnackbarContext.Provider>
  )
}
