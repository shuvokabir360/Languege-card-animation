const CACHE_NAME = 'lang-app-cache-v37';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './style.css?v=35',
  './app.js',
  './app.js?v=29',
  './visual_scenes.js',
  './visual_scenes.js?v=2',
  './assets/scenes/scene_bus_stand.jpg',
  './assets/scenes/scene_fruit_market.jpg',
  './assets/scenes/scene_tea_stall.jpg',
  './html2canvas.min.js',
  './data_hindi.js',
  './data_hindi.js?v=1',
  './data_english.js',
  './data_english.js?v=1',
  './data_chinese.js',
  './data_chinese.js?v=1',
  './data_arabic.js',
  './data_arabic.js?v=1',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Navigation or asset requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Cache fresh response clone if valid
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if offline
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
