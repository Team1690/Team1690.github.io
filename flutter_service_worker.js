'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "935f00a945c3c1a8568eb8ece4aa0adf",
".git/config": "5f5f570c56261297c49e5bd3f43187a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c33f2137fd197d20ec13b81c04a81912",
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
".git/index": "756002e9a2ec42a6574431b5a16a3cec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd0abf911811a46277f601f7898274f4",
".git/logs/refs/heads/main": "dd0abf911811a46277f601f7898274f4",
".git/logs/refs/remotes/origin/HEAD": "6bd00fa4d461116dd08a5f2d07889965",
".git/logs/refs/remotes/origin/main": "905b60cff66b9256603e2f336510f39e",
".git/objects/01/52a7ba15267c16e50383ca91a805b1c332fa7f": "29b547ed100a9c09674a80eb469bb357",
".git/objects/28/048440194a467ba57ed5b669ef1d8887bc9aa2": "33b56f2fd172f6edb1d3c37b56d3db5e",
".git/objects/2a/342082e4b316b5c5562296adfa736128a9f1de": "ea86aa030ce20ef6d86a796fd4004ad7",
".git/objects/32/1c1d16dcbec5782470c9509a4e1da616cd768a": "705d671d0d057b5425788d4de8fb7099",
".git/objects/32/9e6a4db86942261c7f3858eda7ad290d34bef8": "f3f7893b8cdcab2100816a1d59169211",
".git/objects/5f/4dc48454b80cae7091d5b5ffae3c80e1654310": "c45cd0aa63d61b68c29f7838875d6f59",
".git/objects/62/7fbf3cccba2c329725cc99b12490786b6a40fc": "5e90a730d3ad0aba7136d27fdf8966a9",
".git/objects/9a/eade7de2b2d4e9ea978ea15cade59e6e9a01e0": "7945a5cc12bab64efe51b830929a3b8e",
".git/objects/b1/f02c450a8f4e762885074ea726f1840b1de98e": "59587e30531fd7161dc94aa51f2fb06d",
".git/objects/b9/888523382d185360c82617c4e0ac0943f2999b": "3c6663e78b37b45709fb2e3d5ce53268",
".git/objects/d0/717e794ce24b82b83bdf10a8b7fb28351ea172": "368cc50ff3b011aae6ca7e805456f2ec",
".git/objects/e7/14cc950bd76c0493589c743bc8180dbac5b3ba": "def49b0def0a1b8825474d4fd698504c",
".git/objects/e7/8a6ab0bbb8f1312b3065ab318d0e5044dca527": "cc9abf67bb771d54c2dfc74b02e19eb3",
".git/objects/f3/4595084f814ddab6ee52f46965e256822f61b1": "b89c3e3ee00ea8704b2f70c2675a515f",
".git/objects/f4/364d439940254beae20c79489881e66cdc5f96": "4d4e42336514b3ed4c5e8a4b54315250",
".git/objects/pack/pack-37a332558d979750461a809ad7a47118120c6fc6.idx": "9c87805266075bae9422fb6698f4a794",
".git/objects/pack/pack-37a332558d979750461a809ad7a47118120c6fc6.pack": "e06eac89de54b29aa0de2ff79a93613f",
".git/ORIG_HEAD": "49874b880ef0a08d5c58b2bad6d5e278",
".git/packed-refs": "ad1e47cdbdcbadf0488b00a931b66453",
".git/refs/heads/main": "49874b880ef0a08d5c58b2bad6d5e278",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "49874b880ef0a08d5c58b2bad6d5e278",
"assets/AssetManifest.json": "3534734527e38ff0637affdf798f1faa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/lib/assets/logo.png": "a2349977b7d3fc28ae442f47c1a7d2a8",
"assets/lib/assets/Wheely.png": "7937486791e42e678ed3bb00a9704ff8",
"assets/lib/assets/Wheely3.png": "2131509a3631b0b740bd73a4ba30c42a",
"assets/lib/assets/willi.png": "e76fb092cb690e4c5a214629f5d6ebaf",
"assets/NOTICES": "f1e71a0c565b01b1a8b549d677de744e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/android-icon-144x144.png": "9820f9037273cfebb9eefcbe0af2c6d3",
"icons/android-icon-192x192.png": "f19cce59a98019f62a59fc9c9865624c",
"icons/android-icon-36x36.png": "0ba0a3e3afd5726da08d268e026740f1",
"icons/android-icon-48x48.png": "f4b5d05bce323cd784f6b7f35ca8e58e",
"icons/android-icon-72x72.png": "e91089b6ef53fc528ed1398bb43ee2cf",
"icons/android-icon-96x96.png": "623c661e94da419a19f6ffa20b81f4ef",
"index.html": "5306ba44af3a94ef97851a9df94c5a03",
"/": "5306ba44af3a94ef97851a9df94c5a03",
"main.dart.js": "38b1f02561d51317b51872aaba9f0799",
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
