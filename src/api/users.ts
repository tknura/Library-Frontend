import { AxiosInstance } from 'axios'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'

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

interface Role {
  id: number
  roleName: 'CLIENT' | 'MANAGER' | 'EMPLOYEE'
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

const getUsers = async (instance: AxiosInstance): Promise<UsersResponse> => {
  const { data } = await instance.get('/users/all')
  return data
}

const useUsersQuery = (options?: UseQueryOptions<UsersResponse, unknown>)
: UseQueryResult<UsersResponse, unknown> => {
  const { fetch } = useFetch()
  return useQuery('users', () => getUsers(fetch), options)
}

export { useUsersQuery }
export type { User }
