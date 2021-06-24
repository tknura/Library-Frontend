import { Button, CircularProgress, Paper } from '@material-ui/core'
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

const ReservationButton = styled(Button)`
  padding: 10px 15px;
  margin: 15px 25px;
  margin-left: 85%;
`

const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px;
`
const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export {
  CartItemsContainer,
  CartFooterContainer,
  ReservationButton,
  Loading,
  NoDataContainer
}
