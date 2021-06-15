import TableContainer from '@material-ui/core/TableContainer'
import styled from 'styled-components'

const BorrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  min-width: 500px;
  margin: 40px;
  padding: 30px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
`

const StyledTableContainer = styled(TableContainer)`
  margin: 20px 0;
`

export {
  BorrowsContainer,
  StyledTableContainer as TableContainer
}
