import { BrowserRouter } from 'react-router-dom'

import { MainRoutes } from 'components/routes/MainRoutes'

const App = (): JSX.Element => (
  <BrowserRouter>
    <div>
      <MainRoutes />
    </div>
  </BrowserRouter>
)

export default App
