import { Button, Paper } from '@material-ui/core'
import styled from 'styled-components'

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  margin: 15px 25px;
`

const CartFooterContainer = styled(Paper)`
  position: fixed;
  bottom: 0px;
  width: 100%;
`

const AddToCartButton = styled(Button)`
  padding: 10px 15px;
  margin: 15px 25px;
  margin-left: 85%;
`

export {
  CartItemsContainer,
  CartFooterContainer,
  AddToCartButton
}
