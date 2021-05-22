import { useQuery, UseQueryResult } from 'react-query'

import { getBooks, getBook } from 'api/fetches/get'
import { useFetch } from 'components/providers/FetchProvider'
import { Book } from 'api/types/books'

const useBooksQuery = ()
: UseQueryResult<unknown, unknown> => {
  const { fetch } = useFetch()
  return useQuery('books', () => getBooks(fetch))
}

const useBookQuery = (id: number)
: UseQueryResult<Book, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['books', id], () => getBook(fetch, id))
}

export { useBooksQuery, useBookQuery }
