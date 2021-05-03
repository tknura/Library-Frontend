import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { SignInForm, SignInFormFields } from 'components/forms/SignInForm/SignInForm'
import { SignUpForm, SignUpFormFields } from 'components/forms/SignUpForm/SignUpForm'
import { BOOKS_ROUTE } from 'constants/routeNames'
import { useSignInMutation, useSignUpMutation } from 'api/mutations/auth'
import * as Styled from './AuthScreen.styles'

const AuthScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const [isSignUpFormShown, setSignUpFormShown] = useState(false)
  const { mutate: signUpMutate } = useSignUpMutation({
    onSuccess: () => history.push(BOOKS_ROUTE)
  })
  const { mutate: signInMutate } = useSignInMutation({
    onSuccess: () => history.push(BOOKS_ROUTE)
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
          ? (<SignUpForm onSubmit={handleSignUpSubmit} />)
          : (<SignInForm onSubmit={handleSignInSubmit} />)}
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
