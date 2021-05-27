/* eslint-disable arrow-body-style */
import {
  CardContent,
  Fab,
  Typography,
  CardActionArea
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useTranslation } from 'react-i18next'

import { BOOKS_ROUTE } from 'constants/routeNames'
import { Book } from 'api/books'
import * as Styled from './BookCard.styles'

interface BookCardProps {
  item: Book
  onButtonClick: () => void
}

const BookCard = ({
  item,
  onButtonClick: handleButtonClick,
}: BookCardProps): JSX.Element => {
  const { t } = useTranslation()
  const placeholderPhoto = 'https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'

  return (
    <Styled.Card>
      <CardActionArea href={`${BOOKS_ROUTE}/${item.bookId}`}>
        <Styled.CardMedia image={item.urls[0] || placeholderPhoto} />
      </CardActionArea>
      <Styled.ContentContainer>
        <CardContent>
          <Typography variant="h6">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.author}
          </Typography>
          <Styled.StockText
            variant="body2"
            $color={(item.numberOfBooks - item.numberOfOccupiedBooks) > 0 ? 'lightgreen' : 'red'}
          >
            {`${t('screen.bookList.howMany')}: ${(item.numberOfBooks - item.numberOfOccupiedBooks)}`}
          </Styled.StockText>
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
}

export { BookCard }
export type { Book }
