import { Button, Paper } from '@material-ui/core'
import styled from 'styled-components'

const RootContainer = styled.div`
  flex: 1;
  margin: 50px;
  width: 100%;
`

const StyledPaper = styled(Paper)`
  flex: 1;
  padding: 20px;
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const SerialNumberContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`

const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export {
  RootContainer,
  StyledPaper as Paper,
  ActionsContainer,
  NoDataContainer,
  SerialNumberContainer,
  StyledButton as Button
}
