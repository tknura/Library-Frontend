import React, { ReactElement } from 'react'

import { useHasRole } from 'hooks/useHasRole'
import { UserRole } from 'types/UserRole'

interface RestrictedContentProps {
  accessRoles: UserRole[]
  fallback?: ReactElement
}

const RestrictedContent: React.FC<RestrictedContentProps> = ({
  accessRoles,
  fallback,
  children
}) => {
  const isAllowed = useHasRole(accessRoles)

  return isAllowed ? <>{children}</> : fallback || null
}

export { RestrictedContent }
