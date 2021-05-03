import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import App from 'App'
import 'i18n'
import { AppProviders } from 'components/providers/AppProviders'
import './index.css'

// TO DO add api url as an env variable
axios.defaults.baseURL = 'https://bookstore-api-scholar.herokuapp.com/api'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
