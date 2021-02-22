/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "44750709b727cf5b75b3d18121f12756"
  },
  {
    "url": "assets/css/0.styles.f91352c9.css",
    "revision": "f6f32956555e0ab3aba3423e86ebac96"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a217283b.js",
    "revision": "a6996f550b5e1f667c820422b4f159d8"
  },
  {
    "url": "assets/js/11.866ff1d8.js",
    "revision": "ba8bc94eb8d51af25c71b23717cb6773"
  },
  {
    "url": "assets/js/12.9d620eec.js",
    "revision": "6249f97476ff79ecab926ad34a9ae1c0"
  },
  {
    "url": "assets/js/13.91c098ea.js",
    "revision": "8a761f8a70d247dc97dcc71203c54dc7"
  },
  {
    "url": "assets/js/14.5446679c.js",
    "revision": "e022161a042538768acdbd12c018430f"
  },
  {
    "url": "assets/js/15.864a5647.js",
    "revision": "62b6e0a9466c10adcf12ae172c1e42b0"
  },
  {
    "url": "assets/js/16.78e25d0b.js",
    "revision": "aa373af33f7a73b257fecf817693f09a"
  },
  {
    "url": "assets/js/2.a6b80c0b.js",
    "revision": "aed2f8e20800f55fcdb5edd6d23f9ef6"
  },
  {
    "url": "assets/js/3.68ddc96b.js",
    "revision": "ae2e01efa2b0ac115b68ea18ae96e4b3"
  },
  {
    "url": "assets/js/4.4b2aca6d.js",
    "revision": "7dae72ac5386ff9fc3aff483736b2f4c"
  },
  {
    "url": "assets/js/5.a54215f3.js",
    "revision": "4c5e72d0f777a5807586ab376ff412a1"
  },
  {
    "url": "assets/js/6.df95adee.js",
    "revision": "d756e9fe361f6b62bbfca7dbce7396cb"
  },
  {
    "url": "assets/js/7.bf66cac2.js",
    "revision": "8db4a2c4d7b4bb74a4a3a41acb7e7ef4"
  },
  {
    "url": "assets/js/8.522d36f9.js",
    "revision": "f92bf66c44bd47aa3c40612cfcd1cf88"
  },
  {
    "url": "assets/js/9.46620079.js",
    "revision": "8ac4798aed93f0f41588462c66316677"
  },
  {
    "url": "assets/js/app.f7c549d0.js",
    "revision": "a5a1514dc6088fe5e295373c434d8d0e"
  },
  {
    "url": "git/index.html",
    "revision": "d9a48fb86082ee53d94c33fe5f074db4"
  },
  {
    "url": "index.html",
    "revision": "ec70df2566a87e43ff399da619c342f9"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "1687282fa7e5a8bbcb9c654cdffd56dc"
  },
  {
    "url": "javascript/utils/index.html",
    "revision": "afffb6b61742fccd73245ef5f5ec82da"
  },
  {
    "url": "javascript/utils/regexp.html",
    "revision": "ee4f44cc30756a51abfc1b0b4a364d8e"
  },
  {
    "url": "logo.jpeg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "nodejs/npm/index.html",
    "revision": "36337e2d836792365eca868335018846"
  },
  {
    "url": "style/css/index.html",
    "revision": "d683b10c33871d9d4179e93b09b77e9b"
  },
  {
    "url": "visual/three/index.html",
    "revision": "40633d64909911a7ecc55709a9d978a7"
  },
  {
    "url": "vue/index.html",
    "revision": "0fd742c500c78d6723bea79869b0185c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
