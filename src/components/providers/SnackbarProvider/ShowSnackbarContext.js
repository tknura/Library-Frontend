import { createContext, useContext } from 'react'
import invariant from 'tiny-invariant'

export const ShowSnackbarContext = createContext(undefined)

export const useShowSnackbarContext = () => {
  const contextValue = useContext(ShowSnackbarContext)

  invariant(contextValue, 'useSnackbar hook should be used within SnackbarContext')

  return contextValue
}
