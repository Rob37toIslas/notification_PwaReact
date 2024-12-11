import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.log('Error al registrar el Service Worker:', error);
    });
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
