import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import NavHeader from "./components/NavHeader.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <NavHeader/>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
