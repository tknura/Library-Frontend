import { useHistory } from 'react-router'

import { BOOKS_ROUTE } from 'constants/routeNames'
import { BookList } from 'components/data/BookList/BookCardList'
import { Book } from 'components/data/BookList/BookCard/BookCard'

const placeholderBooks: Book[] = [
  {
    id: 1,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: true,
    howMany: 115
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
    available: false,
    howMany: 0
  },
  {
    id: 4,
    title: 'asd',
    author: 'zxc',
    photos: ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'],
    available: false,
    howMany: 0
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
      <BookList
        items={placeholderBooks}
        onItemButtonClick={() => history.push(`${BOOKS_ROUTE}/1`)}
      />
    </div>
  )
}

export { BooksScreen }
