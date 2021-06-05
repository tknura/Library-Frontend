import { useState } from 'react'
import constate from 'constate'

import { UserRole } from 'types/UserRole'

interface User {
  accessToken: string
  userRole?: UserRole
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>(null)

  const login = (newAccessToken: string, newUserRole?: UserRole) => {
    setUser({
      accessToken: newAccessToken,
      userRole: newUserRole,
    })
  }

  const logout = () => setUser(null)

  return { login, logout, user }
}

const [
  AuthProvider,
  useLogin,
  useLogout,
  useUserRole,
  useUserLoggedIn,
  useUserAccessToken,
] = constate(
  useAuthorization,
  value => value.login,
  value => value.logout,
  value => value.user?.userRole,
  value => !!value.user?.accessToken,
  value => value.user?.accessToken
)

export {
  AuthProvider,
  useLogin,
  useLogout,
  useUserRole,
  useUserLoggedIn,
  useUserAccessToken,
}
