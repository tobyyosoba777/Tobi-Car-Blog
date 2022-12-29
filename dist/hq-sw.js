
const cacheName = 'hq-1672272774533';
const appShellFiles = ['/index.html','/./manifest.json','/./index.css','/assets/icons/icons8-hennessey-venom-ios-16-glyph-16.png','/./assets/CSS/font-awesome.min.css','/./assets/CSS/font-awesome.css','/./index.js','/./toggle-dark-mode.js','/./assets/js/script.js','/./assets/CSS/all.css','/./'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(appShellFiles)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keyList => Promise.all(keyList.map(key => caches.delete(key)))));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request)
    .then(r => r || fetch(e.request)));
});
