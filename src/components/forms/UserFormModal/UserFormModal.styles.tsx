import styled from 'styled-components'
import { TextField } from '@material-ui/core'

import { Modal } from 'components/utillity/Modal/Modal'
import { Select } from 'components/inputs/Select'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 90%;
  min-width: 500px;
`

const StyledTextField = styled(TextField)`
  margin-top: 20px;
`

const StyledSelect = styled(Select)`
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

export {
  Form,
  StyledTextField as TextField,
  ButtonContainer,
  StyledModalContent as ModalContent,
  StyledSelect as Select,
}
