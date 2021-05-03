import { BrowserRouter } from 'react-router-dom'
import { Snackbar } from '@material-ui/core'

import { useSnackbarAlertContext } from 'components/providers/SnackbarProvider/SnackbarAlertContext'
import { useSnackbarContext } from 'components/providers/SnackbarProvider/SnackbarContext'
import { MainRoutes } from 'components/routes/MainRoutes'
import { Alert } from 'components/utillity/Alert'

const App = (): JSX.Element => {
  const snackbarProps = useSnackbarContext()
  const snackbarAlertProps = useSnackbarAlertContext()

  return (
    <BrowserRouter>
      <div>
        <MainRoutes />
        <Snackbar {...snackbarProps}>
          <Alert {...snackbarAlertProps} />
        </Snackbar>
      </div>
    </BrowserRouter>
  )
}

export default App
