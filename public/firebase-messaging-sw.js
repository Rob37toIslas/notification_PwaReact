
const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/vite.svg',
  'logo.png',
  '/manifest.json',
  '/utils.js',

];

// Instalar el Service Worker y cachear los recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar el Service Worker y limpiar caché vieja
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Interceptar las solicitudes de red y servir desde caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});



// Firebase Messaging - Manejo de notificaciones push
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');
importScripts('/utils.js');

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  saveToIndexedDB('notificacion', payload.notification.title)
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png',
    badge: '/logo.png'
  };
    self.registration.showNotification(notificationTitle,notificationOptions)
})
