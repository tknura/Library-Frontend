import { useQuery, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface BookDetails {
  id: number
  name: string
  author: string
  publicationDate: Date
  publisher: string
}

interface Photo {
  id: number
  url: string
}

interface RentalBook {
  id: number
  description: string
  details: BookDetails
  isOccupied: boolean
  photos: Photo[]
  serialNumber: number
}

interface Reservation {
  id: number
  rentalBook: RentalBook
  endTime: Date
  returned: boolean
}

interface ReservationsResponse {
  items: Reservation[]
}

const getReservations = async (instance: AxiosInstance, clientId: number): Promise<unknown> => {
  const { data } = await instance.get('/reservations/get/', { params: { clientId } })
  return data
}

const useReservationsQuery = (clientId: number)
: UseQueryResult<ReservationsResponse, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['reservations', clientId], () => getReservations(fetch, clientId))
}

export { useReservationsQuery }
