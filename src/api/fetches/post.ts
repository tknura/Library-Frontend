import Axios from 'axios'

import { SignInValues, SignUpValues } from 'api/types/auth'

// TO DO Add response types when the backend is ready
const postSignUp = async (
  values: SignUpValues
): Promise<unknown> => {
  const { data } = await Axios.post('/auth/signUp', values)
  return data
}

// TO DO Add response types when the backend is ready
const postSignIn = async (
  values: SignInValues
): Promise<unknown> => {
  const { data } = await Axios.post('/auth/signIn', values)
  return data
}

export { postSignIn, postSignUp }
