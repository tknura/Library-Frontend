import { Grid } from '@material-ui/core'

import { Book } from './BookCard/BookCard'
import * as Styled from './BookCardList.styles'

interface BookListProps {
  items: Book[],
  className?: string
}

const BookList = ({
  items,
  className,
}: BookListProps): JSX.Element => (
  <Styled.RootGrid
    container
    spacing={2}
    direction="row"
    className={className}
  >
    {items?.map(item => (
      <Grid key={item.id} item xs={12} md={6} lg={4}>
        <Styled.BookCard item={item} />
      </Grid>
    ))}
  </Styled.RootGrid>
)

export { BookList }
