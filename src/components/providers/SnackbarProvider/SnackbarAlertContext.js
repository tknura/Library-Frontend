import { createContext, useContext } from 'react'
import invariant from 'tiny-invariant'

export const SnackbarAlertContext = createContext(undefined)

export const useSnackbarAlertContext = () => {
  const contextValue = useContext(SnackbarAlertContext)

  invariant(contextValue, 'useSnackbar hook should be used within SnackbarContext')

  return contextValue
}
