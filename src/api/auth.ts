import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

interface SignUpValues {
  email: string
  username: string
  firstName: string
  lastName: string
  phoneNumber: string
  password: string
}

interface SignInValues {
  email: string
  password: string
}

interface SignInResponse {
  accessToken: string
}

const postSignUp = async (
  instance: AxiosInstance,
  values: SignUpValues
): Promise<unknown> => {
  const { data } = await instance.post('/auth/signUp', values)
  return data
}

const postSignIn = async (
  instance: AxiosInstance,
  values: SignInValues
): Promise<SignInResponse> => {
  const { data } = await instance.post('/auth/signIn', values)
  return data
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

export { useSignInMutation, useSignUpMutation }
