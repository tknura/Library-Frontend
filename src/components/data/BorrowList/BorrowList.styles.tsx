import TableContainer from '@material-ui/core/TableContainer'
import styled from 'styled-components'

const BorrowsContainer = styled.div`
  width: 500px;
  margin: 40px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
`

const StyledTableContainer = styled(TableContainer)`
  margin: 20px 0;
`

export {
  BorrowsContainer,
  StyledTableContainer as TableContainer
}
