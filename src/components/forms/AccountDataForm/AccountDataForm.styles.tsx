import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'

const AccDataContainer = styled.div`
  width: 500px;
  margin-top: 40px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
`
const StyledTextField = styled(TextField)`
  margin-top: 20px;
  width: 50%;
`

const StyledButton = styled(Button)`
  margin: 20px 20px 0 20px;
  width: 40%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export {
  AccDataContainer,
  StyledTextField as TextField,
  StyledButton as Button,
  ButtonContainer
}
