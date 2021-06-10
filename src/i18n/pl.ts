export const pl = {
  translation: {
    common: {
      appName: 'Biblioteka',
      username: 'Nazwa użytkownika',
      email: 'E-mail',
      password: 'Hasło',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      phoneNumber: 'Numer telefonu',
      errors: {
        username: {
          required: 'Nazwa użytkownika jest wymagana',
        },
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
          usernameOrEmail: {
            required: 'Pole Nazwa użytkownika/E-mail jest wymagane',
          },
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
          generic: 'Wystąpił nieznany błąd podczas rejestracji'
        },
      },
      cart: {
        title: 'Twój Koszyk',
        order: 'Złóż zamówienie',
        empty: 'Koszyk jest pusty.',
        sum: 'Podsumowanie: ',
      },
      details: {
        title: 'Tytuł',
        author: 'Autor',
        available: 'Dostępna',
        unavailable: 'Niedostępna',
        publisher: 'Wydawca',
        publicationDate: 'Data publikacji',
        addToCart: 'Dodaj do koszyka',
        errorMessage: 'Błąd przy wczytywaniu danych książki'
      },
      bookList: {
        howMany: 'Dostepne ksiazki'
      },
      account: {
        username: 'Nazwa uzytkownika',
        firstName: 'Imie',
        lastName: 'Nazwisko',
        password: 'Haslo',
        save: 'Zapisz',
        cancel: 'Anuluj',
        edit: 'Edytuj',
        accInfo: 'Informacje o koncie',
        book: 'Ksiazka',
        returnDate: 'Data zwrotu',
        isReturned: 'Zwrocona?',
        yes: 'Tak',
        no: 'Nie',
        borrows: 'Historia Wypozyczen',
      }
    },
  },
}
