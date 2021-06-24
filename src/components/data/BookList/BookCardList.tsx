import { Grid } from '@material-ui/core'

import { Book, BookCard } from './BookCard/BookCard'
import * as Styled from './BookCardList.styles'

interface BookListProps {
  items: Book[],
}

const BookList = ({
  items,
}: BookListProps): JSX.Element => (
  <Styled.RootGrid container spacing={2}>
    {items?.map(item => (
      <Grid key={item.id} item xs={12} sm={6} md={3} xl="auto" lg="auto">
        <BookCard item={item} />
      </Grid>
    ))}
  </Styled.RootGrid>
)

export { BookList }
