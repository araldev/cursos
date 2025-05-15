import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// "<StrictMode> "te da advertencias si usas código antiguo de React,
// si haces algo incorrecto y ademas con los efectos:
// ejecuta el efecto, ejecuta el cleanUp(return () => {}) y ejecuta el efecto.
// Sirve para nada mas entrar ver si hay dos veces el evento y
// no se ha realizado bien el cleanUp.
// Solo sirve en desarrolo!!! <----------
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
