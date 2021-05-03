import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const StyledTextField = styled(TextField)`
  margin-top: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0;
`

export {
  Form,
  StyledTextField as TextField,
  ButtonContainer,
}
