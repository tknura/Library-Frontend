import { AxiosInstance } from 'axios'

// TO DO Add response types when the backend is ready
export const getBooks = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.get('/books')
  return data
}

export const getBook = async (instance: AxiosInstance, id: number): Promise<unknown> => {
  const { data } = await instance.get(`/books/${id}`)
  return data
}
