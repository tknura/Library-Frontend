import styled from 'styled-components'
import {
  Paper,
  Typography,
} from '@material-ui/core'

const CartItemContainer = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  margin: 15px 25px;
  min-width: 400px;
  max-width: 800px;
`

const CartItemDataContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  margin: 15px 25px;
`

const CartItemDeleteContainer = styled.div`
  flex: 1;
  height: 20px;
  margin-left: 90%;
`

const Image = styled.img`
  flex: 1;
  width: 125px;
  height: 125px;
  padding: 10px 15px;
  margin: 15px 25px;
`

const DescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  margin: 15px 10px;
`

const Text = styled(Typography)`
  flex: 1;
  margin: 5px 5px;
`

const ReservationDateContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  margin: 15px 25px;
`

export {
  CartItemContainer,
  CartItemDataContainer,
  CartItemDeleteContainer,
  Image,
  DescriptionContainer,
  Text,
  ReservationDateContainer,
}
