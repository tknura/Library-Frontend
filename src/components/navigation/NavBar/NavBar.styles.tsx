import styled from 'styled-components'
import { AppBar, Button, Select, Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
  padding: 0;
  margin: 0;
`

const AuthButton = styled(Button)`
  margin: auto;
`

const Title = styled(Typography)`
  flex: 1;
`

const ToolbarRightContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledSelect = styled(Select)`
  color: white;
  border-color: white;
`

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: white;
`

export {
  StyledAppBar as AppBar,
  AuthButton,
  Title,
  StyledSelect as Select,
  ToolbarRightContainer,
  StyledShoppingCartIcon as ShoppingCartIcon,
}
