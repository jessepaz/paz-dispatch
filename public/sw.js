const CACHE_VERSION='paz-dispatch-shell-v2';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim());});
self.addEventListener('fetch',event=>{/* network pass-through: always use the newest hosted app */});
