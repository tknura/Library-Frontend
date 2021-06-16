import { useState } from 'react'
import constate from 'constate'

import { UserRole } from 'types/UserRole'

interface User {
  accessToken?: string
  userRole?: UserRole
  cartId?: number
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>(null)

  const setToken = (newAccessToken: string) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      accessToken: newAccessToken,
    }))
  }
  const setRole = (newUserRole: UserRole) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      userRole: newUserRole,
    }))
  }
  const setCartId = (newCartId: number) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      cartId: newCartId,
    }))
  }

  const logout = () => setUser(null)

  return { setToken, setRole, setCartId, logout, user }
}

const [
  AuthProvider,
  useSetToken,
  useSetCartId,
  useSetRole,
  useLogout,
  useUserRole,
  useUserCartId,
  useUserLoggedIn,
  useUserAccessToken,
] = constate(
  useAuthorization,
  value => value.setToken,
  value => value.setCartId,
  value => value.setRole,
  value => value.logout,
  value => value.user?.userRole,
  value => value.user?.cartId,
  value => !!value.user?.accessToken,
  value => value.user?.accessToken
)

export {
  AuthProvider,
  useSetToken,
  useSetCartId,
  useSetRole,
  useLogout,
  useUserRole,
  useUserCartId,
  useUserLoggedIn,
  useUserAccessToken,
}
