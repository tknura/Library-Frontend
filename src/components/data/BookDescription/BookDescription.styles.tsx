import styled from 'styled-components'
import {
  Button,
  Paper,
  Typography
} from '@material-ui/core'

const DescriptionContainer = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  margin: 15px 25px;
  max-width: 400px;
`

const TextContainer = styled(Paper)`
${({ theme }) => `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    margin: 15px 25px;
    background: ${theme.palette.background.default};
  `}
`

const Text = styled(Typography)`
  flex: 1;
`

const AvailableText = styled(Typography)`
${({ theme }) => `
    flex: 1;
    font-size: 18px;
    color: ${theme.palette.primary.main};
  `}
`

const DescriptionText = styled(Typography)`
  flex: 2;
`

const AddToCartButton = styled(Button)`
  flex: 1;
  padding: 10px 15px;
  margin: 15px 25px;
`

export {
  DescriptionContainer,
  TextContainer,
  Text,
  AvailableText,
  DescriptionText,
  AddToCartButton
}
