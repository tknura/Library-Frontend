import styled, { css } from 'styled-components'
import { AppBar, Button, Select } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
  align-items: flex-end;
  padding: 0;
  margin: 0;
`

const AuthButton = styled(Button)`
  margin: auto;
`

const TitleButton = styled(Button)`
${({ theme }) => css`
    position: absolute;
    width: 200px;
    height: 50px;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -25px;
    font-size: 2rem;
    color: ${theme.palette.accents.main};
  `}
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

export {
  StyledAppBar as AppBar,
  AuthButton,
  TitleButton,
  StyledSelect as Select,
  ToolbarRightContainer,
  StyledShoppingCartIcon as ShoppingCartIcon,
}
