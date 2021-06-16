import * as yup from 'yup'

export const signUpFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('common.errors.username.required'),
  email: yup
    .string()
    .email('common.errors.email.format')
    .required('common.errors.email.required'),
  firstName: yup
    .string()
    .required('common.errors.firstName.required'),
  lastName: yup
    .string()
    .required('common.errors.lastName.required'),
  password: yup
    .string()
    .required('common.errors.password.required')
    .min(8, 'common.errors.password.toShort'),
  repeatPassword: yup
    .string()
    .required('common.errors.repeatPassword.required')
    .oneOf([yup.ref('password'), ''], 'common.errors.repeatPassword.notMatch'),
})
