import { useMemo } from 'react'
import Axios from 'axios'
import constate from 'constate'

const [FetchProvider, useFetch] = constate(() => {
  const fetch = useMemo(() => {
    const instance = Axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
    return instance
  }, [])

  return { fetch }
})

export { FetchProvider, useFetch }
