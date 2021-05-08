import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'

import { postSignIn, postSignUp } from 'api/fetches/post'
import { SignInValues, SignUpValues } from 'api/types/auth'
import { useFetch } from 'components/providers/FetchProvider'

const useSignInMutation = (options: UseMutationOptions<unknown, Error, SignInValues>)
: UseMutationResult<unknown, Error, SignInValues> => {
  const { fetch } = useFetch()
  return useMutation('signIn', (values: SignInValues) => postSignIn(fetch, values), options)
}

const useSignUpMutation = (options: UseMutationOptions<unknown, Error, SignUpValues>)
: UseMutationResult<unknown, Error, SignUpValues> => {
  const { fetch } = useFetch()
  return useMutation('signUp', (values: SignUpValues) => postSignUp(fetch, values), options)
}

export { useSignInMutation, useSignUpMutation }
