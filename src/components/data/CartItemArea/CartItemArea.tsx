import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { format, isValid } from 'date-fns'

import { DatePicker } from 'components/inputs/DatePicker'
import * as Styled from './CartItemArea.styles'

interface CartItem {
  itemId: number,
  title: string,
  author: string,
  photoUrl: string,
  endDate: string
}

interface CartItemProps {
  cartItem: CartItem,
  onDelete: (item: CartItem) => void
  onEdit: (item: CartItem) => void
}

const CartItemArea = ({
  cartItem,
  onDelete,
  onEdit,
}: CartItemProps): JSX.Element => {
  const todayDate = new Date()
  const minDate = new Date().setDate(todayDate.getDate() + 1)
  const maxDate = new Date().setMonth(todayDate.getMonth() + 1)

  const { t } = useTranslation()
  const [date, setDate] = useState<number | Date>(minDate)

  const handleChangeDate = (targetDate: MaterialUiPickersDate) => {
    if (isValid(targetDate) && targetDate) {
      setDate(targetDate)
      cartItem.endDate = format(date, 'yyyy-MM-dd')
      onEdit(cartItem)
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
              label={t('screen.cart.reservationDatePickerLabel')}
              value={date}
              onChange={handleChangeDate}
              minDate={minDate}
              maxDate={maxDate}
              InputProps={{ readOnly: true }}
            />
          </Styled.Text>
        </Styled.ReservationDateContainer>
      </Styled.CartItemDataContainer>
    </Styled.CartItemContainer>
  )
}

export { CartItemArea }
export type { CartItem }
