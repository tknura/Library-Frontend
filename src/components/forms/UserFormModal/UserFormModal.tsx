import { Modal, ModalProps } from 'components/utillity/Modal/Modal'
import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { bookFormSchema } from 'schemas/bookFormSchema'
import * as Styled from './UserFormModal.styles'

interface UserFormFields {
  email: string
  username: string
  firstName: string
  lastName: string
  roles: string[]
}

interface UserFormModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
  onClose: () => void
  onSubmit: (values: UserFormFields, helpers: FormikHelpers<UserFormFields>) => void
  initialValues?: UserFormFields
}

const UserFormModal = ({
  onClose: handleClose,
  onSubmit: handleSubmit,
  initialValues = {
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    roles: [''],
  },
  ...props
}: UserFormModalProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: bookFormSchema,
  })

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
            required
            label={t('screen.manageUsers.firstName')}
            variant="outlined"
          />
          <Styled.TextField
            id="lastName"
            value={values.lastName}
            error={touched.lastName && !!errors.lastName}
            helperText={touched.lastName && t(errors.lastName as string)}
            onChange={handleChange}
            required
            label={t('screen.manageUsers.lastName')}
            variant="outlined"
          />
          <Styled.TextField
            id="roles"
            value={values.roles}
            error={touched.roles && !!errors.roles}
            helperText={touched.roles && t(errors.roles as string)}
            onChange={handleChange}
            required
            label={t('screen.manageUsers.roles')}
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
