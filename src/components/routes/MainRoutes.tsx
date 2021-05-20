import { AUTH_ROUTE } from 'constants/routeNames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { ShopScreen } from 'screens/ShopScreen/ShopScreen'
import { AuthScreen } from 'screens/AuthScreen/AuthScreen'

const MainRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path={AUTH_ROUTE}>
      <AuthScreen />
    </Route>
    <Route path="/">
      <ShopScreen />
    </Route>
    <Redirect exact path="*" to="/" />
  </Switch>
)

export { MainRoutes }
