import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NumberPicker from './NumberPicker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NumberPicker />
  </StrictMode>,
)
