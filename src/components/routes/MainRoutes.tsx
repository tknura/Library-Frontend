import { HOME_ROUTE, AUTH_ROUTE, BOOK_ROUTE } from 'constants/routeNames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { ShopScreen } from 'screens/ShopScreen/ShopScreen'
import { AuthScreen } from 'screens/AuthScreen/AuthScreen'
import { BookDetails } from 'screens/BookDetails/BookDetails'

const MainRoutes = (): JSX.Element => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path={HOME_ROUTE}>
      <ShopScreen />
    </Route>
    <Route path={AUTH_ROUTE}>
      <AuthScreen />
    </Route>
    <Route path={BOOK_ROUTE}>
      <BookDetails />
    </Route>
  </Switch>
)

export { MainRoutes }
