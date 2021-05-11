import { AxiosInstance } from 'axios'

import { SignInValues, SignUpValues } from 'api/types/auth'

// TO DO Add response types when the backend is ready
const postSignUp = async (
  instance: AxiosInstance,
  values: SignUpValues
): Promise<unknown> => {
  const { data } = await instance.post('/auth/signUp', values)
  return data
}

// TO DO Add response types when the backend is ready
const postSignIn = async (
  instance: AxiosInstance,
  values: SignInValues
): Promise<unknown> => {
  const { data } = await instance.post('/auth/signIn', values)
  return data
}

export { postSignIn, postSignUp }
