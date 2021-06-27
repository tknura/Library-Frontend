import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { RoleSelect } from 'components/inputs/RoleSelect'
import { Modal, ModalProps } from 'components/utillity/Modal/Modal'
import { CLIENT_ROLE } from 'constants/userRoles'
import { UserRole } from 'types/UserRole'
import * as Styled from './UserRoleFormModal.styles'

interface UserRoleFormFields {
  userId: number
  role: UserRole
}

interface UserRoleFormModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
  onClose: () => void
  onSubmit: (userId: number, role: UserRole, previousRole: UserRole) => void
  initialValues?: UserRoleFormFields
}

const defaultValues = {
  userId: -1,
  role: CLIENT_ROLE,
}

const UserRoleFormModal = ({
  onClose: handleClose,
  onSubmit: handleSubmit,
  initialValues = defaultValues,
  ...props
}: UserRoleFormModalProps): JSX.Element => {
  const { t } = useTranslation()
  const [role, setRole] = useState<UserRole>(initialValues.role)

  useEffect(() => {
    setRole(initialValues.role)
  }, [initialValues.role])

  const handleRoleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as UserRole)
  }

  const handleRoleSubmit = () => {
    handleSubmit(initialValues.userId, role, initialValues.role)
  }

  return (
    <Modal onClose={handleClose} {...props}>
      <Modal.Title>
        {t('screen.manageUsers.editUser')}
      </Modal.Title>
      <Modal.Content>
        <Styled.RootContainer>
          <RoleSelect
            value={role}
            onChange={handleRoleSelectChange}
            variant="outlined"
          />
        </Styled.RootContainer>
      </Modal.Content>
      <Modal.Actions
        onCancel={handleClose}
        onSave={handleRoleSubmit}
      />
    </Modal>
  )
}

export { UserRoleFormModal }
export type { UserRoleFormFields }
