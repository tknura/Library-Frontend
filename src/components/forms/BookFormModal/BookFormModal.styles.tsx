import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { Modal } from 'components/utillity/Modal/Modal'
import { DatePicker } from 'components/inputs/DatePicker'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 500px;
  min-width: 500px;
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

const StyledModalContent = styled(Modal.Content)`
  overflow-y: auto;
`

const StyledDatePicker = styled(DatePicker)`
  margin-top: 20px;
`

export {
  Form,
  StyledTextField as TextField,
  ButtonContainer,
  StyledModalContent as ModalContent,
  StyledDatePicker as DatePicker,
}
