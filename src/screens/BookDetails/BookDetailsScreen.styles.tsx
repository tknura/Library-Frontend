import styled from 'styled-components'
import {
  Button,
  Paper,
  Typography
} from '@material-ui/core'

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 10px;
    margin: 20px 15px;
`

const PictureContainer = styled.div`
    flex: 1;
    padding: 10px 15px;
    margin: 5px 25px;
    width: 450px;
    height: 450px;
`

const DescriptionContainer = styled(Paper)`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    margin: 15px 25px;
    width: 400px;
    background: #ECECEC;
`

const TextContainer = styled(Paper)`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    margin: 15px 25px;
`

const Title = styled(Typography)`
  flex: 1;
  font-size: 28px;
  font-weight: bolder;
`

const Author = styled(Typography)`
  flex: 1;
  font-size: 24px;
`

const Text = styled(Typography)`
  flex: 1;
  font-size: 18px;
`

const AvailableText = styled(Typography)`
  flex: 1;
  font-size: 18px;
  color: #6772e5;
`

const DescriptionText = styled(Typography)`
  flex: 2;
  font-size: 18px;
`

const AddToCartButton = styled(Button)`
  flex: 1;
  background-color: #6772e5;
  color: white;
  padding: 10px 15px;
  margin: 15px 25px;
`

export {
  DetailsContainer,
  PictureContainer,
  DescriptionContainer,
  TextContainer,
  Title,
  Author,
  Text,
  AvailableText,
  DescriptionText,
  AddToCartButton
}
