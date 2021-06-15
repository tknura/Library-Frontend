import { Grid } from '@material-ui/core'

import { Id } from 'types/Id'
import { Book, BookCard } from './BookCard/BookCard'
import * as Styled from './BookCardList.styles'

interface BookListProps {
  items: Book[],
  onItemButtonClick: (id: Id) => void
}

const BookList = ({
  items,
  onItemButtonClick: handleItemButtonClick,
}: BookListProps): JSX.Element => (
  <Styled.RootGrid container spacing={2}>
    {items?.map(item => (
      <Grid key={item.id} item xs={3}>
        <BookCard item={item} onButtonClick={() => handleItemButtonClick(item.id)} />
      </Grid>
    ))}
  </Styled.RootGrid>
)

export { BookList }
