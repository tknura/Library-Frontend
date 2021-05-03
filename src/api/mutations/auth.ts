import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'

import { postSignIn, postSignUp } from 'api/fetches/post'
import { SignInValues, SignUpValues } from 'api/types/auth'

const useSignInMutation = (options: UseMutationOptions<unknown, Error, SignInValues>)
: UseMutationResult<unknown, Error, SignInValues> => (
  useMutation('signIn', (values: SignInValues) => postSignIn(values), options)
)

const useSignUpMutation = (options: UseMutationOptions<unknown, Error, SignUpValues>)
: UseMutationResult<unknown, Error, SignUpValues> => (
  useMutation('signUp', (values: SignUpValues) => postSignUp(values), options)
)

export { useSignInMutation, useSignUpMutation }
