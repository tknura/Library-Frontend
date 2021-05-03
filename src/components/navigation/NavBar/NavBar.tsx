import {
  Badge,
  FormControl,
  IconButton,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

import {
  BOOKS_ROUTE,
} from 'constants/routeNames'
import * as Styled from './NavBar.styles'

interface NavBarProps {
  url: string
  cartItemsAmount: number
  isUserLogged: boolean
  onLanguageChange: (language: string) => void
  onCartButtonClick: () => void
  onAuthButtonClick: () => void
}

const NavBar = ({
  url,
  cartItemsAmount,
  isUserLogged,
  onLanguageChange: handleLanguageChange,
  onCartButtonClick: handleCartButtonClick,
  onAuthButtonClick: handleAuthButtonClick,
}: NavBarProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const history = useHistory()

  return (
    <Styled.AppBar position="sticky">
      <Toolbar>
        <Styled.Title variant="h4">
          {t('common.appName')}
        </Styled.Title>
        <Styled.ToolbarRightContainer>
          <FormControl color="primary" size="small">
            <Styled.Select
              value={i18n.language}
              onChange={event => handleLanguageChange(event.target.value as string)}
            >
              <MenuItem value="pl">Polski</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Styled.Select>
          </FormControl>
          <IconButton onClick={handleCartButtonClick}>
            <Badge badgeContent={cartItemsAmount} color="secondary">
              <Styled.ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Styled.AuthButton
            color="inherit"
            onClick={handleAuthButtonClick}
          >
            {isUserLogged ? t('navigation.logout') : t('navigation.login')}
          </Styled.AuthButton>
        </Styled.ToolbarRightContainer>
      </Toolbar>
      <Tabs
        value={history.location.pathname}
        onChange={(_, value) => history.push(value)}
        centered
      >
        <Tab value={`${url}${BOOKS_ROUTE}`} label={t('navigation.tabNames.books')} />
      </Tabs>
    </Styled.AppBar>
  )
}

export { NavBar }
