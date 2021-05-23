import { AUTH_ROUTE, MANAGE_ROUTE } from 'constants/routeNames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { ShopScreen } from 'screens/ShopScreen/ShopScreen'
import { AuthScreen } from 'screens/AuthScreen/AuthScreen'
import { RestrictedRoute } from 'components/navigation/RestrictedRoute/RestrictedRoute'
import { ManageScreen } from 'screens/ManageScreen/ManageScreen'

const MainRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path={AUTH_ROUTE}>
      <AuthScreen />
    </Route>
    <RestrictedRoute exact path={MANAGE_ROUTE} accessRoles={['EMPLOYEE', 'MANAGER']}>
      <ManageScreen />
    </RestrictedRoute>
    <Route path="/">
      <ShopScreen />
    </Route>
    <Redirect exact path="*" to="/" />
  </Switch>
)

export { MainRoutes }
