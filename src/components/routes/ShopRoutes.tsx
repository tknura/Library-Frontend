import { Redirect, Route, Switch } from 'react-router-dom'

import { BOOKS_ROUTE, CART_ROUTE } from 'constants/routeNames'
import { CartScreen } from 'screens/CartScreen/CartScreen'
import { BooksScreen } from 'screens/BooksScreen/BooksScreen'
import { BookDetailsScreen } from 'screens/BookDetailsScreen/BookDetailsScreen'

interface ShopRoutesProps {
  url: string
}

const ShopRoutes = ({ url }: ShopRoutesProps): JSX.Element => (
  <Switch>
    <Route exact path={`${BOOKS_ROUTE}`}>
      <BooksScreen />
    </Route>
    <Route exact path={`${CART_ROUTE}`}>
      <CartScreen />
    </Route>
    <Route exact path={`${BOOKS_ROUTE}/:id`}>
      <BookDetailsScreen />
    </Route>
    <Redirect exact path="*" to={`${BOOKS_ROUTE}`} />
  </Switch>
)

export { ShopRoutes }
