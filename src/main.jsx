import { StoreProvider } from 'easy-peasy'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </StoreProvider>
)
