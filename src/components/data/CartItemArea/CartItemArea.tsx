import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

import { CartItem } from 'api/cart'
import { DatePicker } from 'components/inputs/DatePicker'
import { IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import * as Styled from './CartItemArea.styles'

interface Props {
  cartItem: CartItem,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onDelete: Function
}

const CartItemArea = ({
  cartItem,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation()
  const [date, setDate] = useState<Date>(new Date())

  const todayDate = new Date()
  const minDate = new Date().setDate(todayDate.getDate() + 1)
  const maxDate = new Date().setMonth(todayDate.getMonth() + 1)

  const handleChangeDate = (targetDate: MaterialUiPickersDate) => {
    if (targetDate) {
      setDate(targetDate)
      // patch date
    }
  }

  const handleDelete = () => {
    onDelete(cartItem)
  }

  const placeholderPhoto = 'https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'
  return (
    <Styled.CartItemContainer>
      <Styled.CartItemDeleteContainer>
        <IconButton onClick={handleDelete}>
          <DeleteForever />
        </IconButton>
      </Styled.CartItemDeleteContainer>
      <Styled.CartItemDataContainer>
        <Styled.Image src={cartItem.photoUrl || placeholderPhoto} />
        <Styled.DescriptionContainer>
          <Styled.Text variant="h4">
            {cartItem.title || t('screen.cart.title')}
          </Styled.Text>
          <Styled.Text variant="h5">
            {cartItem.author || t('screen.cart.author')}
          </Styled.Text>
        </Styled.DescriptionContainer>
        <Styled.ReservationDateContainer>
          <Styled.Text>
            {t('screen.cart.reservedUntil')}
          </Styled.Text>
          <Styled.Text>
            <DatePicker
              label="Reservation date"
              value={date}
              onChange={handleChangeDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          </Styled.Text>
        </Styled.ReservationDateContainer>
      </Styled.CartItemDataContainer>
    </Styled.CartItemContainer>
  )
}

export { CartItemArea }
