import Axios from 'axios'

import { SignInValues, SignUpValues } from 'api/types/auth'

const postSignUp = async (
  values: SignUpValues
) => {
  const { data } = await Axios.post(`/auth/signUp`, values)
  return data
}

const postSignIn = async (
  values: SignInValues
) => {
  const { data } = await Axios.post(`/auth/signIn`, values)
  return data
}

export { postSignIn, postSignUp }
