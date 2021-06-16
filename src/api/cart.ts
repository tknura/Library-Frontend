import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface CartItemRequest {
  id?: number,
  itemId: number,
  requestedEndDate: string
}
interface CartItemResponse {
  itemId: number,
  title: string,
  author: string,
  photoUrl: string,
  endDate: string
}

const getCartItems = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.get('/public/cart')
  return data
}

const useGetCartItemsQuery = ()
: UseQueryResult<CartItemResponse[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('cart', () => getCartItems(fetch))
}

const postAddCartItem = async (
  instance: AxiosInstance,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.post('/public/cart', values)
  return data
}

const useAddCartItemMutation = (options: UseMutationOptions<unknown, Error, CartItemRequest>)
: UseMutationResult<unknown, Error, CartItemRequest> => {
  const { fetch } = useFetch()
  return useMutation('cart', (values: CartItemRequest) => postAddCartItem(fetch, values), options)
}

const deleteCartItem = async (
  instance: AxiosInstance,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.delete('/public/cart', { params: cartId, data: values })
  return data
}

const useDeleteCartItemMutation = (options: UseMutationOptions<unknown, Error, CartItemRequest>)
: UseMutationResult<unknown, Error, CartItemRequest> => {
  const { fetch } = useFetch()
  return useMutation('cart', (values: CartItemRequest) => deleteCartItem(fetch, values), options)
}

const editCartItem = async (
  instance: AxiosInstance,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.patch('/public/cart', { params: cartId, data: values })
  return data
}

const useEditCartItemMutation = (options: UseMutationOptions<unknown, Error, CartItemRequest>)
: UseMutationResult<unknown, Error, CartItemRequest> => {
  const { fetch } = useFetch()
  return useMutation('cart', (values: CartItemRequest) => editCartItem(fetch, values), options)
}

const putSubmitCart = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.put('/public/cart', cartId)
  return data
}

const usePutSubmitCartQuery = ()
: UseQueryResult<CartItemResponse[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('cart', () => putSubmitCart(fetch))
}

export {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useEditCartItemMutation,
  usePutSubmitCartQuery
}
