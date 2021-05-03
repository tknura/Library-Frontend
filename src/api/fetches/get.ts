import Axios from 'axios'


const DEV_API_URL = 'https://bookstore-api-scholar.herokuapp.com/api'

export const getBooks = async () => {
  const { data } = await Axios.get(DEV_API_URL)
  return data
}
