import { AxiosInstance } from 'axios'
import { useFetch } from 'components/providers/FetchProvider'
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'

interface Book {
  id: number
  title: string
  author: string
  available: boolean
  description: string
  photos: string[]
  publicationDate: string
  publisher: string
}

const addBook = async (
  instance: AxiosInstance,
  values: Book
): Promise<unknown> => {
  const { data } = await instance.post('/secured/books/add', values)
  return data
}

const updateBook = async (
  instance: AxiosInstance,
  values: Book
): Promise<unknown> => {
  const { data } = await instance.post('/secured/books/update', values)
  return data
}

const deleteBook = async (
  instance: AxiosInstance,
  serialNumber: number
): Promise<unknown> => {
  const { data } = await instance.post('/secured/books/remove', null, { params: { serialNumber } })
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
