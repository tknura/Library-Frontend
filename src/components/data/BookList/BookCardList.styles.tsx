import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { BookCard } from './BookCard/BookCard'

const RootGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const StyledBookCard = styled(BookCard)`
  height: 100%;
  width: 100%;
`

export {
  RootGrid,
  StyledBookCard as BookCard
}
