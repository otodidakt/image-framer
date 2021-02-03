import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'
import store from 'store'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
