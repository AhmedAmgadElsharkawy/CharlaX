import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter as Router } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  // strict mode checks are run in development mode only
  // strict mode checks are run twice in development mode to help identify side effects so use effect run twice
  // strict mode does not affect production builds
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)


