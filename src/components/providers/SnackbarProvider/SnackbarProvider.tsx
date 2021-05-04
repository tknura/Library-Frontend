import {
  useRef,
  useState,
  ReactNode
} from 'react'
import { SNACKBAR_INFO } from 'constants/snackbarTypes'
import { ShowSnackbarContext } from './ShowSnackbarContext'
import { SnackbarContext } from './SnackbarContext'
import { SnackbarAlertContext } from './SnackbarAlertContext'

interface SnackbarProviderProps {
  children: ReactNode
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const self = useRef({
    message: '',
    type: SNACKBAR_INFO,
  })

  const hideSnackbar = (event: unknown, reason: unknown) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const openSnackbar = ({ message, type }: { message: string, type: string }) => {
    self.current.message = message
    self.current.type = type
    setOpen(true)
  }

  const snackbarContextValue: any = {
    open,
    onClose: hideSnackbar,
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  }

  const showSnackbarContextValue: any = {
    show: openSnackbar,
  }

  const snackbarAlertContextValue: any = {
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
