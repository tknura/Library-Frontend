import { useState } from 'react'
import Axios from 'axios'
import constate from 'constate'

interface User {
  accessToken: string
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | undefined>(undefined)

  const login = (newAccessToken: string) => {
    Axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
    setUser({
      accessToken: newAccessToken,
    })
  }

  const logout = () => setUser(undefined)

  return { login, logout, user }
}

const [
  AuthProvider,
  useLogin,
  useLogout,
  useUserLoggedIn,
] = constate(
  useAuthorization,
  value => value.login,
  value => value.logout,
  value => !!value.user?.accessToken
)

export {
  AuthProvider,
  useLogin,
  useLogout,
  useUserLoggedIn,
}
