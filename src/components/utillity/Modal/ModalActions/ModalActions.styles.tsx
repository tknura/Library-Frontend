import { Button } from '@material-ui/core'
import styled from 'styled-components'

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const CancelButton = styled(Button)`
  width: auto;
  height: 50px;
  margin-right: 10px;
`

const SaveButton = styled(Button)`
  width: auto;
  height: 50px;
  margin-left: 10px;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
`

export {
  ActionsContainer,
  CancelButton,
  SaveButton,
}
