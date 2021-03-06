import styled, { css } from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {
  AppBar,
  Button,
  IconButton,
  IconButtonProps,
  Select,
  Toolbar
} from '@material-ui/core'

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => css`
    flex-grow: 1;
    padding: 0;
    margin: 0;

    ${theme.breakpoints.down('sm')} {
      padding-top: 80px;
      align-items: center;
    }
  `}
`

const AuthButton = styled(Button)`
  margin: auto;
`

const TitleButton = styled(Button)`
${({ theme }) => css`
    position: absolute;
    width: 200px;
    height: 50px;
    z-index: 10;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -25px;
    font-size: 2rem;
    color: ${theme.palette.accents.main};

    ${theme.breakpoints.down('sm')} {
      top: 50px;
    }
  `}
`

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const ToolbarRightContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledSelect = styled(Select)`
  ${({ theme }) => css`
    color: ${theme.palette.accents.main};
    border-color: ${theme.palette.accents.main};
  `}
`

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  ${({ theme }) => css`
    color: ${theme.palette.accents.main};
  `}
`

const StyledAccountIcon = styled(AccountCircleIcon)`
  ${({ theme }) => css`
    color: ${theme.palette.accents.main};
  `}
`

interface DrawerButtonProps extends IconButtonProps {
  $hidden?: boolean
}

const DrawerButton = styled(
  (props: DrawerButtonProps) => (<IconButton {...props} />)
)`
  opacity: ${({ $hidden }) => $hidden ? 0 : 1};
`

export {
  StyledAppBar as AppBar,
  AuthButton,
  TitleButton,
  StyledToolbar as Toolbar,
  StyledSelect as Select,
  ToolbarRightContainer,
  StyledShoppingCartIcon as ShoppingCartIcon,
  StyledAccountIcon as AccountIcon,
  DrawerButton,
}
