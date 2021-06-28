import { useState } from 'react'
import constate from 'constate'

import { UserRole } from 'types/UserRole'

interface User {
  accessToken?: string
  userRoles?: UserRole[]
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
  const setRoles = (newUserRoles: UserRole[]) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      userRoles: newUserRoles,
    }))
  }
  const setCartId = (newCartId: number) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      cartId: newCartId,
    }))
  }

  const logout = () => setUser(null)

  return { setToken, setRoles, setCartId, logout, user }
}

const [
  AuthProvider,
  useSetToken,
  useSetCartId,
  useSetRoles,
  useLogout,
  useUserRoles,
  useUserCartId,
  useUserLoggedIn,
  useUserAccessToken,
] = constate(
  useAuthorization,
  value => value.setToken,
  value => value.setCartId,
  value => value.setRoles,
  value => value.logout,
  value => value.user?.userRoles,
  value => value.user?.cartId,
  value => !!value.user?.accessToken,
  value => value.user?.accessToken
)

export {
  AuthProvider,
  useSetToken,
  useSetCartId,
  useSetRoles,
  useLogout,
  useUserRoles,
  useUserCartId,
  useUserLoggedIn,
  useUserAccessToken,
}
