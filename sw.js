const V="cyberpath-v2",F=["./","index.html","course.html","library.html","tools.html","checklist.html","reference.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!="GET")return;
e.respondWith(caches.open(V).then(c=>c.match(e.request).then(r=>{const n=fetch(e.request).then(x=>{if(x.ok&&new URL(e.request.url).origin==location.origin)c.put(e.request,x.clone());return x}).catch(()=>r||c.match("index.html"));return r||n})))});
