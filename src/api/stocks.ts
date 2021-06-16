import { AxiosInstance } from 'axios'
import { useFetch } from 'components/providers/FetchProvider'
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'

interface Book {
  // eslint-disable-next-line camelcase
  serial_number: number
  title: string
  author: string
  available: boolean
  description: string
  publicationDate: string
  publisher: string
}

const addBook = async (
  instance: AxiosInstance,
  values: Book
): Promise<unknown> => {
  const { data } = await instance.put('/secured/books/add', values)
  return data
}

const updateBook = async (
  instance: AxiosInstance,
  values: Book
): Promise<unknown> => {
  const { data } = await instance.patch('/secured/books/update', values)
  return data
}

const deleteBook = async (
  instance: AxiosInstance,
  serialNumber: number
): Promise<unknown> => {
  const { data } = await instance.delete('/secured/books/remove', { params: { serialNumber } })
  return data
}

const useAddBookMutation = (options: UseMutationOptions<unknown, Error, Book>)
: UseMutationResult<unknown, Error, Book> => {
  const { fetch } = useFetch()
  return useMutation(
    'addBook',
    (values: Book) => addBook(fetch, values), options
  )
}

const useUpdateBookMutation = (options: UseMutationOptions<unknown, Error, Book>)
: UseMutationResult<unknown, Error, Book> => {
  const { fetch } = useFetch()
  return useMutation(
    'updateBook',
    (values: Book) => updateBook(fetch, values), options
  )
}

const useDeleteBookMutation = (options: UseMutationOptions<unknown, Error, number>)
: UseMutationResult<unknown, Error, number> => {
  const { fetch } = useFetch()
  return useMutation(
    'deleteBook',
    (serialNumber: number) => deleteBook(fetch, serialNumber), options
  )
}

export {
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
}

export type { Book }
