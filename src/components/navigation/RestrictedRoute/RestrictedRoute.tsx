import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

import { useUserLoggedIn } from 'components/providers/AuthProvider'
import { useHasRole } from 'hooks/useHasRole'
import { UserRole } from 'types/UserRole'

interface RestrictedRouteProps {
  accessRoles: UserRole[]
  exact?: boolean
  path: string
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ accessRoles, children, ...rest }) => {
  const location = useLocation()
  const isAllowed = useHasRole(accessRoles)
  const isLoggedIn = useUserLoggedIn()
  const redirectPath = {
    pathname: '/auth',
    state: {
      redirectPath: location.pathname,
    },
  }

  return (
    <Route {...rest}>
      {isLoggedIn && isAllowed
        ? children
        : <Redirect to={redirectPath} />}
    </Route>
  )
}

export { RestrictedRoute }
