import { useState } from 'react'
import Axios from 'axios'
import constate from 'constate'

import { UserRole } from 'types/UserRole'

interface User {
  accessToken: string
  userRole?: UserRole
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | undefined>(undefined)

  const login = (newAccessToken: string, newUserRole?: UserRole) => {
    Axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
    setUser({
      accessToken: newAccessToken,
      userRole: newUserRole,
    })
  }

  const logout = () => setUser(undefined)

  return { login, logout, user }
}

const [
  AuthProvider,
  useLogin,
  useLogout,
  useUserRole,
  useUserLoggedIn,
] = constate(
  useAuthorization,
  value => value.login,
  value => value.logout,
  value => value.user?.userRole,
  value => !!value.user?.accessToken,
)

export {
  AuthProvider,
  useLogin,
  useLogout,
  useUserRole,
  useUserLoggedIn,
}
