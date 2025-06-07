import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import AppContextProvider from "/src/context/AppContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);