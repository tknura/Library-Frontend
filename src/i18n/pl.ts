export const pl = {
  translation: {
    common: {
      appName: 'Bookshop',
      email: 'E-mail',
      password: 'Hasło',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      phoneNumber: 'Numer telefonu',
      errors: {
        email: {
          required: 'Adres e-mail jest wymagany',
          format: 'Adres e-mail jest niepoprawny.',
        },
        password: {
          required: 'Hasło jest wymagane',
          toShort: 'Hasło powinno mieć conajmniej 8 znaków',
        },
        firstName: {
          required: 'Imię jest wymagane',
        },
        lastName: {
          required: 'Nazwisko jest wymagane',
        },
        phoneNumber: {
          required: 'Numer telefonu jest wymagany',
          format: 'Podany numer telefonu ma nieprawidlowy format',
        },
      },
    },
    navigation: {
      login: 'Zaloguj się',
      logout: 'Wyloguj się',
      logoutMessage: 'Zostałeś wylogowany pomyślnie.',
      tabNames: {
        books: 'Książki',
      },
    },
    screen: {
      auth: {
        buttons: {
          noAccount: 'Nie masz konta? Zarejestruj się',
          haveAccount: 'Masz już konto? Zaloguj się',
        },
      },
      signIn: {
        buttons: {
          signIn: 'Zaloguj się',
          resetPassword: 'Zresetuj hasło',
        },
        errors: {
          generic: 'Niepoprawne dane logowania.',
        },
      },
      signUp: {
        repeatPassword: 'Powtórz hasło',
        success: 'Zarejestrowano pomyślnie',
        buttons: {
          signUp: 'Zarejestruj się',
        },
        errors: {
          repeatPassword: {
            notMatch: 'Podane hasło nie jest zgodne',
            required: 'Powtórzenie hasła jest wymagane',
          },
        },
      },
      cart: {
        title: 'Twój Koszyk',
        order: 'Złóż zamówienie',
        empty: 'Koszyk jest pusty.',
        sum: 'Podsumowanie: ',
      },
      details: {
        available: 'Dostępne egzemplarze',
        publisher: 'Wydawca',
        publicationDate: 'Data publikacji',
        addToCart: 'Dodaj do koszyka',
      },
    },
  },
}
