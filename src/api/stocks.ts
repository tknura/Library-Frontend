import { AxiosInstance } from 'axios'
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { Error } from './common'

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

const freeBook = async (
  instance: AxiosInstance,
  serialNumber: number
): Promise<unknown> => {
  const { data } = await instance.patch('/secured/books/free', null, { params: { serialNumber } })
  return data
}

const occupyBook = async (
  instance: AxiosInstance,
  serialNumber: number
): Promise<unknown> => {
  const { data } = await instance.patch('/secured/books/occupy', null, { params: { serialNumber } })
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

const useFreeBookMutation = (options: UseMutationOptions<unknown, Error, number>)
: UseMutationResult<unknown, Error, number> => {
  const { fetch } = useFetch()
  return useMutation(
    'freeBook',
    (serialNumber: number) => freeBook(fetch, serialNumber), options
  )
}

const useOccupyBookMutation = (options: UseMutationOptions<unknown, Error, number>)
: UseMutationResult<unknown, Error, number> => {
  const { fetch } = useFetch()
  return useMutation(
    'occupyBook',
    (serialNumber: number) => occupyBook(fetch, serialNumber), options
  )
}

export {
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useFreeBookMutation,
  useOccupyBookMutation,
}

export type { Book }
