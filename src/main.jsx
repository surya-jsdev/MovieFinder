import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetData from './count'
import './index.css'
import App from './App.jsx'
import ColorSchemesExample from './Navbar.jsx'
import Weather from './Weather.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Weather /> */}
    {/* <ColorSchemesExample /> */}
    {/* <GetData /> */}
  </StrictMode>,
)
