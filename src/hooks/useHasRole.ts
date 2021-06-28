import { useUserRoles } from 'components/providers/AuthProvider'
import { UserRole } from 'types/UserRole'

const useHasRoles = (accessRoles: UserRole[]): boolean => {
  const userRoles = useUserRoles()
  if (!userRoles) {
    return false
  }

  return userRoles.some(role => accessRoles?.includes(role))
}

export { useHasRoles }
