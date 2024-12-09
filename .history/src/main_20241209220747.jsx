import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// redux toolkid codes here
import { Provider } from 'react-redux'
import store from './redux/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      
    </Provider>
  </StrictMode>,
)
