import { useHistory, useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavBar } from 'components/navigation/NavBar/NavBar'
import { ShopRoutes } from 'components/routes/ShopRoutes'
import { useLogout, useUserLoggedIn } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'hooks/useShowSnackbar'
import { CART_ROUTE, AUTH_ROUTE } from 'constants/routeNames'
import * as Styled from './ShopScreen.styles'

const ShopScreen = (): JSX.Element => {
  const { url } = useRouteMatch()
  const { t, i18n } = useTranslation()
  const isUserLoggedIn = useUserLoggedIn()
  const logout = useLogout()
  const show = useShowSnackbar()
  const history = useHistory()

  const handleRedirectToCart = () => {
    history.push(`${url}${CART_ROUTE}`)
  }

  const handleAuthButtonClick = () => {
    if (isUserLoggedIn) {
      logout()
      show({ message: t('navigation.signOutMessage') })
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
