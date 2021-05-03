import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
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
  phoneNumber: yup
    .string()
    .required('common.errors.phoneNumber.required')
    .min(9, 'common.errors.phoneNumber.format')
    .max(11, 'common.errors.phoneNumber.format'),
  password: yup
    .string()
    .required('common.errors.password.required')
    .min(8, 'common.errors.password.toShort'),
  repeatPassword: yup
    .string()
    .required('screen.signUp.errors.repeatPassword.required')
    .oneOf([yup.ref('password'), ''], 'screen.signUp.errors.repeatPassword.notMatch'),
})
