import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavBar } from 'components/navigation/NavBar/NavBar'
import { useLogout, useUserLoggedIn } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { ManageRoutes } from 'components/routes/ManageRoutes'
import { ManageDrawer } from 'components/navigation/ManageDrawer/ManageDrawer'
import { AUTH_ROUTE, MANAGE_BOOKS_ROUTE, MANAGE_USERS_ROUTE } from 'constants/routeNames'
import { SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import * as Styled from './ManageScreen.styles'

const ManageScreen = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  const isUserLoggedIn = useUserLoggedIn()
  const logout = useLogout()
  const history = useHistory()
  const { show } = useShowSnackbar()

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>()

  const handleAuthButtonClick = () => {
    if (isUserLoggedIn) {
      logout()
      show({ message: t('navigation.logoutMessage'), type: SNACKBAR_SUCCESS })
    } else {
      history.push(`${AUTH_ROUTE}`)
    }
  }

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
  }

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleRedirectToBooks = () => {
    history.push(MANAGE_BOOKS_ROUTE)
  }

  const handleRedirectToUsers = () => {
    history.push(MANAGE_USERS_ROUTE)
  }

  return (
    <Styled.RootContainer>
      <NavBar
        isUserLogged={isUserLoggedIn}
        cartItemsAmount={0}
        onAppNameButtonClick={handleRedirectToBooks}
        onLanguageChange={handleLanguageChange}
        onAuthButtonClick={handleAuthButtonClick}
        onManageDrawerOpen={handleDrawerOpen}
        hideCart
        hideAccount
        hideManageDrawerButton={isDrawerOpen}
      />
      <ManageDrawer
        open={isDrawerOpen}
        onDrawerClose={handleDrawerClose}
        onBookButtonClick={handleRedirectToBooks}
        onUsersButtonClick={handleRedirectToUsers}
      />
      <Styled.ContentContainer>
        <ManageRoutes />
      </Styled.ContentContainer>
    </Styled.RootContainer>
  )
}

export { ManageScreen }
