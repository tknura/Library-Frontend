import {
  Badge,
  FormControl,
  IconButton,
  MenuItem,
  Toolbar,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { RestrictedContent } from 'components/navigation/RestrictedContent/RestrictedContent'
import * as Styled from './NavBar.styles'

interface NavBarProps {
  cartItemsAmount: number
  isUserLogged: boolean
  onLanguageChange: (language: string) => void
  onAppNameButtonClick: () => void
  onAccountButtonClick: () => void
  onCartButtonClick: () => void
  onAuthButtonClick: () => void
}

const NavBar = ({
  cartItemsAmount,
  isUserLogged,
  onLanguageChange: handleLanguageChange,
  onAppNameButtonClick: handleAppNameButtonClick,
  onAccountButtonClick: handleAccountButtonClick,
  onCartButtonClick: handleCartButtonClick,
  onAuthButtonClick: handleAuthButtonClick,
}: NavBarProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  return (
    <Styled.AppBar position="sticky">
      <Styled.TitleButton onClick={handleAppNameButtonClick}>
        {t('common.appName')}
      </Styled.TitleButton>
      <Toolbar>
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
          <RestrictedContent accessRoles={['CLIENT', 'EMPLOYEE', 'MANAGER']}>
            <IconButton onClick={handleAccountButtonClick}>
              <Badge badgeContent={cartItemsAmount} color="secondary">
                <Styled.AccountIcon />
              </Badge>
            </IconButton>
          </RestrictedContent>
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
    </Styled.AppBar>
  )
}

export { NavBar }
