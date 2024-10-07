'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7e1e957cb51b4c16de6e154c09cdb7c1",
".git/config": "1574ccc15e7db878ea5ff50ef8fd8edd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a0515a8fabb8fbd5dca7854ced656e58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd22c7ea2b7cab2240fdea37300c4bb2",
".git/logs/refs/heads/main": "7fa61c9dcf76460b71abbc6497f807a2",
".git/logs/refs/remotes/origin/main": "c0ee3b960eddaac97bc3dd1ecaf65f9d",
".git/objects/07/8f6c90c4279e9bf4881826855eb861c9651b93": "6aa6b649ed3ea2e46e7119c385642bba",
".git/objects/09/4bb5bc7b68af53412c5e3d6043a47fa0bac9e5": "e9a94756d84d032862ced6f9b81763d7",
".git/objects/09/81c5e21b275add95ff7b1a94da542391b16b02": "992ed4e7668e504ffcf4bc2e3bea21de",
".git/objects/0c/bc43a7d0f4827f231e0548ff2c848eeb2e3758": "fbd77964bd3b2dd4571f3cf36ef2de70",
".git/objects/10/7de5d91a681444a3be8f2313be89f68983df95": "aa203e17ab6ee87f658377fc90a010e6",
".git/objects/15/604c8779989a6ce6c57d88ca5a319b098d45be": "34fec0f0673b67c741cf24f26d4c73fe",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "ed5b3a67de7b9918ff85831f7f47a0ae",
".git/objects/16/70b692f7ba1ed0120561e75c8255c72cd1fa49": "fd1dfbce42e4898cf56fc1983e545577",
".git/objects/17/a1d45620db14720fc53d661ac349b2abf73025": "3b5cfcd51a7f76d0d9583cb3a4fc5885",
".git/objects/18/f481613a2ee4996d1b982bbae3f6f2bc30ac0a": "4c125c4e723b7f78da5cc6fd5c60e040",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "975b2f22d16352b7079bdc7e782541b7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "d0fd8dae38f25b016ad3c97adc6687bb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "9fa371a1c5b7c62935038b95ef3ddb53",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "813576d1dd82cce8066756375a7794b3",
".git/objects/2c/c56f6c76a9e9a0c3b7b0dbcaf5858d53517b78": "daff44d4cf5b5af97058ee63c99b0c6e",
".git/objects/2c/d29fb499094e48a9c88351a6f91876f134b4f9": "11bfd7ffd794c478946606ba6c2090c7",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "5a18345217d80dc396926b4edba423a1",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "cefb98dcae0301097bc465deeeb72772",
".git/objects/36/febb90b1cb3bdb58ae8f6aaed34737bc1858bb": "5dfc0942120c7a113c714a992f8e9dcb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "18afdd808b7e0b924a0e7474cebad727",
".git/objects/3f/8bba346ef7fffc338983658cfbbecc01e2c652": "57a33000cf753441aed8b6693a65be9b",
".git/objects/53/0a88100209f3ad5e3ad3a744b720d436e8996f": "f1c2db6b2f0a927bb3ec550b3928de2c",
".git/objects/53/84bac3319be6756de80b10cbccccded3c4a74a": "04a60e883689abf1eed022eebb957be2",
".git/objects/57/a08bac34a8acdfe15f422ed03e8b2bd68b007d": "72803ee1e8efb7bb2c2c56f92e2e5a6d",
".git/objects/59/1063da19c057a7d217046842cbfe33d29e6b9d": "0ba148fff61137f560c9d9e691774fcb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "723518870f572469cbf8e6b92bb068d1",
".git/objects/59/a9f4681fd068505bc0e45cea5839cf5f52089c": "01c53a7157d1b6a60b1c1630185851d7",
".git/objects/5b/98d86cdaad339d70ac5bacb76cd6f9775539c3": "6f57798a07e7da4a6636350a8529e0fb",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "4ccf3b943ce4fc33f3762d7141ca1cbd",
".git/objects/62/f7320f7858160a8ff87d190cda8e7e55fc791a": "25a080596b25c190b823f0b94c1842eb",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "bf987c1ae262027b078fd45af68c1f12",
".git/objects/66/8da4921719c35e47cb7dcb084b9efa18694be7": "be02bcbf792183391a9e4bf17dc1fdd2",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "b50f588db271241350fd6f4973fb90f2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "f1341a25d22b4a8e5f9c0241d202a781",
".git/objects/71/c5b79342dbbbf553ae0c280dfe03f6365a1613": "7020e6b675fa2573abd520e5e6ddd64e",
".git/objects/75/67321a882bdea722f47dfab9884b2403c87f18": "8e65a194283b9bd01e2df8358e40fb58",
".git/objects/75/b8267e5b5a8460ddc5cd347cb7c6be5fc17f87": "99cd747353f44052c6540967ef950694",
".git/objects/77/a83ffe67ca8aa45ae52b3930d563680c2b86b5": "9f0f68a16535673524dca1c8c74c2e69",
".git/objects/7a/548a95cb5d55939758bd85bf9ce07b835304db": "f5682d869a3822b1394f9086068ea244",
".git/objects/7c/f518934445d5b42a8c85cabade9e9393514fb1": "b60efea8e34a0ba4c07674ceea4d2e64",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "f88c3e8f69490491359c01fdfbf4dea9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "2d2bdf59a2e4b0485d9cb0a96c246b66",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "cc171eda59b2198bcfb662da9c3ed257",
".git/objects/90/caabd81e1706c807d2a3c1dc213fc381154025": "21d0f58cb21c0c92ae75d23162351c75",
".git/objects/95/ca9bd609ae6b280b8b07a07561fee2c646b6ae": "7855da1f0ee7fd63107ae2eed51b4101",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "e0aee1a764d4e79300d1392e0233ed7e",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "d22b06d1177b339b47c4b8761c258777",
".git/objects/9f/715acc46fe38e0ca22755b966c52cecd5d4def": "ec4d04c8b278b8ad9c9bb83aabb532bc",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "baba46f1751ee84f211ae05f07de4d9c",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "9651e36cb0478699afe6d471b93c47b4",
".git/objects/a8/1b9e1a83a2fcb69be254581b4d59e77d59d65e": "69bb37c56b60748a2a08e960bc1c0ffd",
".git/objects/b0/3f1aab534c11f12782c21b3e19423b3ffe8a08": "6b875ccc1a16ea6592e1dc9030ffdb13",
".git/objects/b2/11fce0d273c685d1a87fbb627857c60a561195": "43e8e2b8d76fd9356a1685b6ce8acafd",
".git/objects/b3/a3f487d90df2d7a025c575424701c1ab406ae1": "9d84eea4a956ce7b256f4d16ecbb4e9a",
".git/objects/b4/8227b0ff7e3526ab72f21a5af96a637d0f32df": "f8e616ec1adc4106215a568f5b1ca3a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/b9/5d3e8bc590e4862d8959d1af888e4cc1a897ad": "4344007d46553b9a44b364890694d526",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "e1b2348eb33c03f0835c928d4c9b65f8",
".git/objects/bc/96962d812c36f5bb5d3e7e2b908528ab851161": "7ed315f100002c02240644c583317d47",
".git/objects/bc/9f944a7326b57c01d8a78167604a927351ebc6": "9cff3597b10f3627df913aed648bcc5e",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "d91c1b96ca580c0d2bba5d779b2866c5",
".git/objects/d1/41aec260f38e4a036d9c5d467d97060a940d64": "bf753295b149f48cbc9dafc34307fc3b",
".git/objects/d3/9c094b8a2f93d6ee2b21433740d765c7faabc5": "9734208593089d6d25eb8ec5f178ecdf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/da/f42b9674687c8057ff436e81b237722d6ebc35": "34b865a1da93a1013e1a2e70ad27053b",
".git/objects/e1/7a9cb88e6473651782531693fde2a7addf1d91": "dab01b5fb0da68d637b0ae30c02e5e55",
".git/objects/e8/3357e2dc1fafac28ebb2c5ba14e02269fcdc3d": "f764d61e79b2dbc45e2df08577d614a2",
".git/objects/e9/a62c9d95aac4c2a0fd6343affc4ddd088cfc12": "b4de47731ec22ff7d53dda114d9b4c1f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/f0/053ad9298fb031e47a67f8eff08b23113d9375": "130e77b3f9ed9315b2e79b132c75b923",
".git/objects/f0/28e28f389ae50c2598416bf92c92b63a291297": "5c6a4d63f78d86062fea3927a50ac5b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "ce0d5f3c5914b4007b16ae64cb95ce4e",
".git/objects/f6/ca48a21fffba8530f1e094220c9541b5f6bedf": "a45fa27bf3a6b7d5733167cf69d578dc",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "6494028056a134dfea193e511bf7bcd3",
".git/refs/heads/main": "23502e418031db01a99367c97f268e6d",
".git/refs/remotes/origin/main": "23502e418031db01a99367c97f268e6d",
"assets/AssetManifest.bin": "688eb8f714b99b29e6dc8acb5e62ad47",
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
"flutter_bootstrap.js": "9db91e61559032764c72354dbe749d8e",
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
