import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { SignInForm, SignInFormFields } from 'components/forms/SignInForm/SignInForm'
import { SignUpForm, SignUpFormFields } from 'components/forms/SignUpForm/SignUpForm'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { useLogin } from 'components/providers/AuthProvider'
import { useSignInMutation, useSignUpMutation } from 'api/auth'
import { BOOKS_ROUTE } from 'constants/routeNames'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import * as Styled from './AuthScreen.styles'

const AuthScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const { show } = useShowSnackbar()
  const login = useLogin()

  const [isSignUpFormShown, setSignUpFormShown] = useState(false)

  const { mutate: signUpMutate } = useSignUpMutation({
    onSuccess: () => setSignUpFormShown(false),
    onError: () => show({ message: t('screen.signUp.errors.generic'), type: SNACKBAR_ERROR })
  })
  const { mutate: signInMutate } = useSignInMutation({
    onSuccess: ({ accessToken }) => {
      login(accessToken)
      history.push(BOOKS_ROUTE)
    },
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  const handleFormChange = () => {
    setSignUpFormShown(prevState => !prevState)
  }

  const handleSignUpSubmit = (values: SignUpFormFields) => {
    signUpMutate({ username: values.email, ...values })
  }

  const handleSignInSubmit = (values: SignInFormFields) => {
    signInMutate(values)
  }

  return (
    <Styled.RootContainer>
      <Styled.Paper elevation={0}>
        <Styled.Title variant="h2" color="primary">
          {t('common.appName').toUpperCase()}
        </Styled.Title>
        {isSignUpFormShown
          ? <SignUpForm onSubmit={handleSignUpSubmit} />
          : <SignInForm onSubmit={handleSignInSubmit} />}
        <Styled.Hr />
        <Styled.Button
          color="secondary"
          onClick={handleFormChange}
        >
          {isSignUpFormShown
            ? t('screen.auth.buttons.haveAccount')
            : t('screen.auth.buttons.noAccount')}
        </Styled.Button>
      </Styled.Paper>
    </Styled.RootContainer>
  )
}

export { AuthScreen }
