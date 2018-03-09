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
    "revision": "43760db37579e4b0b2d9174ba43ad4a2"
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
    "url": "build/stencil-demo-components/qqb3xarq.es5.js",
    "revision": "b86badbb378d4f3ab6a46109962e536d"
  },
  {
    "url": "build/stencil-demo-components/qqb3xarq.js",
    "revision": "39a460e5ddc582abb9970bf228865522"
  },
  {
    "url": "build/stencil-demo-components/qqb3xarq.sc.es5.js",
    "revision": "723a442b9afdc0cedd1b5e09334d0ae1"
  },
  {
    "url": "build/stencil-demo-components/qqb3xarq.sc.js",
    "revision": "d1438303c04bc6ccb619decfebd76469"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.96yjbqvh.js",
    "revision": "0c54e2deb4bd7b7007f4a989ba77faa4"
  },
  {
    "url": "build/stencil-demo-components/stencil-demo-components.registry.json",
    "revision": "c7b86e12678ebad05e42db4b4625f1fb"
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
    "revision": "f05cd98853f153e4bff8325c111fa732"
  },
  {
    "url": "index.html",
    "revision": "0a97611958cfa3b563984c0010be2853"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
