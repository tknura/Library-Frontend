import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import { useTheme } from '@material-ui/core'

import { AuthScreen } from 'screens/AuthScreen/AuthScreen'
import { AdminBooksList } from 'components/admin/AdminBooksList'
import { AdminUsersList } from 'components/admin/AdminUsersList'
import { LogoutButton } from 'components/admin/LogoutButton'
import { fetchJson } from './ManageScreen.utils'

if (!process.env.REACT_APP_API_URL) {
  throw new Error('No API URL passed, pass it in .env file!')
}
const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL as string, fetchJson)

const ManageScreen = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Admin
      dataProvider={dataProvider}
      loginPage={AuthScreen}
      logoutButton={LogoutButton}
      theme={theme}
    >
      <Resource name="books" list={AdminBooksList} />
      <Resource name="users" list={AdminUsersList} />
    </Admin>
  )
}

export { ManageScreen }
