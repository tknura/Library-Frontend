import { Paper, Button } from '@material-ui/core'
import styled from 'styled-components'

const ModalContainer = styled(Paper)`
${({ theme }) => `
  top:50%; 
  left:50%; 
  transform:translate(-50%, -50%); 

  position: absolute;
  max-width: 600px;
  max-height: 400px;
  border: 2px solid ${theme.palette.accents.main};
  `}
`

const ModalDataContainer = styled.div`
  padding: 15px 10px;
  margin: 20px 15px;
`

const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const ChoiceButton = styled(Button)`
  padding: 10px 15px;
  margin: 15px 25px;
`

export {
  ModalContainer,
  ModalDataContainer,
  ModalButtonsContainer,
  ChoiceButton
}
