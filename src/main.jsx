import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Count from './count'
import './index.css'
import App from './App.jsx'
import ColorSchemesExample from './Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ColorSchemesExample /> */}
    {/* <Count /> */}
  </StrictMode>,
)
