
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('fitsearch-cache-v1').then(cache => {
      return cache.addAll([
        './exercise-search.html',
        './exercises_data_with_movement.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
