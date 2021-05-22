import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { signUpSchema } from 'schemas/signUpFormSchema'
import * as Styled from './SignUpForm.styles'

interface SignUpFormFields {
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  password: string
  repeatPassword: string
}

interface SignUpFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: SignUpFormFields, helpers: FormikHelpers<SignUpFormFields>) => void
}

const SignUpForm = ({
  onSubmit: handleSubmit
}: SignUpFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik<SignUpFormFields>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: signUpSchema,
  })

  return (
    <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
      <Styled.TextField
        id="email"
        value={values.email}
        error={touched.email && !!errors.email}
        helperText={touched.password && t(errors.email as string)}
        onChange={handleChange}
        required
        label={t('common.email')}
        variant="outlined"
      />
      <Styled.TextField
        id="firstName"
        value={values.firstName}
        error={touched.firstName && !!errors.firstName}
        helperText={touched.firstName && t(errors.firstName as string)}
        onChange={handleChange}
        required
        label={t('common.firstName')}
        variant="outlined"
      />
      <Styled.TextField
        id="lastName"
        value={values.lastName}
        error={touched.lastName && !!errors.lastName}
        helperText={touched.lastName && t(errors.lastName as string)}
        onChange={handleChange}
        required
        label={t('common.lastName')}
        variant="outlined"
      />
      <Styled.TextField
        id="phoneNumber"
        error={touched.phoneNumber && !!errors.phoneNumber}
        helperText={touched.phoneNumber && t(errors.phoneNumber as string)}
        required
        label={t('common.phoneNumber')}
        onChange={handleChange}
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
      <Styled.Button
        variant="outlined"
        color="primary"
        type="submit"
      >
        {t('screen.signUp.buttons.signUp')}
      </Styled.Button>
    </Styled.Form>
  )
}

export { SignUpForm }
export type { SignUpFormFields }
