import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
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

const getCartItems = async (
  instance: AxiosInstance,
  cartId: number
): Promise<CartItemResponse[]> => {
  const { data } = await instance.get('/public/cart', { params: cartId })
  return data
}

const useGetCartItemsQuery = (
  cartId: number,
  options?: UseQueryOptions<CartItemResponse[], unknown>
)
: UseQueryResult<CartItemResponse[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('cart', () => getCartItems(fetch, cartId), options)
}

const postAddCartItem = async (
  instance: AxiosInstance,
  cartId: number,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.post('/public/cart', values, { params: cartId })
  return data
}

const useAddCartItemMutation = (
  cartId: number,
  options: UseMutationOptions<unknown, Error, CartItemRequest>
)
: UseMutationResult<unknown, Error, CartItemRequest> => {
  const { fetch } = useFetch()
  return useMutation('cart', (values: CartItemRequest) => postAddCartItem(fetch, cartId, values), options)
}

const deleteCartItem = async (
  instance: AxiosInstance,
  cartId: number,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.delete('/public/cart', { params: cartId, data: values })
  return data
}

const useDeleteCartItemMutation = (
  cartId: number,
  options: UseMutationOptions<unknown, Error, CartItemRequest>
)
: UseMutationResult<unknown, Error, CartItemRequest> => {
  const { fetch } = useFetch()
  return useMutation('cart', (values: CartItemRequest) => deleteCartItem(fetch, cartId, values), options)
}

const editCartItem = async (
  instance: AxiosInstance,
  cartId: number,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.patch('/public/cart', { params: cartId, data: values })
  return data
}

const useEditCartItemMutation = (
  cartId: number,
  options: UseMutationOptions<unknown, Error, CartItemRequest>
)
: UseMutationResult<unknown, Error, CartItemRequest> => {
  const { fetch } = useFetch()
  return useMutation('cart', (values: CartItemRequest) => editCartItem(fetch, cartId, values), options)
}

const putSubmitCart = async (instance: AxiosInstance, cartId: number): Promise<unknown> => {
  const { data } = await instance.put('/public/cart', { params: cartId })
  return data
}

const useSubmitCartMutation = (
  cartId: number,
  options: UseMutationOptions<unknown, string, unknown>
)
: UseMutationResult<unknown, string, unknown> => {
  const { fetch } = useFetch()
  return useMutation('cart', () => putSubmitCart(fetch, cartId), options)
}

export {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useEditCartItemMutation,
  useSubmitCartMutation
}
