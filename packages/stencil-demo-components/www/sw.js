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
    "revision": "e685eedfb872b3999c495d774b0cc3f3"
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
    "url": "build/stencil-demo-components/stencil-demo-components.96yjbqvh.js",
    "revision": "0c54e2deb4bd7b7007f4a989ba77faa4"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.registry.json",
    "revision": "4059b5ff3ea5201fb447ecd1a86cfa01"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.vwlcpfe5.js",
    "revision": "c6c201edfba9778ef3fe33141b482775"
  },
  {
    "url": "build/stencil-demo-components/t5y2crnh.es5.js",
    "revision": "f822101991f1257ce7d8e602f4f958db"
  },
  {
    "url": "build/stencil-demo-components/t5y2crnh.js",
    "revision": "290e96c2040c47a5c16bf671c70a3752"
  },
  {
    "url": "build/stencil-demo-components/t5y2crnh.sc.es5.js",
    "revision": "e1112d35d637c7078e03819dfe28c893"
  },
  {
    "url": "build/stencil-demo-components/t5y2crnh.sc.js",
    "revision": "9dc1caf123cb561e0b0749cf2b7d23bd"
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
    "revision": "fbcd14f9e4825358cddef5539219731d"
  },
  {
    "url": "index.html",
    "revision": "7febd0aacd957c328423930163c1293f"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
