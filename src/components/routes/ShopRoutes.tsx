import { Redirect, Route, Switch } from 'react-router-dom'

import { BOOKS_ROUTE, CART_ROUTE } from 'constants/routeNames'
import { CartScreen } from 'screens/CartScreen/CartScreen'
import { BooksTab } from 'screens/tabs/BooksTab'
import { BookDetailsScreen } from 'screens/BookDetails/BookDetailsScreen'

interface ShopRoutesProps {
  url: string
}

const ShopRoutes = ({ url }: ShopRoutesProps): JSX.Element => (
  <Switch>
    <Redirect exact path={`${url}`} to={`${url}/books`} />
    <Route exact path={`${url}${BOOKS_ROUTE}`}>
      <BooksTab />
    </Route>
    <Route exact path={`${url}${CART_ROUTE}`}>
      <CartScreen />
    </Route>
    <Route exact path={`${url}${BOOKS_ROUTE}/:id`}>
      <BookDetailsScreen />
    </Route>
  </Switch>
)

export { ShopRoutes }
