import SimpleImageSlider from 'react-simple-image-slider'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useTranslation } from 'react-i18next'

import { BookDescription } from 'components/data/BookDescription/BookDescription'
import { useBookQuery } from 'api/queries/books'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import * as Styled from './BookDetailsScreen.styles'

const BookDetailsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading, isError, data: bookData } = useBookQuery(1)
  const { show } = useShowSnackbar()

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }
  const mappedPhotos = bookData?.photos.map(photo => ({ url: photo })) || []
  return (
    <>
      {isLoading ? (
        <CircularProgress />
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
            title={bookData?.title}
            author={bookData?.author}
            available={bookData?.available}
            publisher={bookData?.publisher}
            publicationDate={bookData?.publicationDate}
            description={bookData?.description}
          />
        </Styled.DetailsContainer>
      )}
    </>
  )
}

export { BookDetailsScreen }
