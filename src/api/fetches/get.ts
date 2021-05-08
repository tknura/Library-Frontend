import { AxiosInstance } from 'axios'

const DEV_API_URL = 'https://bookstore-api-scholar.herokuapp.com/api'

// TO DO Add response types when the backend is ready
export const getBooks = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.get(DEV_API_URL)
  return data
}
