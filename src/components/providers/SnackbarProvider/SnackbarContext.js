import { createContext, useContext } from 'react'
import invariant from 'tiny-invariant'

export const SnackbarContext = createContext(undefined)

export const useSnackbarContext = () => {
  const contextValue = useContext(SnackbarContext)

  invariant(contextValue, 'useSnackbar hook should be used within SnackbarContext')

  return contextValue
}
