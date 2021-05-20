import { useMemo } from 'react'
import Axios from 'axios'
import constate from 'constate'

const useFetchHelper = () => {
  const fetch = useMemo(() => {
    const instance = Axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
    return instance
  }, [])

  return { fetch }
}

const [FetchProvider, useFetch] = constate(
  useFetchHelper,
  value => ({ fetch: value.fetch }),
)

export { FetchProvider, useFetch }
