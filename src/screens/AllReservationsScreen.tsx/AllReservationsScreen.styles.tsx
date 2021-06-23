import { Paper } from '@material-ui/core'
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
  justify-content: flex-end;
  margin-bottom: 20px;
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
  NoDataContainer
}
