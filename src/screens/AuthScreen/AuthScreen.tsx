import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { SignInForm, SignInFormFields } from 'components/forms/SignInForm/SignInForm'
import { SignUpForm, SignUpFormFields } from 'components/forms/SignUpForm/SignUpForm'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { useSetCartId, useSetRole, useSetToken } from 'components/providers/AuthProvider'
import { CLIENT_ROLE, MANAGER_ROLE } from 'constants/userRoles'
import { useFetch } from 'components/providers/FetchProvider'
import { useSignInMutation, useSignUpMutation } from 'api/auth'
import { BOOKS_ROUTE, MANAGE_ROUTE } from 'constants/routeNames'
import { SNACKBAR_ERROR, SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import { UserRole } from 'types/UserRole'
import * as Styled from './AuthScreen.styles'

const AuthScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const { show } = useShowSnackbar()
  const setToken = useSetToken()
  const setCartId = useSetCartId()
  const setRole = useSetRole()
  const { fetch } = useFetch()

  const [isSignUpFormShown, setSignUpFormShown] = useState(false)

  const { mutate: signUpMutate } = useSignUpMutation({
    onSuccess: () => {
      setSignUpFormShown(false)
      show({ message: t('screen.signUp.success'), type: SNACKBAR_SUCCESS })
    },
    onError: () => show({ message: t('screen.signUp.errors.generic'), type: SNACKBAR_ERROR })
  })
  const { mutate: signInMutate } = useSignInMutation({
    onSuccess: async ({ accessToken: newAccessToken }, variables) => {
      const userRole: UserRole = variables.username?.includes('manager') ? MANAGER_ROLE : CLIENT_ROLE
      setToken(newAccessToken)
      setRole(userRole)
      const { data } = await fetch.get('/cart/meta')
      setCartId(data.cartId)
      userRole === CLIENT_ROLE ? history.push(BOOKS_ROUTE) : history.push(MANAGE_ROUTE)
    },
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  const handleFormChange = () => {
    setSignUpFormShown(prevState => !prevState)
  }

  const handleSignUpSubmit = (values: SignUpFormFields) => {
    signUpMutate(values)
  }

  const handleSignInSubmit = (values: SignInFormFields) => {
    if (values.usernameOrEmail.includes('@')) {
      signInMutate({ email: values.usernameOrEmail, password: values.password })
    } else {
      signInMutate({ username: values.usernameOrEmail, password: values.password })
    }
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
