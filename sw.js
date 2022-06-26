const urlsToCache = [
   "/index.html", 
   "app.js",
   "styles.css",
   "empty.p8.png",
   "pico8.png",
   "favicon.ico",
   "pico8.webmanifest"];

self.addEventListener("install", event => {
   event.waitUntil(
      caches.open("pico8")
         .then(cache => {
            return cache.addAll(urlsToCache);
         })
    );
 });

 self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request)
     .then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});