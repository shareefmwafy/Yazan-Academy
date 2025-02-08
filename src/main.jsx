import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { LanguageProvider } from "./context/LanguageProvider.jsx";

import "./i18n";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
