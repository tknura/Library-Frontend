import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import { useQuery } from 'react-query'
// import { OrderableItemsList } from 'components/views/OrderableItemList/OrderableItemsList'
// import { shuffle } from 'utils/shuffle'
import { getBooks } from 'api/fetches/get'
import { BookList } from 'components/data/BookList/BookCardList'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
  },
  circularProgress: {
    marginLeft: '50%',
  },
}))

const BooksTab = () => {
  const classes = useStyles()
  const [booksList, setBooksList] = useState([])
  const { data: books, isLoading } = useQuery('booksData', getBooks)

  useEffect(() => {
    if (books?.data) {
      const tmpBooks = books?.data.map(b => ({
        id: b.ISBN,
        price: {
          value: b.price.displayValue,
          currency: b.price.currency,
        },
        name: b.title,
        author: b.author,
        image: b.image,
      }))
      // shuffle(tmpBooks)
      setBooksList(tmpBooks)
    }
  }, [books?.data])

  return (
    <Box className={classes.root}>
      {isLoading ? (
        <CircularProgress className={classes.circularProgress} />
      ) : (
        <BookList items={booksList} onItemButtonClick={() => null} />)}
    </Box>
  )
}

export { BooksTab }
