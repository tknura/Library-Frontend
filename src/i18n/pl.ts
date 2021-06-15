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
      add: 'Dodaj',
      save: 'Zapisz',
      cancel: 'Anuluj',
      errors: {
        username: {
          required: 'Nazwa użytkownika jest wymagana',
        },
        email: {
          required: 'Adres e-mail jest wymagany',
          format: 'Adres e-mail jest niepoprawny',
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
        repeatPassword: {
          notMatch: 'Podane hasło nie jest zgodne',
          required: 'Powtórzenie hasła jest wymagane',
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
      manage: {
        books: 'Książki',
        users: 'Użytkownicy',
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
          generic: 'Wystąpił nieznany błąd podczas rejestracji'
        },
      },
      cart: {
        title: 'Tytuł',
        author: 'Autor',
        reservedUntil: 'Przedmiot zarezerwowany do',
        order: 'Złóż zamówienie',
        errorMessage: 'Błąd przy wczytywaniu danych koszyka',
        login: 'Zaloguj się',
        reservationDatePickerLabel: 'Data rezerwacji',
      },
      cartConfirmationModal: {
        title: 'Czy chcesz potwierdzić rezerwację?',
        itemsMissing: 'Brakujące przedmiot(y) które nie zostaną zarezerwowane:',
        orderIsComplete: 'Zamówienie jest kompletne',
        confirm: 'Potwierdź',
        cancel: 'Anuluj',
      },
      details: {
        title: 'Tytuł',
        author: 'Autor',
        available: 'Dostępna',
        unavailable: 'Niedostępna',
        publisher: 'Wydawca',
        publicationDate: 'Data publikacji',
        addToCart: 'Dodaj do koszyka',
        errorMessage: 'Błąd przy wczytywaniu danych książki',
      },
      bookList: {
        howMany: 'Dostepne ksiazki'
      },
      manageBooks: {
        id: 'ID',
        title: 'Tytuł',
        description: 'Opis',
        author: 'Autor',
        publisher: 'Wydawca',
        publicationDate: 'Data publikacji',
        numberOfBooks: 'Ilość ogółem',
        numberOfOccupiedBooks: 'Ilość wypożyczona',
        serialNumber: 'Numer seryjny',
        actions: 'Akcje',
        addOrEditBook: 'Dodaj/Edytuj książkę',
        photo: 'Zdjęcie (link)',
        empty: 'Brak książek w systemie, możesz je dodać poprzez kliknięcie przycisku "Dodaj".',
        errors: {
          serialNumber: {
            required: 'Numer seryjny jest wymagany',
            min: 'Numer seryjny musi być liczbą dodatnią',
          },
          title: {
            required: 'Tytuł jest wymagany'
          },
          author: {
            required: 'Autor jest wymagany'
          },
          description: {
            required: 'Opis jest wymagany'
          },
          publicationDate: {
            date: 'Data publikacji musi być datą w formacie YYYY-MM-DD'
          },
          addBook: 'Nie udało się dodać książki, spróbuj ponownie później.',
          editBook: 'Nie udało się zedytować danych książki, spróbuj ponownie później.',
        }
      },
      manageUsers: {
        editUser: 'Edytuj użytkownika',
        email: 'E-mail',
        username: 'Nazwa użytkownika',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        password: 'Hasło',
        roles: 'Role',
        actions: 'Akcje',
        errors: {
          roles: {
            oneOf: 'Niepoprawna rola.',
            min: 'Użytkownik musi mieć minimum jedną rolę',
          },
          editUser: 'Nie udało się zedytować danych użytkownika, spróbuj ponownie później.'
        },
      },
    },
  },
}
