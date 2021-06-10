import { AccountDataForm } from 'components/forms/AccountDataForm/AccountDataForm'
import { BorrowList } from 'components/data/BorrowList/BorrowList'
import * as Styled from './AccountScreen.styles'

export interface UserData {
  email: string
  username: string
  firstName: string
  lastName: string
  password: string
}

const tempValues: UserData = {
  email: 'abc@gmail.com',
  username: 'malyszex123',
  firstName: 'Adam',
  lastName: 'Malysz',
  password: 'qwe123'
}

interface Book {
  id: number
  title: string
  author: string
}

export interface Borrow {
  id: number
  book: Book
  returnDate: Date
  isReturned: boolean
}

const tempBorrows: Borrow[] = [
  {
    id: 1,
    book: {
      id: 1,
      title: 'abc',
      author: 'asd'
    },
    returnDate: new Date('10.10.2010'),
    isReturned: true
  },
  {
    id: 2,
    book: {
      id: 1,
      title: 'abc',
      author: 'asd'
    },
    returnDate: new Date('10.10.2010'),
    isReturned: false
  },
  {
    id: 3,
    book: {
      id: 2,
      title: 'bca',
      author: 'dsa'
    },
    returnDate: new Date('10.10.2020'),
    isReturned: true
  },
  {
    id: 4,
    book: {
      id: 3,
      title: 'cba',
      author: 'sad'
    },
    returnDate: new Date('10.10.2021'),
    isReturned: false
  }
]

const AccountScreen = (): JSX.Element => (
  <Styled.RootContainer>
    <AccountDataForm
      userData={tempValues}
    />
    <BorrowList
      borrows={tempBorrows}
    />
  </Styled.RootContainer>
)

export { AccountScreen }
