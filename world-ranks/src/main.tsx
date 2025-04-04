import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {PrimeReactProvider} from 'primereact/api'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-dark-blue/theme.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
