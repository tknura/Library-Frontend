import { CLIENT_ROLE, EMPLOYEE_ROLE, MANAGER_ROLE } from 'constants/userRoles'
import * as yup from 'yup'

export const userFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('common.errors.username.required'),
  email: yup
    .string()
    .email('common.errors.email.format')
    .required('common.errors.email.required'),
  firstName: yup
    .string(),
  lastName: yup
    .string(),
  password: yup
    .string()
    .required('common.errors.password.required')
    .min(8, 'common.errors.password.toShort'),
  repeatPassword: yup
    .string()
    .required('common.errors.repeatPassword.required')
    .oneOf([yup.ref('password'), ''], 'common.errors.repeatPassword.notMatch'),
  roles: yup
    .string()
    .oneOf([
      CLIENT_ROLE,
      MANAGER_ROLE,
      EMPLOYEE_ROLE
    ], 'screen.manageUsers.errors.roles.oneOf')
    .required('screen.manageUsers.errors.roles.min'),
})
