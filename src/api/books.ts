import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface Book {
  [key: string]: string | string[] | boolean | number | undefined
  author: string
  bookId: number
  description: string
  isOccupied: boolean
  name: string
  numberOfBooks: number
  numberOfOccupiedBooks: number
  publicationDate: string
  publisher: string
  serialNumber: number
  urls: string[]
}

interface AllBooksResponse {
  content: Book[]
}

const getBooks = async (instance: AxiosInstance): Promise<AllBooksResponse> => {
  const { data } = await instance.get('/public/books/full', { params: { unpaged: true } })
  return data
}

const getBook = async (instance: AxiosInstance, id: number): Promise<Book> => {
  const { data } = await instance.get(`/public/books/full/${id}`)
  return data
}

const useBooksQuery = (options?: UseQueryOptions<AllBooksResponse, unknown>)
: UseQueryResult<AllBooksResponse, unknown> => {
  const { fetch } = useFetch()
  return useQuery('books', () => getBooks(fetch), options)
}

const useBookQuery = (id: number)
: UseQueryResult<Book, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['books', id], () => getBook(fetch, id))
}

export { useBooksQuery, useBookQuery }
export type { Book }
