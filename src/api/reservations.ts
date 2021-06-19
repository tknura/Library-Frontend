import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryResult } from 'react-query'
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

const getPendingReservations = async (instance: AxiosInstance): Promise<unknown> => {
  const { data } = await instance.get('/reservations/pending')
  return data
}

const usePendingReservationsQuery = ()
: UseQueryResult<ReservationsResponse, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['reservations'], () => getPendingReservations(fetch))
}

const postAcceptReservation = async (
  instance: AxiosInstance,
  id: number
): Promise<ReservationsResponse> => {
  const { data } = await instance.post('/reservations/accept', id)
  return data
}

const useAcceptReservation = (options: UseMutationOptions<ReservationsResponse, Error, number>)
: UseMutationResult<ReservationsResponse, Error, number> => {
  const { fetch } = useFetch()
  return useMutation('reservations', (id: number) => postAcceptReservation(fetch, id), options)
}

const postRejectReservation = async (
  instance: AxiosInstance,
  id: number
): Promise<ReservationsResponse> => {
  const { data } = await instance.post('/reservations/reject', id)
  return data
}

const useRejectReservation = (options: UseMutationOptions<ReservationsResponse, Error, number>)
: UseMutationResult<ReservationsResponse, Error, number> => {
  const { fetch } = useFetch()
  return useMutation('reservations', (id: number) => postRejectReservation(fetch, id), options)
}

export {
  useReservationsQuery,
  usePendingReservationsQuery,
  useAcceptReservation,
  useRejectReservation
}
