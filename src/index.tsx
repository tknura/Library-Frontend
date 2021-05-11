import React from 'react'
import ReactDOM from 'react-dom'

import App from 'App'
import 'i18n'
import { AppProviders } from 'components/providers/AppProviders'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
