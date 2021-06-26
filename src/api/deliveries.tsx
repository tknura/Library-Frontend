import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface DeliveryArticle {
  articleDetailId: number
  author: string,
  deliveryArticleId: number
  name: string
  publicationDate: Date
  publisher: number
  quantity: number
}

interface Delivery {
  deliveryArticles: DeliveryArticle[]
  deliveryRequestDate: Date
  expectedDeliveryDate: Date
  id: number
}

interface DeliveryBasic {
  deliveryRequestDate: Date
  expectedDeliveryDate: Date
  id: number
  quantity: number
}

interface DeliveryArticleBasic {
  amount: number
  articleDetailId: number
}

interface NewDeliveryValues {
  deliveryArticles: DeliveryArticleBasic[]
  expectedDeliveryDate: Date
}

const postDelivery = async (
  instance: AxiosInstance,
  values: NewDeliveryValues
): Promise<unknown> => {
  const { data } = await instance.post('/delivery', values)
  return data
}

const getDeliveries = async (instance: AxiosInstance): Promise<DeliveryBasic[]> => {
  const { data } = await instance.get('/delivery')
  return data
}

const getDelivery = async (instance: AxiosInstance, id: number): Promise<Delivery> => {
  const { data } = await instance.get(`/delivery/${id}`)
  return data
}

const useDeliveryMutation = (options: UseMutationOptions<unknown, Error, NewDeliveryValues>)
  : UseMutationResult<unknown, Error, NewDeliveryValues> => {
  const { fetch } = useFetch()
  return useMutation('addDelivery', (values: NewDeliveryValues) => postDelivery(fetch, values), options)
}

const useDeliveriesQuery = (options?: UseQueryOptions<DeliveryBasic[], unknown>)
  : UseQueryResult<DeliveryBasic[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('deliveries', () => getDeliveries(fetch), options)
}

const useDeliveryQuery = (id: number)
  : UseQueryResult<Delivery, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['delivery', id], () => getDelivery(fetch, id))
}

export { useDeliveryMutation, useDeliveriesQuery, useDeliveryQuery }
export type { DeliveryArticleBasic }
