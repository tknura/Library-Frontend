import SimpleImageSlider from 'react-simple-image-slider'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { format } from 'date-fns'

import { BookDescription } from 'components/data/BookDescription/BookDescription'
import { useBookQuery } from 'api/books'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useAddCartItem } from 'components/providers/CartProvider'
import * as Styled from './BookDetailsScreen.styles'

interface BookDetailsScreenRouteParams {
  id: string
}

const BookDetailsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { id } = useParams<BookDetailsScreenRouteParams>()
  const { isLoading, isError, data: bookData } = useBookQuery(+id)
  const addToCart = useAddCartItem()
  const { show } = useShowSnackbar()
  const placeholderPhotos = ['https://altimadental.pl/wp-content/uploads/2015/01/default-placeholder.png']

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }

  const mappedPhotos = (bookData?.urls || placeholderPhotos).map(photo => ({ url: photo }))
  const isAvailable = bookData
    ? !!(bookData?.numberOfBooks - bookData?.numberOfOccupiedBooks)
    : false

  const handleAddToCart = () => {
    if (bookData) {
      const photo = bookData?.urls?.length ? bookData?.urls[0] : placeholderPhotos[0]
      const todayDate = new Date()
      addToCart({
        itemId: bookData.bookId,
        title: bookData.name,
        author: bookData.author,
        photoUrl: photo,
        endDate: format(new Date().setDate(todayDate.getDate() + 1), 'yyyy-MM-dd')
      })
    }
  }

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
            available={!!bookData?.numberOfBooks}
            publisher={bookData?.publisher}
            publicationDate={new Date()}
            description={bookData?.description}
            buttonEnabled={isAvailable && !isError}
            onAddToCart={handleAddToCart}
          />
        </Styled.DetailsContainer>
      )}
    </>
  )
}

export { BookDetailsScreen }
