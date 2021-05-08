import { useQuery, UseQueryResult } from 'react-query'

import { getBooks } from 'api/fetches/get'
import { useFetch } from 'components/providers/FetchProvider'

const useBooksQuery = ()
: UseQueryResult<unknown, unknown> => {
  const { fetch } = useFetch()
  return useQuery('books', () => getBooks(fetch))
}

export { useBooksQuery }
