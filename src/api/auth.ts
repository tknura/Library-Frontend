import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

type UserRole = 'CLIENT' | 'MANAGER' | 'EMPLOYEE'

interface SignUpValues {
  email: string
  username: string
  firstName: string
  lastName: string
  password: string
  roles?: UserRole[]
}

interface SignInValues {
  email?: string
  username?: string
  password: string
}

interface SignInResponse {
  accessToken: string
}

interface CartMeta {
  cartId: number
  itemsNumber: number
}

interface Role {
  id: number
  roleName: 'CLIENT' | 'MANAGER' | 'EMPLOYEE'
}

interface UserMetaPersmissions {
  id: number
  roles: Role[]
}

interface UserMeta {
  permissions: UserMetaPersmissions
  userId: number
}

type Meta = UserMeta & CartMeta

const getMeta = async (instance: AxiosInstance): Promise<Meta> => {
  const { data: cartData } = await instance.get('/cart/meta')
  const { data: userData } = await instance.get('/users/meta')
  return { ...cartData, ...userData }
}

const postSignUpUser = async (
  instance: AxiosInstance,
  values: SignUpValues
): Promise<unknown> => {
  const { data } = await instance.post('/public/register/client', values)
  return data
}

const postSignUp = async (
  instance: AxiosInstance,
  values: SignUpValues
): Promise<unknown> => {
  const { data } = await instance.post('/public/register/client', values)
  return data
}

const postSignIn = async (
  instance: AxiosInstance,
  values: SignInValues
): Promise<SignInResponse> => {
  const { data } = await instance.post('/public/auth', values)
  return data
}

const useMetaQuery = (options?: UseQueryOptions<Meta, unknown>)
: UseQueryResult<Meta, unknown> => {
  const { fetch } = useFetch()
  return useQuery('meta', () => getMeta(fetch))
}

const useSignUpUserMutation = (options: UseMutationOptions<unknown, Error, SignUpValues>)
: UseMutationResult<unknown, Error, SignUpValues> => {
  const { fetch } = useFetch()
  return useMutation('signUpUser', (values: SignUpValues) => postSignUpUser(fetch, values), options)
}

const useSignInMutation = (options: UseMutationOptions<SignInResponse, Error, SignInValues>)
: UseMutationResult<SignInResponse, Error, SignInValues> => {
  const { fetch } = useFetch()
  return useMutation('signIn', (values: SignInValues) => postSignIn(fetch, values), options)
}

const useSignUpMutation = (options: UseMutationOptions<unknown, Error, SignUpValues>)
: UseMutationResult<unknown, Error, SignUpValues> => {
  const { fetch } = useFetch()
  return useMutation('signUp', (values: SignUpValues) => postSignUp(fetch, values), options)
}

export {
  useSignUpUserMutation,
  useSignInMutation,
  useSignUpMutation,
  useMetaQuery
}
