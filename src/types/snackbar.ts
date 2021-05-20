import { SNACKBAR_ERROR, SNACKBAR_INFO, SNACKBAR_SUCCESS, SNACKBAR_WARNING } from 'constants/snackbarTypes'

type SnackbarType = (
  typeof SNACKBAR_INFO
  | typeof SNACKBAR_SUCCESS
  | typeof SNACKBAR_ERROR
  | typeof SNACKBAR_WARNING
)

export type { SnackbarType }
