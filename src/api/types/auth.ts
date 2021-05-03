interface SignUpValues {
  email: string
  username: string
  firstName: string
  lastName: string
  phoneNumber: string
  password: string
}

interface SignInValues {
  email: string
  password: string
}

export type { SignInValues, SignUpValues }
