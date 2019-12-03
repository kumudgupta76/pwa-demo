self.addEventListener("install", event =>
  event.waitUntil(caches.open("v1").then(cache => cache.add("/offline.html")))
);

self.addEventListener("fetch", event => 
    event.respondWith(
        fetch(event.request).catch(() => caches.open('v1').then(
            cache => cache.match('/offline.html')
            )
        )
    )
);
