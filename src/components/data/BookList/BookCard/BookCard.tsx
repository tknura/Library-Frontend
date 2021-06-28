/* eslint-disable arrow-body-style */
import {
  CardContent,
  Fab,
  Typography,
  CardActionArea
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { format } from 'date-fns'

import { useAddCartItem } from 'components/providers/CartProvider'
import { BOOKS_ROUTE } from 'constants/routeNames'
import * as Styled from './BookCard.styles'

interface Book {
  id: number
  title: string
  author: string
  photos: string[]
  howMany: number
}

interface BookCardProps {
  item: Book
  className?: string
}

const BookCard = ({
  item,
  className,
}: BookCardProps): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const addToCart = useAddCartItem()
  const placeholderPhoto = 'https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'

  const handleRedirect = () => {
    history.push(`${BOOKS_ROUTE}/${item.id}`)
  }

  const handleAddToCart = () => {
    const photo = item?.photos?.length ? item.photos[0] : placeholderPhoto
    const todayDate = new Date()
    addToCart({
      itemId: item.id,
      title: item.title,
      author: item.author,
      photoUrl: photo,
      endDate: format(new Date().setDate(todayDate.getDate() + 1), 'yyyy-MM-dd')
    })
  }

  return (
    <Styled.Card className={className}>
      <CardActionArea onClick={handleRedirect}>
        <Styled.CardMedia image={item?.photos?.length ? item.photos[0] : placeholderPhoto} />
      </CardActionArea>
      <Styled.ContentContainer>
        <CardContent>
          <Typography variant="h6">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.author}
          </Typography>
          <Styled.StockText
            variant="body2"
            $color={item.howMany > 0 ? 'lightgreen' : 'red'}
          >
            {`${t('screen.bookList.howMany')}: ${item.howMany}`}
          </Styled.StockText>
        </CardContent>
        <Styled.CardActions>
          <Fab
            size="small"
            color="secondary"
            onClick={handleAddToCart}
            disabled={!item.howMany}
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
