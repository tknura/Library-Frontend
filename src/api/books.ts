import { useQuery, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface Book {
  id: number,
  photos: string []
  author: string,
  title: string,
  available: boolean,
  publisher: string,
  publicationDate: Date,
  description: string
}

// TO DO Add response types when the backend is ready
const getBooks = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.get('/books')
  return data
}

const getBook = async (instance: AxiosInstance, id: number): Promise<unknown> => {
  const { data } = await instance.get(`/books/${id}`)
  return data
}

const useBooksQuery = ()
: UseQueryResult<Book[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('books', () => getBooks(fetch))
}

const useBookQuery = (id: number)
: UseQueryResult<Book, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['books', id], () => getBook(fetch, id))
}

export { useBooksQuery, useBookQuery }
