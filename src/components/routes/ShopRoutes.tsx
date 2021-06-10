import { Redirect, Route, Switch } from 'react-router-dom'

import { ACCOUNT_ROUTE, BOOKS_ROUTE, CART_ROUTE } from 'constants/routeNames'
import { CartScreen } from 'screens/CartScreen/CartScreen'
import { BooksScreen } from 'screens/BooksScreen/BooksScreen'
import { BookDetailsScreen } from 'screens/BookDetailsScreen/BookDetailsScreen'
import { RestrictedRoute } from 'components/navigation/RestrictedRoute/RestrictedRoute'
import { AccountScreen } from 'screens/AccountScreen/AccountScreen'

interface ShopRoutesProps {
  url: string
}

const ShopRoutes = ({ url }: ShopRoutesProps): JSX.Element => (
  <Switch>
    <Route exact path={BOOKS_ROUTE}>
      <BooksScreen />
    </Route>
    <Route exact path={CART_ROUTE}>
      <CartScreen />
    </Route>
    <Route exact path={`${BOOKS_ROUTE}/:id`}>
      <BookDetailsScreen />
    </Route>
    <RestrictedRoute accessRoles={['CLIENT', 'EMPLOYEE', 'MANAGER']} path={ACCOUNT_ROUTE}>
      <AccountScreen />
    </RestrictedRoute>
    <Route exact path="/tempacc">
      <AccountScreen />
    </Route>
    <Redirect exact path="*" to={`${BOOKS_ROUTE}`} />
  </Switch>
)

export { ShopRoutes }
