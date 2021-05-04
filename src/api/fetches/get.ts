import Axios from 'axios'

const DEV_API_URL = 'https://bookstore-api-scholar.herokuapp.com/api'

// TO DO Add response types when the backend is ready
export const getBooks = async (): Promise<unknown> => {
  const { data } = await Axios.get(DEV_API_URL)
  return data
}
