import CircularProgress from '@material-ui/core/CircularProgress'
import { BookList } from 'components/data/BookList/BookCardList'
import styled from 'styled-components'

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px;
`

const StyledBookList = styled(BookList)`
  width: 75%;
`

export {
  RootContainer,
  Loading,
  StyledBookList as BookList
}
