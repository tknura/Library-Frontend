import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

export const Alert = (props: AlertProps): JSX.Element => (
  <MuiAlert elevation={6} variant="filled" {...props} />
)
