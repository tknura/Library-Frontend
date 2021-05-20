import { format } from 'date-fns'

import { useTranslation } from 'react-i18next'
import * as Styled from './BookDescription.styles'

interface Props {
  title?: string,
  author?: string,
  available?: boolean,
  publisher?: string,
  publicationDate?: Date,
  description?: string
}

const BookDescription = ({
  title,
  author,
  available,
  publisher,
  publicationDate,
  description
}: Props): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Styled.DescriptionContainer>
      <Styled.TextContainer elevation={0}>
        <Styled.Text variant="h4">
          {title}
        </Styled.Text>
        <Styled.Text variant="h5">
          {author}
        </Styled.Text>
      </Styled.TextContainer>
      <Styled.TextContainer elevation={0}>
        <Styled.AvailableText>
          {`${t('screen.details.available')}: ${available}`}
        </Styled.AvailableText>
        <Styled.Text>
          {`${t('screen.details.publisher')}: ${publisher}`}
        </Styled.Text>
        <Styled.Text>
          {publicationDate
            ? `${t('screen.details.publicationDate')}: ${format(publicationDate, 'dd/MM/yyyy')}`
            : `${t('screen.details.publicationDate')}: no date`}
        </Styled.Text>
        <Styled.DescriptionText>
          {description}
        </Styled.DescriptionText>
      </Styled.TextContainer>
      <Styled.AddToCartButton variant="contained" color="primary">
        {t('screen.details.addToCart')}
      </Styled.AddToCartButton>
    </Styled.DescriptionContainer>
  )
}

export { BookDescription }
