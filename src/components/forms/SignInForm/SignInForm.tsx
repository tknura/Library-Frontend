import { Link, Button } from '@material-ui/core'
import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { signInSchema } from 'schemas/signInFormSchema'
import * as Styled from './SignInForm.styles'

interface SignInFormFields {
  usernameOrEmail: string
  password: string
}

interface SignInFormProps {
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
      usernameOrEmail: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: signInSchema,
  })

  return (
    <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
      <Styled.TextField
        id="usernameOrEmail"
        value={values.usernameOrEmail}
        error={touched.usernameOrEmail && !!errors.usernameOrEmail}
        helperText={touched.password && t(errors.usernameOrEmail as string)}
        onChange={handleChange}
        required
        label={`${t('common.username')}/${t('common.email')}`}
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
