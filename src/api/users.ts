import { AxiosInstance } from 'axios'
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { Response } from './common'

interface AccountCredentialsDTO {
  id: number
  emailAddress: string
  password: string
  username: string
}

interface Authority {
  id: number
  name: string
}

type UserRole = 'CLIENT' | 'MANAGER' | 'EMPLOYEE'

interface Role {
  id: number
  roleName: UserRole
}

interface AccountPermissionsDTO {
  id: number
  authorities: Authority[]
  roles: Role[]
}

interface User {
  [key: string]: string | AccountCredentialsDTO | AccountPermissionsDTO | number | undefined
  id: number
  accountCredentialsDTO: AccountCredentialsDTO
  accountPermissionsDTO: AccountPermissionsDTO
  firstName?: string
  lastName?: string
  photoUrl?: string
}

interface UsersResponse {
  users: User[]
}

interface UserMeta {
  permissions: AccountPermissionsDTO
  userId: number
}

interface UserUpdateValues {
  authorities?: string[]
  email?: string
  firstName?: string
  lastName?: string
  password?: string
  photoUrl?: string
  roles?: UserRole[]
  username?: string
}

interface RoleValues {
  roleName: UserRole
  userId: number
}

const getUsers = async (instance: AxiosInstance): Promise<UsersResponse> => {
  const { data } = await instance.get('/users/all')
  return data
}

const getUserMeta = async (instance: AxiosInstance): Promise<UserMeta> => {
  const { data } = await instance.get('/users/meta')
  return data
}

const updateUser = async (
  instance: AxiosInstance,
  values: UserUpdateValues
): Promise<Response> => {
  const { data } = await instance.put('/users/update', values)
  return data
}

const addUserRole = async (
  instance: AxiosInstance,
  values: RoleValues
): Promise<Response> => {
  const { data } = await instance.patch('/users/role/add', values)
  return data
}

const deleteUserRole = async (
  instance: AxiosInstance,
  values: RoleValues
): Promise<Response> => {
  const { data } = await instance.delete('/users/role/delete', { data: values })
  return data
}

const useUsersQuery = (options?: UseQueryOptions<UsersResponse, unknown>)
: UseQueryResult<UsersResponse, unknown> => {
  const { fetch } = useFetch()
  return useQuery('users', () => getUsers(fetch), options)
}

const useUsersMetaQuery = (options?: UseQueryOptions<UserMeta, unknown>)
: UseQueryResult<UserMeta, unknown> => {
  const { fetch } = useFetch()
  return useQuery('usersMeta', () => getUserMeta(fetch), options)
}

const useUpdateUserMutation = (options: UseMutationOptions<Response, Error, UserUpdateValues>)
: UseMutationResult<Response, Error, UserUpdateValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'userUpdate',
    (values: UserUpdateValues) => updateUser(fetch, values),
    options
  )
}

const useAddUserRoleMutation = (options: UseMutationOptions<Response, Error, RoleValues>)
: UseMutationResult<Response, Error, RoleValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'userAddRole',
    (values: RoleValues) => addUserRole(fetch, values),
    options
  )
}

const useDeleteUserRoleMutation = (options: UseMutationOptions<Response, Error, RoleValues>)
: UseMutationResult<Response, Error, RoleValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'userDeleteRole',
    (values: RoleValues) => deleteUserRole(fetch, values),
    options
  )
}

export {
  useUsersQuery,
  useUsersMetaQuery,
  useUpdateUserMutation,
  useAddUserRoleMutation,
  useDeleteUserRoleMutation
}
export type { User }
