import { Redirect, Switch } from 'react-router-dom'

import { MANAGE_BOOKS_ROUTE, MANAGE_RESERVATIONS_ROUTE, MANAGE_USERS_ROUTE } from 'constants/routeNames'
import { RestrictedRoute } from 'components/navigation/RestrictedRoute/RestrictedRoute'
import { ManageBooksScreen } from 'screens/ManageBookScreen/ManageBookScreen'
import { ManageUsersScreen } from 'screens/ManageUsersScreen/ManageUsersScreen'
import { ManageReservationsScreen } from 'screens/ManageReservationsScreen/ManageReservationsScreen'

const ManageRoutes = (): JSX.Element => (
  <Switch>
    <RestrictedRoute
      accessRoles={['EMPLOYEE', 'MANAGER']}
      path={MANAGE_BOOKS_ROUTE}
      exact
    >
      <ManageBooksScreen />
    </RestrictedRoute>
    <RestrictedRoute
      accessRoles={['EMPLOYEE', 'MANAGER']}
      path={MANAGE_USERS_ROUTE}
      exact
    >
      <ManageUsersScreen />
    </RestrictedRoute>
    <RestrictedRoute
      accessRoles={['EMPLOYEE', 'MANAGER']}
      path={MANAGE_RESERVATIONS_ROUTE}
      exact
    >
      <ManageReservationsScreen />
    </RestrictedRoute>
    <Redirect exact path="*" to={MANAGE_BOOKS_ROUTE} />
  </Switch>
)

export { ManageRoutes }
