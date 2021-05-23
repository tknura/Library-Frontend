import { useUserRole } from 'components/providers/AuthProvider'
import { UserRole } from 'types/UserRole'

const useHasRole = (accessRoles: UserRole[]): boolean => {
  const userRole = useUserRole()
  if (!userRole) {
    return false
  }

  return accessRoles.includes(userRole)
}

export { useHasRole }
