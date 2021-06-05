import Button from '@material-ui/core/Button'
import styled from 'styled-components'

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
  margin-left: 85%;
`

export {
  ModalDataContainer,
  ModalButtonsContainer,
  ChoiceButton
}
