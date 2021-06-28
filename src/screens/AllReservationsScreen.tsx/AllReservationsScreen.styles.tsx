import { Paper } from '@material-ui/core'
import styled from 'styled-components'

import { DatePicker } from 'components/inputs/DatePicker'

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

const StyledDatePicker = styled(DatePicker)`
  margin-left: 10px;
  margin-right: 10px;
`

export {
  RootContainer,
  StyledPaper as Paper,
  ActionsContainer,
  NoDataContainer,
  StyledDatePicker as DatePicker
}
