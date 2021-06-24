import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
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

const getDeliveries = async (instance: AxiosInstance): Promise<DeliveryBasic[]> => {
  const { data } = await instance.get('/delivery')
  return data
}

const getDelivery = async (instance: AxiosInstance, id: number): Promise<Delivery> => {
  const { data } = await instance.get(`/delivery/${id}`)
  return data
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

export { useDeliveriesQuery, useDeliveryQuery }
