import { MenuItem } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { useLogout } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import { BOOKS_ROUTE } from 'constants/routeNames'
import { useHistory } from 'react-router'

const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()
  const logout = useLogout()
  const history = useHistory()

  const handleClick = () => {
    logout()
    show({ message: t('navigation.logoutMessage'), type: SNACKBAR_SUCCESS })
    history.push(BOOKS_ROUTE)
  }

  return (
    <MenuItem onClick={handleClick}>
      {t('navigation.logout')}
    </MenuItem>
  )
}

export { LogoutButton }
