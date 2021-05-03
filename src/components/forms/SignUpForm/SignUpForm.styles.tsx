import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const StyledTextField = styled(TextField)`
  margin-top: 20px;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

export {
  Form,
  StyledTextField as TextField,
  StyledButton as Button,
}
