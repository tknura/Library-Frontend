import { useQuery, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface CartItem {
  itemId: number,
  title: string,
  author: string,
  photoUrl: string,
  endDate: Date
}

const getCartItems = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.get('/public/cart')
  return data
}

const getCartItem = async (instance: AxiosInstance, id: number): Promise<unknown> => {
  const { data } = await instance.get(`/public/cart/${id}`)
  return data
}

const useCartItemsQuery = ()
: UseQueryResult<CartItem[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('cart', () => getCartItems(fetch))
}

const useCartItemQuery = (id: number)
: UseQueryResult<CartItem, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['cart', id], () => getCartItem(fetch, id))
}

export { useCartItemsQuery, useCartItemQuery }
