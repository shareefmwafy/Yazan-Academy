import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import "./i18n";
import { ThemeProvider } from './cont/ThemeProvider.jsx';
import { LanguageProvider } from "./cont/LanguageProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
