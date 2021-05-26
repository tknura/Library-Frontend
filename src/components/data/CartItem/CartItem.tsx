import { useTranslation } from 'react-i18next'

import { DatePicker } from 'components/inputs/DatePicker'
import { useState } from 'react'
import * as Styled from './CartItem.styles'

interface Props {
  title?: string,
  author?: string,
  photo?: string
}

const CartItem = ({
  title,
  author,
  photo
}: Props): JSX.Element => {
  const { t } = useTranslation()
  const [date, setDate] = useState<Date>(new Date())

  const handleChangeDate = (targetDate: Date) => {
    setDate(targetDate)
  }

  const placeholderPhoto = 'https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png'
  return (
    <Styled.CartItemContainer>
      <Styled.Image src={photo || placeholderPhoto} />
      <Styled.DescriptionContainer>
        <Styled.Text variant="h4">
          {title || t('screen.cart.title')}
        </Styled.Text>
        <Styled.Text variant="h5">
          {author || t('screen.cart.author')}
        </Styled.Text>
      </Styled.DescriptionContainer>
      <Styled.ReservationDateContainer>
        <Styled.Text>
          {t('screen.cart.reservedUntil')}
        </Styled.Text>
        <Styled.Text>
          <DatePicker
            date={date}
            handleChange={handleChangeDate}
          />
        </Styled.Text>
      </Styled.ReservationDateContainer>
    </Styled.CartItemContainer>
  )
}

export { CartItem }
