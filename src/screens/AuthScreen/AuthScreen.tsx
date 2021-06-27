import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { useCartMetaQuery } from 'api/cart'
import { useUsersMetaQuery } from 'api/users'
import { SignInForm, SignInFormFields } from 'components/forms/SignInForm/SignInForm'
import { SignUpForm, SignUpFormFields } from 'components/forms/SignUpForm/SignUpForm'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { useSetCartId, useSetRole, useSetToken, useUserAccessToken, useUserCartId, useUserRole } from 'components/providers/AuthProvider'
import { CLIENT_ROLE } from 'constants/userRoles'
import { useSignInMutation, useSignUpMutation } from 'api/auth'
import { BOOKS_ROUTE, MANAGE_ROUTE } from 'constants/routeNames'
import { SNACKBAR_ERROR, SNACKBAR_SUCCESS } from 'constants/snackbarTypes'
import * as Styled from './AuthScreen.styles'

const AuthScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const { show } = useShowSnackbar()
  const setToken = useSetToken()
  const setCartId = useSetCartId()
  const setRole = useSetRole()

  const accessToken = useUserAccessToken()
  const userRole = useUserRole()
  const userCartId = useUserCartId()

  const [isSignUpFormShown, setSignUpFormShown] = useState(false)

  const { mutate: signUpMutate } = useSignUpMutation({
    onSuccess: () => {
      setSignUpFormShown(false)
      show({ message: t('screen.signUp.success'), type: SNACKBAR_SUCCESS })
    },
    onError: () => show({ message: t('screen.signUp.errors.generic'), type: SNACKBAR_ERROR })
  })
  const { mutate: signInMutate } = useSignInMutation({
    onSuccess: async ({ accessToken: newAccessToken }) => setToken(newAccessToken),
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  useCartMetaQuery({
    enabled: !!accessToken,
    onSuccess: ({ cartId }) => setCartId(cartId),
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })
  useUsersMetaQuery({
    enabled: !!accessToken,
    onSuccess: ({ permissions: { roles } }) => setRole(roles[0].roleName),
    onError: () => show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
  })

  useEffect(() => {
    if (accessToken && userRole && userCartId) {
      userRole === CLIENT_ROLE ? history.push(BOOKS_ROUTE) : history.push(MANAGE_ROUTE)
    }
  }, [accessToken, history, userCartId, userRole])

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
