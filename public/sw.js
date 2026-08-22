// Minimal service worker — exists mainly to satisfy Chrome/Android's PWA
// installability checks (manifest + registered service worker with a fetch
// handler) so the "Add to Home Screen" prompt is available.
//
// Intentionally does NOT cache pages or do offline-first behavior: this is
// a news site where content changes constantly, and stale cached articles
// would be worse than no offline support at all. It simply passes every
// request straight through to the network.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
