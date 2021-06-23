import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface BookDetails {
  id: number
  name: string
  author: string
  publicationDate: string
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
  [key: string]: string | string[] | boolean | number | undefined | RentalBook
  id: number
  rentalBook?: RentalBook
  endTime: string
  returned: boolean
  status: string
}

const getReservations = async (
  instance: AxiosInstance,
  clientId: number
): Promise<Reservation[]> => {
  const { data } = await instance.get('/reservations/get', { params: { clientId } })
  return data
}

const useReservationsQuery = (clientId: number)
: UseQueryResult<Reservation[], unknown> => {
  const { fetch } = useFetch()
  return useQuery(['reservations', clientId], () => getReservations(fetch, clientId))
}

const getAllReservations = async (instance: AxiosInstance): Promise<Reservation[]> => {
  const { data } = await instance.get('/reservations/all')
  return data
}

const useAllReservationsQuery = (options?: UseQueryOptions<Reservation[], unknown>)
: UseQueryResult<Reservation[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('allReservations', () => getAllReservations(fetch), options)
}

const getPendingReservations = async (instance: AxiosInstance): Promise<Reservation[]> => {
  const { data } = await instance.get('/reservations/pending')
  return data
}

const usePendingReservationsQuery = (options?: UseQueryOptions<Reservation[], unknown>)
: UseQueryResult<Reservation[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('pendingReservations', () => getPendingReservations(fetch), options)
}

const postAcceptReservation = async (
  instance: AxiosInstance,
  reservationId: number
): Promise<Reservation[]> => {
  const { data } = await instance.post('/reservations/accept', null, { params: { reservationId } })
  return data
}

const useAcceptReservation = (
  options: UseMutationOptions<Reservation[], Error, number>
)
: UseMutationResult<Reservation[], Error, number> => {
  const { fetch } = useFetch()
  return useMutation('acceptReservation', (id: number) => postAcceptReservation(fetch, id), options)
}

const postRejectReservation = async (
  instance: AxiosInstance,
  reservationId: number
): Promise<Reservation[]> => {
  const { data } = await instance.post('/reservations/reject', null, { params: { reservationId } })
  return data
}

const useRejectReservation = (
  options: UseMutationOptions<Reservation[], Error, number>
)
: UseMutationResult<Reservation[], Error, number> => {
  const { fetch } = useFetch()
  return useMutation('rejectReservation', (id: number) => postRejectReservation(fetch, id), options)
}

const printReservations = async (
  instance: AxiosInstance,
  startDate: string,
  endDate: string
): Promise<string> => {
  const { data } = await instance.get('/reservations/report', { params: { startDate, endDate } })
  return data
}

const usePrintReservationsQuery = (
  startDate: string,
  endDate: string,
  options?: UseQueryOptions<string, unknown>
)
: UseQueryResult<string, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['printReservations', startDate, endDate], () => printReservations(fetch, startDate, endDate), options)
}

export {
  useReservationsQuery,
  useAllReservationsQuery,
  usePendingReservationsQuery,
  useAcceptReservation,
  useRejectReservation,
  usePrintReservationsQuery
}
