import { useQuery, UseQueryResult } from 'react-query'

import { getBooks } from 'api/fetches/get'

const useBooksQuery = ()
: UseQueryResult<unknown, unknown> => (
  useQuery('books', getBooks)
)

export { useBooksQuery }
