import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface CartItemRequest {
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

interface CartItemData {
  cartId: number,
  cartItem: CartItemRequest
}

const getCartItems = async (
  instance: AxiosInstance,
  cartId: number
): Promise<CartItemResponse[]> => {
  const { data } = await instance.get('/cart/get', { params: { cartId } })
  return data
}

const useGetCartItemsQuery = (
  cartId: number,
  options?: UseQueryOptions<CartItemResponse[], unknown>
)
: UseQueryResult<CartItemResponse[], unknown> => {
  const { fetch } = useFetch()
  return useQuery(['cart', cartId], () => getCartItems(fetch, cartId), options)
}

const postAddCartItem = async (
  instance: AxiosInstance,
  cartId: number,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.post('/cart/add', values, { params: { cartId } })
  return data
}

const useAddCartItemMutation = (
  options: UseMutationOptions<unknown, Error, CartItemData>
)
: UseMutationResult<unknown, Error, CartItemData> => {
  const { fetch } = useFetch()
  return useMutation(
    'addItemToCart',
    (values: CartItemData) => postAddCartItem(fetch, values.cartId, values.cartItem), options
  )
}

const deleteCartItem = async (
  instance: AxiosInstance,
  cartId: number,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.delete('/cart/delete', { params: { cartId }, data: values })
  return data
}

const useDeleteCartItemMutation = (
  options: UseMutationOptions<unknown, Error, CartItemData>
)
: UseMutationResult<unknown, Error, CartItemData> => {
  const { fetch } = useFetch()
  return useMutation(
    'deleteItemFromCart',
    (values: CartItemData) => deleteCartItem(fetch, values.cartId, values.cartItem), options
  )
}

const editCartItem = async (
  instance: AxiosInstance,
  cartId: number,
  values: CartItemRequest
): Promise<unknown> => {
  const { data } = await instance.patch('/cart/update', values, { params: { cartId } })
  return data
}

const useEditCartItemMutation = (
  options: UseMutationOptions<unknown, Error, CartItemData>
)
: UseMutationResult<unknown, Error, CartItemData> => {
  const { fetch } = useFetch()
  return useMutation(
    'editItemInCart',
    (values: CartItemData) => editCartItem(fetch, values.cartId, values.cartItem), options
  )
}

const putSubmitCart = async (instance: AxiosInstance, cartId: number): Promise<unknown> => {
  const { data } = await instance.put('/cart/submit', null, { params: { cartId } })
  return data
}

const useSubmitCartMutation = (
  options: UseMutationOptions<unknown, string, number>
)
: UseMutationResult<unknown, string, number> => {
  const { fetch } = useFetch()
  return useMutation('submitCart', (cartId: number) => putSubmitCart(fetch, cartId), options)
}

export {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useEditCartItemMutation,
  useSubmitCartMutation
}
