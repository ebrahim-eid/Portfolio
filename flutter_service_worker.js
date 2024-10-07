'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "688eb8f714b99b29e6dc8acb5e62ad47",
"assets/AssetManifest.bin.json": "9bbd7b7ae5b435623b507407dd89cea6",
"assets/AssetManifest.json": "87228d2ce1c3a2f76a08d221d96ebad5",
"assets/assets/cv.pdf": "3402caa984dac47c21d96830fa828b38",
"assets/assets/fonts/MochiyPopPOne-Regular.ttf": "f39b2f37fbc755e2144018ccaa68195c",
"assets/assets/icons/apple.png": "5cfb2065c624571a84bccd984d3b6063",
"assets/assets/icons/computer.png": "b78fb103c7b2aad3034938b1b3fece56",
"assets/assets/icons/github.png": "2dc32ed64c29cc81810431e55f9df5b5",
"assets/assets/icons/icons8-android-50%2520(1).png": "4f917f91ac87a78d2f1643b996db3d4b",
"assets/assets/icons/icons8-android-50.png": "c5a4834c1b6b123a4ca6da3d76f2937d",
"assets/assets/icons/icons8-css3-48.png": "9d089bd0b10be9772b151c76fabe85ca",
"assets/assets/icons/icons8-dart-48.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/icons/icons8-flutter-48.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/icons/icons8-html5-48.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/icons/icons8-java-48.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/icons/icons8-javascript-48.png": "d8b359bb45cbe32632e8fc7901b27615",
"assets/assets/icons/icons8-python-48.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/icons/linkedin.png": "716de11483ca6e14dd90c4e4c0ecee28",
"assets/assets/icons/world-wide-web.png": "af348e56b44109435b92b9c434fcb1b1",
"assets/assets/icons/youtube.png": "00613561c89ede6dec3311e778f83a60",
"assets/assets/images/google-maps.png": "e87e882c2659b4fadf8fad828894c749",
"assets/assets/images/hema.png": "e9ee107f056a4223e8d4ac63f1b41860",
"assets/assets/images/quran.png": "72ba6a3841f4cbafad782d9e8ae332d9",
"assets/assets/logo/I.png": "9fa022998fb38d809096b187dd2b376e",
"assets/assets/logo/logo.png": "4870116cd92b3c7446e368a6383fcf84",
"assets/assets/map/1.png": "23f4e5a18a8a8a05006224de72006bb9",
"assets/assets/map/2.png": "3500eb3d02d89b15213a1ff8d3da5fa7",
"assets/assets/quran/1.png": "c156df18dc6c66a16041808ada87a3b9",
"assets/assets/quran/2.png": "daab8734b90cbc7567ace16806d4539a",
"assets/assets/quran/3.png": "17d2f2f81611c3dbf35e33354a5a93f7",
"assets/assets/shop/1.png": "e07a1f891d97d33266e73cdbd65abb09",
"assets/assets/shop/2.png": "f076f99c6ab42918c654104a5dd7ba1f",
"assets/FontManifest.json": "d48d37fe98e89a33e778ae4025561252",
"assets/fonts/MaterialIcons-Regular.otf": "2ee1018b7a5bd7997d0d6f4b598901d8",
"assets/NOTICES": "13806465722b172009924a5f1bd6f901",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "11cea28dc45910371f4a662468e38501",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "00001485e06a907e4eb855983399e04b",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
