import { Redirect, Switch } from 'react-router-dom'

import { ALL_RESERVATIONS_ROUTE,
  MANAGE_BOOKS_ROUTE,
  MANAGE_RESERVATIONS_ROUTE,
  MANAGE_USERS_ROUTE
} from 'constants/routeNames'
import { RestrictedRoute } from 'components/navigation/RestrictedRoute/RestrictedRoute'
import { ManageBooksScreen } from 'screens/ManageBookScreen/ManageBookScreen'
import { ManageUsersScreen } from 'screens/ManageUsersScreen/ManageUsersScreen'
import { ManageReservationsScreen } from 'screens/ManageReservationsScreen/ManageReservationsScreen'
import { AllReservationsScreen } from 'screens/AllReservationsScreen.tsx/AllReservationsScreen'

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
    <RestrictedRoute
      accessRoles={['EMPLOYEE', 'MANAGER']}
      path={ALL_RESERVATIONS_ROUTE}
      exact
    >
      <AllReservationsScreen />
    </RestrictedRoute>
    <Redirect exact path="*" to={MANAGE_BOOKS_ROUTE} />
  </Switch>
)

export { ManageRoutes }
