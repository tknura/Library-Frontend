import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'
import { useUserCartId } from 'components/providers/AuthProvider'

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

const cartId = useUserCartId

const getCartItems = async (instance: AxiosInstance): Promise<CartItemResponse[]> => {
  const { data } = await instance.get('/public/cart', { params: cartId })
  return data
}

const useGetCartItemsQuery = (options?: UseQueryOptions<CartItemResponse[], unknown>)
: UseQueryResult<CartItemResponse[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('cart', () => getCartItems(fetch), options)
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
  const { data } = await instance.put('/public/cart', { params: cartId })
  return data
}

const useSubmitCartMutation = (options: UseMutationOptions<unknown, string, unknown>)
: UseMutationResult<unknown, string, unknown> => {
  const { fetch } = useFetch()
  return useMutation('cart', () => putSubmitCart(fetch), options)
}

export {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useEditCartItemMutation,
  useSubmitCartMutation
}
