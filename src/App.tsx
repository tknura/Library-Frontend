import { BrowserRouter } from 'react-router-dom'

import { MainRoutes } from 'components/routes/MainRoutes'
import { Snackbar } from 'components/utillity/Snackbar'

const App = (): JSX.Element => (
  <BrowserRouter>
    <div>
      <MainRoutes />
    </div>
    <Snackbar />
  </BrowserRouter>
)

export default App
