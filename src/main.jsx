import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Router
import { BrowserRouter } from "react-router-dom";

// Styles
import "src/assets/scss/index.scss";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
