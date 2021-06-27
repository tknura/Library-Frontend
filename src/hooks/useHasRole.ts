import { useUserRoles } from 'components/providers/AuthProvider'
import { UserRole } from 'types/UserRole'

const useHasRoles = (accessRoles: UserRole[]): boolean => {
  const userRole = useUserRoles()
  if (!userRole) {
    return false
  }

  return accessRoles.some(role => accessRoles?.includes(role))
}

export { useHasRoles }
