import { Button } from '@material-ui/core'
import { BOOKS_ROUTE } from 'constants/routeNames'
import { useHistory } from 'react-router'

const BooksScreen = (): JSX.Element => {
  const history = useHistory()

  return (
    <div>
      <br />
      {/* Mock button, should be deleted when creating this screen */}
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push(`${BOOKS_ROUTE}/1`)}
      >
        Redirect to book
      </Button>
    </div>
  )
}

export { BooksScreen }
