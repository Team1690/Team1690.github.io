'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f0452c299e835cb2c338da1a34515b17",
".git/config": "5f5f570c56261297c49e5bd3f43187a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e38d30439a00f03401bb61ec95b53cc5",
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
".git/index": "9722bcfddacf8bb1089157d73a5e08b4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "558174b484ec48dff772d1af315cc4ec",
".git/logs/refs/heads/main": "558174b484ec48dff772d1af315cc4ec",
".git/logs/refs/remotes/origin/main": "a3520c6f96a1bea3dd875d292bcc9b87",
".git/objects/03/bd4129be5a0c6b906b3f7d240ff9363b227c5c": "b8d50637db9c64a27b7cf57db01e035f",
".git/objects/03/eff57f2dd420866b92c586ac91ee423bdd2d67": "cbb85942dc3c2acbd544bc21c06e226e",
".git/objects/04/a6d0795b873d2ac9518d6c56de3a4afaaa2486": "eefad33af44f874c22c9c69f49daff4b",
".git/objects/09/6956ffd568de47511fe13ade42151e7d9df4db": "87fab3875aed88a778814b48fbf3237e",
".git/objects/22/ee9ec09e8a70605dd7610a85cbaa3b4ff629d4": "2d281da5e3c8e82799e35bc749626896",
".git/objects/23/c6d28c5e3b6abde33b1af36120f24aeb7339ce": "c330ba9bd4ba84552447e7366a919f78",
".git/objects/2e/b10f144e0f58e2372e59e0317b1798f1a854f5": "1c6eebdb27769bf9fc4556ff4c0c61d3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/5c51ae4cd3e679e9e43d1d7985cc8e5d65b5f7": "99378e1d9f509d2854d155d0e64cd148",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/f00d4a74f89c7855cb11a47f81e778b248a9de": "110604defc86b2965e6cfb411879312a",
".git/objects/62/604a3a04f3f194e1ddde2231b0ecd5018bab86": "7d5d89fb665eb0e5e83f6dc23d4d53f8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/721a57a031f778f315a29ba49f4fdac24e1f2a": "42a02881b03bf8e622a57049e8eda213",
".git/objects/7d/0ad501b00ac48c1242866fc8ddf3672067c5d4": "776dba90638aa4556122fdd70baacfe4",
".git/objects/7d/ec56d30abcf13c418cda5d44d736bfcbeae467": "50efb429b0decfc62f785998ec82dbab",
".git/objects/85/604edb5cab7a9fc7ff65e8ed052d1ee6e9060a": "c2f3f03187ff45fbc5fe61923f19e648",
".git/objects/87/f76afb4e7f2d3ebd772ad2eedfae916668b013": "93dbc45b910bec9a58e68409dd99b3d5",
".git/objects/88/372a9a4d52dcf6cbb0fe399db3c3c02f9c6bc9": "a899e5f63d2d4601c4b49b6dc9e9bd76",
".git/objects/89/9526f462141b90d31ce115ba23e0b86b145a28": "892988bab988dab291ec325492190328",
".git/objects/9b/b9786d3c70fa76d08597d49c2d4c7c7c54a0a1": "c845287e047ec37c589e7684d47459b9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/8bb3156494fcf36fcd0dca8f475577cc95f929": "ff2cfb4ae0a7b6615d41e282f49e92bd",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/006867381c9eaf314cff956d50d863ab806041": "cb3f8b7da28e4da1d6d8abb85e790660",
".git/objects/b8/222fd8b5c2d919ec60a3458f34072d812bc2d5": "b3658ac8d87b8ccfc42ca2cc1bd5aecd",
".git/objects/bd/7078a675f35b3c35d3f153c9d4ed8762208d00": "a20ef2de050b242deaf0966bc1a0f74c",
".git/objects/cb/c503f08315ab267b14482371bb9467ae0d04b1": "8781f90f006136370927dd2b993236a9",
".git/objects/d2/00ea3c394fddc5e1c1799a91c8e7041a513f01": "d7780e9a3cf5a993acd3d933ee376e66",
".git/objects/e1/43df90b29dd053a87407663891953e39fd1843": "21ccbb16f955ae5da654f0ddce44b094",
".git/objects/e1/653a0c9e00a74e905986850610c400d2a18a6e": "9c1c99689ba043027098b9b326f0fbd0",
".git/objects/e4/1a0593c42bf8bebcc76e36cef90b7f1b7f2967": "50cd444988985ba96fd79f3002e46088",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/c520538e8ce2223e2850e0d6f245bd24b88b1e": "e77f467e07af08492835df6b806a9316",
".git/objects/ef/21af10b94c8739f6ecc21ac17ba62b0991d203": "1006391af3f03f3091709480631c6d3b",
".git/objects/f7/946ecd9089f87f32f3fdd6ca55417e89261598": "9ae9ad3c7261ad35e00bc2c13cc1af55",
".git/objects/f9/781a8b06baf2c3ec2d4571cb6b99d465cf9546": "86e606df45830cfcd1b5c6753aca3a11",
".git/objects/fd/232baebc3d27e9d8f20f562952ad4c653dbc1e": "04e8aae11f28adcfa0dd2c56516563ce",
".git/ORIG_HEAD": "09344776872b5155e074131fab7d504c",
".git/refs/heads/main": "09344776872b5155e074131fab7d504c",
".git/refs/remotes/origin/main": "09344776872b5155e074131fab7d504c",
"assets/AssetManifest.json": "3534734527e38ff0637affdf798f1faa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/logo.png": "a2349977b7d3fc28ae442f47c1a7d2a8",
"assets/lib/assets/Wheely.png": "7937486791e42e678ed3bb00a9704ff8",
"assets/lib/assets/Wheely3.png": "2131509a3631b0b740bd73a4ba30c42a",
"assets/lib/assets/willi.png": "e76fb092cb690e4c5a214629f5d6ebaf",
"assets/NOTICES": "f1e71a0c565b01b1a8b549d677de744e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/android-icon-144x144.png": "9820f9037273cfebb9eefcbe0af2c6d3",
"icons/android-icon-192x192.png": "f19cce59a98019f62a59fc9c9865624c",
"icons/android-icon-36x36.png": "0ba0a3e3afd5726da08d268e026740f1",
"icons/android-icon-48x48.png": "f4b5d05bce323cd784f6b7f35ca8e58e",
"icons/android-icon-72x72.png": "e91089b6ef53fc528ed1398bb43ee2cf",
"icons/android-icon-96x96.png": "623c661e94da419a19f6ffa20b81f4ef",
"index.html": "f22c0d24ce639c46a1a1ba455c66300c",
"/": "f22c0d24ce639c46a1a1ba455c66300c",
"main.dart.js": "01399263190603b6fed12a40b5724936",
"manifest.json": "30157cccd338713bf633c1ebdcaea6e2",
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
