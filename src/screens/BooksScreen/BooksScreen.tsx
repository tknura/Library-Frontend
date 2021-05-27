import { Button } from '@material-ui/core'
import { BOOKS_ROUTE } from 'constants/routeNames'
import { useHistory } from 'react-router'

import { BookList } from '../../components/data/BookList/BookCardList'
import { Book } from '../../components/data/BookList/BookCard/BookCard'

const placeholderBooks: Book[] = [
  {
    id: 1,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  },
  {
    id: 2,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  },
  {
    id: 3,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  },
  {
    id: 4,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  },
  {
    id: 5,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  },
  {
    id: 6,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  },
  {
    id: 7,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 5
  }
]

const BooksScreen = (): JSX.Element => {
  const history = useHistory()

  return (
    <div>
      <br />
      <BookList
        items={placeholderBooks}
        onItemButtonClick={() => history.push(`${BOOKS_ROUTE}/1`)}
      />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push(`${BOOKS_ROUTE}/1`)}
      >
        Redirect to book
      </Button>
    </div>
  )
}

export { BooksScreen }
