import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

import * as Styled from './BookDescription.styles'

interface Props {
  title?: string,
  author?: string,
  available?: boolean,
  publisher?: string,
  publicationDate?: Date,
  description?: string,
  buttonEnabled: boolean,
  onAddToCart: () => void
}

const BookDescription = ({
  title,
  author,
  available = false,
  publisher,
  publicationDate,
  description,
  buttonEnabled,
  onAddToCart
}: Props): JSX.Element => {
  const { t } = useTranslation()

  const handleAddToCart = () => {
    onAddToCart()
  }

  return (
    <Styled.DescriptionContainer>
      <Styled.TextContainer elevation={0}>
        <Styled.Text variant="h4">
          {title || t('screen.details.title')}
        </Styled.Text>
        <Styled.Text variant="h5">
          {author || t('screen.details.author')}
        </Styled.Text>
      </Styled.TextContainer>
      <Styled.TextContainer elevation={0}>
        {!available && (
          <Styled.AvailableText color="error">
            {t('screen.details.unavailable')}
          </Styled.AvailableText>
        )}
        <Styled.Text>
          {`${t('screen.details.publisher')}: ${publisher}`}
        </Styled.Text>
        {!!publicationDate && (
          <Styled.Text>
            {`${t('screen.details.publicationDate')}: ${format(publicationDate, 'dd/MM/yyyy')}`}
          </Styled.Text>
        )}
        <Styled.DescriptionText>
          {description}
        </Styled.DescriptionText>
      </Styled.TextContainer>
      <Styled.AddToCartButton
        variant="contained"
        color="primary"
        disabled={!buttonEnabled}
        onClick={handleAddToCart}
      >
        {t('screen.details.addToCart')}
      </Styled.AddToCartButton>
    </Styled.DescriptionContainer>
  )
}

export { BookDescription }
