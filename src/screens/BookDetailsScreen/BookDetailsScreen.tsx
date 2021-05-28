import SimpleImageSlider from 'react-simple-image-slider'
import { useTranslation } from 'react-i18next'

import { BookDescription } from 'components/data/BookDescription/BookDescription'
import { useBookQuery } from 'api/books'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import * as Styled from './BookDetailsScreen.styles'

const BookDetailsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading, isError, data: bookData } = useBookQuery(1)
  const { show } = useShowSnackbar()
  const placeholderPhotos = ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png']

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }

  const mappedPhotos = (bookData?.urls || placeholderPhotos).map(photo => ({ url: photo }))

  return (
    <>
      {isLoading ? (
        <Styled.Loading size={150} />
      ) : (
        <Styled.DetailsContainer>
          <Styled.PictureContainer>
            <SimpleImageSlider
              width={375}
              height={375}
              showNavs
              showBullets
              images={mappedPhotos}
            />
          </Styled.PictureContainer>
          <BookDescription
            title={bookData?.name}
            author={bookData?.author}
            available={bookData?.isOccupied}
            publisher={bookData?.publisher}
            publicationDate={new Date()}
            description={bookData?.description}
            buttonEnabled={bookData?.isOccupied || !isError}
          />
        </Styled.DetailsContainer>
      )}
    </>
  )
}

export { BookDetailsScreen }
