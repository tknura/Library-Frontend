export const en = {
  translation: {
    common: {
      appName: 'Library',
      email: 'E-mail',
      password: 'Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: 'Phone number',
      errors: {
        email: {
          required: 'E-mail address is required.',
          format: 'E-mail address format is incorrect.',
        },
        password: {
          required: 'Password is required',
          toShort: 'The password should be at least 8 characters long.',
        },
        firstName: {
          required: 'First name is required.',
        },
        lastName: {
          required: 'Last name is required.',
        },
        phoneNumber: {
          required: 'Phone number is required.',
          format: 'The phone number is in incorrect format.',
        },
      },
    },
    navigation: {
      login: 'Log in',
      logout: 'Log out',
      logoutMessage: 'You have been logged out successfully,',
      tabNames: {
        books: 'Books',
      },
    },
    screen: {
      auth: {
        buttons: {
          noAccount: 'Don\'t have an account? Sign up',
          haveAccount: 'Already have an account? Sign in',
        },
      },
      signIn: {
        buttons: {
          signIn: 'Sign in',
          resetPassword: 'Reset password',
        },
        errors: {
          generic: 'Incorrect credentials',
        },
      },
      signUp: {
        repeatPassword: 'Repeat password',
        success: 'Signed up correctly',
        buttons: {
          signUp: 'Sign up',
        },
        errors: {
          repeatPassword: {
            notMatch: 'The passwords do not match.',
            required: 'Password repetition is required.',
          },
          generic: 'An unknown error occurred during signing up.',
        },
      },
      cart: {
        title: 'Title',
        author: 'Author',
        reservedUntil: 'Item reserved until',
        order: 'Place order',
        errorMessage: 'Erron on fetching cart data',
      },
      details: {
        title: 'Title',
        author: 'Author',
        available: 'Available',
        unavailable: 'Unavailable',
        publisher: 'Publisher',
        publicationDate: 'Publication date',
        addToCart: 'Add to cart',
        errorMessage: 'Error on fetching book data',
      },
    },
  },
}
