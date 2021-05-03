import {
  CardContent,
  Fab,
  Typography,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { Id } from 'types/Id'
import * as Styled from './BookCard.styles'

interface Book {
  id: Id
  name: string
  author: string
  image: string
}

interface BookCardProps {
  item: Book
  onButtonClick: () => void
}

const BookCard = ({
  item,
  onButtonClick: handleButtonClick,
}: BookCardProps): JSX.Element => (
  <Styled.Card>
    <Styled.CardMedia image={item.image} />
    <Styled.ContentContainer>
      <CardContent>
        <Typography variant="h6" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.author}
        </Typography>
      </CardContent>
      <Styled.CardActions>
        <Fab
          size="small"
          color="secondary"
          onClick={handleButtonClick}
        >
          <AddShoppingCartIcon />
        </Fab>
      </Styled.CardActions>
    </Styled.ContentContainer>
  </Styled.Card>
)

export { BookCard }
export type { Book }
