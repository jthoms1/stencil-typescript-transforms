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
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/stencil-demo-components.js",
    "revision": "0f6ef1a9367051793e036107c400aecb"
  },
  {
    "url": "build/stencil-demo-components/0uoj6bzw.es5.js",
    "revision": "3df7b6b7b11c8b8d151a69d7027f71bf"
  },
  {
    "url": "build/stencil-demo-components/0uoj6bzw.js",
    "revision": "44694f41d58b97048fa29ea8f5289fb7"
  },
  {
    "url": "build/stencil-demo-components/0uoj6bzw.sc.es5.js",
    "revision": "faa73e6bcd641734308ae81c9395c3ee"
  },
  {
    "url": "build/stencil-demo-components/0uoj6bzw.sc.js",
    "revision": "b30633245fccf25c8cc742d1b8586cc2"
  },
  {
    "url": "build/stencil-demo-components/eznzprhf.es5.js",
    "revision": "0a275d90ebd1ec0909c6fa928b8d29b0"
  },
  {
    "url": "build/stencil-demo-components/eznzprhf.js",
    "revision": "5a9fcc9b1c36c36a40e9bc871112bd39"
  },
  {
    "url": "build/stencil-demo-components/eznzprhf.sc.es5.js",
    "revision": "35bd3808779a677a93f7c184d4820b12"
  },
  {
    "url": "build/stencil-demo-components/eznzprhf.sc.js",
    "revision": "b1a64ff86c5ac4c411d98ef40b401f0e"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.96yjbqvh.js",
    "revision": "0c54e2deb4bd7b7007f4a989ba77faa4"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.registry.json",
    "revision": "97ff8059b881ed691ca1a3ece3eb9806"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.vwlcpfe5.js",
    "revision": "c6c201edfba9778ef3fe33141b482775"
  },
  {
    "url": "build/stencil-demo-components/yv8qchyc.es5.js",
    "revision": "c37946422d52ac1172c85459a6e339ac"
  },
  {
    "url": "build/stencil-demo-components/yv8qchyc.js",
    "revision": "aa718fbeaa2484611ce32792c2121d70"
  },
  {
    "url": "build/stencil-demo-components/yv8qchyc.sc.es5.js",
    "revision": "c37946422d52ac1172c85459a6e339ac"
  },
  {
    "url": "build/stencil-demo-components/yv8qchyc.sc.js",
    "revision": "aa718fbeaa2484611ce32792c2121d70"
  },
  {
    "url": "host.config.json",
    "revision": "0bb6c5e2526f7710624d2785802819d0"
  },
  {
    "url": "index.html",
    "revision": "969e19fef7221c145204a1e6d644071a"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
