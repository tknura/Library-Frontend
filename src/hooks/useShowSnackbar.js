import { useShowSnackbarContext } from 'components/providers/SnackbarProvider/ShowSnackbarContext'

const useShowSnackbar = () => {
  const { show } = useShowSnackbarContext()
  return show
}

export {
  useShowSnackbar,
}
