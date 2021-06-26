export const en = {
  translation: {
    common: {
      appName: 'Library',
      username: 'Username',
      email: 'E-mail',
      password: 'Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: 'Phone number',
      add: 'Add',
      save: 'Save',
      cancel: 'Cancel',
      errors: {
        username: {
          required: 'Username is required',
        },
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
      manage: {
        books: 'Books',
        users: 'Users',
        deliveries: 'Deliveries',
        manageReservations: 'Pending Reservations',
        allReservations: 'Reservations'
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
          generic: 'Incorect credentials.',
          usernameOrEmail: {
            required: 'Username/E-mail is required',
          },
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
        errorMessage: 'Error on fetching cart data',
        login: 'Log in',
        reservationDatePickerLabel: 'Reservation date',
        empty: 'Cart is empty!'
      },
      cartConfirmationModal: {
        title: 'Do you want to confirm your reservation?',
        itemsMissing: 'Item(s) missing that will not be reserved:',
        orderIsComplete: 'Order is complete',
        confirm: 'Confirm',
        cancel: 'Cancel',
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
      bookList: {
        howMany: 'Available books'
      },
      account: {
        save: 'Save',
        cancel: 'Cancel',
        edit: 'Edit',
        accInfo: 'Account information',
        book: 'Book',
        returnDate: 'Date of return',
        isReturned: 'Returned?',
        yes: 'Yes',
        no: 'No',
        borrows: 'Borrow history',
      },
      manageBooks: {
        id: 'ID',
        title: 'Title',
        description: 'Description',
        author: 'Author',
        publisher: 'Publisher',
        publicationDate: 'Publication Date',
        numberOfBooks: 'Books amount',
        numberOfOccupiedBooks: 'Occupied books amount',
        serialNumber: 'Serial number',
        actions: 'Actions',
        addOrEditBook: 'Add/Edit book',
        photo: 'Photo (link)',
        empty: 'No books in the system, you can add them by clicking the "Add" button.',
        errors: {
          title: {
            required: 'Title is required'
          },
          author: {
            required: 'Author is required'
          },
          description: {
            required: 'Description is required'
          },
          publicationDate: {
            required: 'Publication date is required'
          },
          publisher: {
            required: 'Publisher is required'
          },
          photo: {
            required: 'Photo is required'
          },
          addBook: 'An error occurred during adding book, try again later.',
          editBook: 'An error occurred during updating book, try again later.',
        }
      },
      manageDeliveries: {
        deliveryArticle: 'Delivery article',
        quantity: 'Quantity',
        requestDate: 'Delivery request date',
        expectedDelivery: 'Expected delivery date',
        addDelivery: 'Register new delivery',
        errors: {
          amount: {
            required: 'Amount is required',
            min: 'Amount must be higher than 0'
          },
          articleDetailId: {
            required: 'Delivery article id is required',
            min: 'Delivery article id must be higher than 0'
          },
          expectedDeliveryDate: {
            required: 'Expected delivery date is required'
          },
          addDelivery: 'Ann error occurred during adding delivery, try again later',
        }
      },
      allReservations: {
        id: 'ID',
        title: 'Title',
        author: 'Author',
        publisher: 'Publisher',
        publicationDate: 'Publication Date',
        endTime: 'End Time',
        status: 'Status',
        empty: 'No reservations in the system.',
        startDate: 'Report from',
        endDate: 'Report to',
        printRaport: 'Drukuj report'
      },
      manageReservations: {
        id: 'ID',
        title: 'Title',
        author: 'Author',
        publisher: 'Publisher',
        publicationDate: 'Publication Date',
        endTime: 'End Time',
        actions: 'Actions',
        acceptedReservation: 'Reservation has been accepted.',
        rejectedReservation: 'Reservation has been rejected.',
        empty: 'No pending reservations in the system.',
        errors: {
          acceptReservation: 'An error occured during accepting the reservation, try again later.',
          rejectReservation: 'An error occured during rejecting the reservation, try again later.',
        }
      },
    },
  },
}
