import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CulturistApp from './Culturist.jsx'
import LandingPage from './LandingPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CulturistApp />
    <LandingPage />
  </StrictMode>,
)