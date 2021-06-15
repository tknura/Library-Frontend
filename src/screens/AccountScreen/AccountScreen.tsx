import { AccountDataForm, UserData } from 'components/forms/AccountDataForm/AccountDataForm'
import { BorrowList } from 'components/data/BorrowList/BorrowList'
import { Borrow } from 'components/data/BorrowList/BorrowArea'
import * as Styled from './AccountScreen.styles'

const tempValues: UserData = {
  email: 'abc@gmail.com',
  username: 'malyszex123',
  firstName: 'Adam',
  lastName: 'Malysz',
  password: 'qwe123'
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
