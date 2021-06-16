import * as yup from 'yup'

export const signInFormSchema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .required('screen.signIn.errors.usernameOrEmail.required'),
  password: yup
    .string()
    .required('common.errors.password.required'),
})
