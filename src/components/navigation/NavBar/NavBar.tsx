import {
  Badge,
  FormControl,
  IconButton,
  MenuItem,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@material-ui/icons/Menu'

import { RestrictedContent } from 'components/navigation/RestrictedContent/RestrictedContent'
import * as Styled from './NavBar.styles'

interface NavBarProps {
  cartItemsAmount: number
  isUserLogged: boolean
  onLanguageChange: (language: string) => void
  onAppNameButtonClick: () => void
  onAuthButtonClick: () => void
  onAccountButtonClick?: () => void
  onCartButtonClick?: () => void
  hideAccount?: boolean
  hideCart?: boolean
  onManageDrawerOpen?: () => void
  hideManageDrawerButton?: boolean
}

const NavBar = ({
  cartItemsAmount,
  isUserLogged,
  onLanguageChange: handleLanguageChange,
  onAppNameButtonClick: handleAppNameButtonClick,
  onAccountButtonClick: handleAccountButtonClick,
  onAuthButtonClick: handleAuthButtonClick = () => null,
  onCartButtonClick: handleCartButtonClick = () => null,
  hideCart = false,
  hideAccount = false,
  hideManageDrawerButton = false,
  onManageDrawerOpen: handleManageDrawerOpen,
}: NavBarProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  return (
    <Styled.AppBar position="sticky">
      <Styled.TitleButton onClick={handleAppNameButtonClick}>
        {t('common.appName')}
      </Styled.TitleButton>
      <Styled.Toolbar>
        <Styled.DrawerButton
          color="inherit"
          onClick={handleManageDrawerOpen}
          edge="start"
          $hidden={hideManageDrawerButton}
          disabled={hideManageDrawerButton}
        >
          <MenuIcon />
        </Styled.DrawerButton>
        <Styled.ToolbarRightContainer>
          <FormControl color="primary" size="small">
            <Styled.Select
              value={i18n.language}
              onChange={event => handleLanguageChange(`${event.target.value}`)}
            >
              <MenuItem value="pl">Polski</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Styled.Select>
          </FormControl>
          {!hideAccount && (
            <RestrictedContent accessRoles={['CLIENT', 'EMPLOYEE', 'MANAGER']}>
              <IconButton onClick={handleAccountButtonClick}>
                <Badge badgeContent={cartItemsAmount} color="secondary">
                  <Styled.AccountIcon />
                </Badge>
              </IconButton>
            </RestrictedContent>)}
          {!hideCart && (
            <IconButton onClick={handleCartButtonClick}>
              <Badge badgeContent={cartItemsAmount} color="secondary">
                <Styled.ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}
          <Styled.AuthButton
            color="inherit"
            onClick={handleAuthButtonClick}
          >
            {isUserLogged ? t('navigation.logout') : t('navigation.login')}
          </Styled.AuthButton>
        </Styled.ToolbarRightContainer>
      </Styled.Toolbar>
    </Styled.AppBar>
  )
}

export { NavBar }
