import { useQuery, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface Book {
  author: string,
  bookId: number,
  description: string,
  isOccupied: boolean,
  name: string,
  numberOfBooks: number,
  numberOfOccupiedBooks: number,
  publicationDate: string,
  publisher: string,
  serialNumber: number,
  urls: string []
}

interface AllBooksResponse {
  content: Book[]
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
: UseQueryResult<AllBooksResponse, unknown> => {
  const { fetch } = useFetch()
  return useQuery('books', () => getBooks(fetch))
}

const useBookQuery = (id: number)
: UseQueryResult<Book, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['books', id], () => getBook(fetch, id))
}

export { useBooksQuery, useBookQuery }
