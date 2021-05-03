import { Link, Button } from '@material-ui/core'
import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { signInSchema } from 'schemas/signInFormSchema'
import * as Styled from './SignInForm.styles'

interface SignInFormFields {
  email: string
  password: string
}

interface SignInFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: SignInFormFields, helpers: FormikHelpers<SignInFormFields>) => void
}

const SignInForm = ({
  onSubmit: handleSubmit
}: SignInFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: signInSchema,
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
      <Styled.ButtonContainer>
        <Link
          component="button"
          href="/"
        >
          {t('screen.signIn.buttons.resetPassword')}
        </Link>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
        >
          {t('screen.signIn.buttons.signIn')}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Form>
  )
}

export { SignInForm }
export type { SignInFormFields }
