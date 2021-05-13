import { useHistory, useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavBar } from 'components/navigation/NavBar/NavBar'
import { ShopRoutes } from 'components/routes/ShopRoutes'
import { useLogout, useUserLoggedIn } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { CART_ROUTE, AUTH_ROUTE } from 'constants/routeNames'
import { SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import * as Styled from './ShopScreen.styles'

const ShopScreen = (): JSX.Element => {
  const { url } = useRouteMatch()
  const { i18n } = useTranslation()
  const isUserLoggedIn = useUserLoggedIn()
  const logout = useLogout()
  const history = useHistory()
  const { show } = useShowSnackbar()

  const handleRedirectToCart = () => {
    history.push(`${url}${CART_ROUTE}`)
  }

  const handleAuthButtonClick = () => {
    if (isUserLoggedIn) {
      logout()
      show({ message: 'navigation.logoutMessage', type: SNACKBAR_SUCCESS })
    } else {
      history.push(`${AUTH_ROUTE}`)
    }
  }

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <Styled.RootContainer>
      <NavBar
        url={url}
        isUserLogged={isUserLoggedIn}
        cartItemsAmount={0}
        onCartButtonClick={handleRedirectToCart}
        onLanguageChange={handleLanguageChange}
        onAuthButtonClick={handleAuthButtonClick}
      />
      <Styled.ContentContainer>
        <ShopRoutes url={url} />
      </Styled.ContentContainer>
    </Styled.RootContainer>
  )
}

export { ShopScreen }
