import { useEffect } from 'react'
import { Modal, ModalProps } from 'components/utillity/Modal/Modal'
import { CLIENT_ROLE } from 'constants/userRoles'
import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { userFormSchema } from 'schemas/userFormSchema'
import { UserRole } from 'types/UserRole'
import * as Styled from './UserFormModal.styles'

interface UserFormFields {
  email: string
  username: string
  firstName: string
  lastName: string
  roles: UserRole
  password: string
  repeatPassword: string
}

interface UserFormModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
  onClose: () => void
  onSubmit: (values: UserFormFields, helpers: FormikHelpers<UserFormFields>) => void
  initialValues?: UserFormFields
}

const defaultValues = {
  email: '',
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  roles: CLIENT_ROLE,
}

const UserFormModal = ({
  onClose: handleClose,
  onSubmit: handleSubmit,
  initialValues = defaultValues,
  ...props
}: UserFormModalProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    setValues,
    setFieldValue,
    values,
    errors,
    touched,
    resetForm
  } = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: userFormSchema,
  })

  useEffect(() => {
    resetForm()
    setValues(initialValues)
  }, [initialValues, resetForm, setValues])

  const handleRoleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFieldValue('roles', event.target.value as UserRole)
  }

  return (
    <Modal onClose={handleClose} {...props}>
      <Modal.Title>
        {t('screen.manageUsers.editUser')}
      </Modal.Title>
      <Styled.ModalContent>
        <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
          <Styled.TextField
            id="email"
            value={values.email}
            error={touched.email && !!errors.email}
            helperText={touched.email && t(errors.email as string)}
            onChange={handleChange}
            required
            label={t('screen.manageUsers.email')}
            variant="outlined"
          />
          <Styled.TextField
            id="username"
            value={values.username}
            error={touched.username && !!errors.username}
            helperText={touched.username && t(errors.username as string)}
            onChange={handleChange}
            required
            label={t('screen.manageUsers.username')}
            variant="outlined"
          />
          <Styled.TextField
            id="firstName"
            value={values.firstName}
            error={touched.firstName && !!errors.firstName}
            helperText={touched.firstName && t(errors.firstName as string)}
            onChange={handleChange}
            label={t('screen.manageUsers.firstName')}
            variant="outlined"
          />
          <Styled.TextField
            id="lastName"
            value={values.lastName}
            error={touched.lastName && !!errors.lastName}
            helperText={touched.lastName && t(errors.lastName as string)}
            onChange={handleChange}
            label={t('screen.manageUsers.lastName')}
            variant="outlined"
          />
          <Styled.TextField
            id="password"
            value={values.password}
            error={touched.password && !!errors.password}
            helperText={touched.password && t(errors.password as string)}
            onChange={handleChange}
            required
            type="password"
            label={t('common.password')}
            variant="outlined"
          />
          <Styled.TextField
            id="repeatPassword"
            value={values.repeatPassword}
            error={touched.repeatPassword && !!errors.repeatPassword}
            helperText={touched.repeatPassword && t(errors.repeatPassword as string)}
            onChange={handleChange}
            required
            type="password"
            label={t('screen.signUp.repeatPassword')}
            variant="outlined"
          />
          <Styled.Select
            id="roles"
            value={values.roles}
            error={touched.roles && !!errors.roles}
            helperText={touched.roles ? t(errors.roles as string) : ''}
            onChange={handleRoleSelectChange}
            required
            variant="outlined"
          />
        </Styled.Form>
      </Styled.ModalContent>
      <Modal.Actions
        onCancel={handleClose}
        onSave={handleFormSubmit}
      />
    </Modal>
  )
}

export { UserFormModal }
export type { UserFormFields }
