'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "04a0dff390ef4027cf3a9d4d15c1848b",
".git/config": "5f5f570c56261297c49e5bd3f43187a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b141435d7d27a9793b4c22be5cced025",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "70917d32335e424fb4a656799493ac47",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1bfb7e79ab6ba21235233747b0f69e4a",
".git/logs/refs/heads/main": "1bfb7e79ab6ba21235233747b0f69e4a",
".git/logs/refs/remotes/origin/HEAD": "1f440acb09dca73e38696864a9d40f04",
".git/logs/refs/remotes/origin/main": "6d1eb2d123053d4098f10d6f545f328c",
".git/objects/0e/ad8e751bbb4adae67fffa018e5d97333388563": "f9f0244edbdf6887de1528327a9a24fb",
".git/objects/38/708d1b6b298b1500c35e46c344d0a743933230": "b9ff520d347c3dcb36d3824d59413be0",
".git/objects/50/f12721a617e6565056ff2ced380f7bc65fc18a": "e9b12e8d998b6133c27b6722c4883f3b",
".git/objects/58/c87628db26861c85f83c3f73bd7e58efb6ab3b": "8fb8b554ff7d76f262eb0b9eba7461a0",
".git/objects/7d/cfd1a9e3475d98a065b711df24e2873be7908e": "18d2ea839d9e96e18803beb0902d6661",
".git/objects/94/b940864b8bec50d9ba3b60f13ef4b1a1dc3a50": "764088b86442df3f765b13c17aed91b4",
".git/objects/b5/dac69492d20900782ec952f63dbf6054bdfde0": "dd98e57e89eb4f0db3f8ab7d9e08c43b",
".git/objects/c8/1491f0af07252d177bfec514c373cf49153c88": "f4e0ff0c0f990f8187467506fe77771f",
".git/objects/df/1c29eeb446937d6cc492dd748b4500e832b808": "9e0b8f4d2b9d7db29543423b4e871ac8",
".git/objects/fd/ac9e88febb55383874843df546161b6c0399b5": "7ac1491a8d4b5f97d6ca2f496ea894cb",
".git/objects/pack/pack-b3a6dbdbdab213dff9dbd2fba8c2f888e268ce0f.idx": "f8be62d9052514d5d571125b460655a1",
".git/objects/pack/pack-b3a6dbdbdab213dff9dbd2fba8c2f888e268ce0f.pack": "3fa40a76bacd1a15dbf402a51abba7b7",
".git/ORIG_HEAD": "82c9f63f2e93fd86f5ff4d4f588ef893",
".git/packed-refs": "da918b5345471ae2ddcc4439971c63be",
".git/refs/heads/main": "82c9f63f2e93fd86f5ff4d4f588ef893",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "82c9f63f2e93fd86f5ff4d4f588ef893",
"assets/AssetManifest.json": "3534734527e38ff0637affdf798f1faa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/lib/assets/logo.png": "a2349977b7d3fc28ae442f47c1a7d2a8",
"assets/lib/assets/Wheely.png": "7937486791e42e678ed3bb00a9704ff8",
"assets/lib/assets/Wheely3.png": "2131509a3631b0b740bd73a4ba30c42a",
"assets/lib/assets/willi.png": "e76fb092cb690e4c5a214629f5d6ebaf",
"assets/NOTICES": "f1e71a0c565b01b1a8b549d677de744e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/android-icon-144x144.png": "9820f9037273cfebb9eefcbe0af2c6d3",
"icons/android-icon-192x192.png": "f19cce59a98019f62a59fc9c9865624c",
"icons/android-icon-36x36.png": "0ba0a3e3afd5726da08d268e026740f1",
"icons/android-icon-48x48.png": "f4b5d05bce323cd784f6b7f35ca8e58e",
"icons/android-icon-72x72.png": "e91089b6ef53fc528ed1398bb43ee2cf",
"icons/android-icon-96x96.png": "623c661e94da419a19f6ffa20b81f4ef",
"index.html": "1883e9dd5ef4c6e6e074d23f5dd48dc8",
"/": "1883e9dd5ef4c6e6e074d23f5dd48dc8",
"main.dart.js": "d7d98b480103c7a35ffaf6ec30e80a2c",
"manifest.json": "5e3bd7d38903a506e0e0759f05046247",
"version.json": "36f2f3207b31cb92133b50657145991e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
