if (!self.define) {
  let e,
    s = {};
  const n = (n, c) => (
    (n = new URL(n + ".js", c).href),
    s[n] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, t) => {
    const i = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[i]) return;
    let a = {};
    const f = e => n(e, i),
      r = { module: { uri: i }, exports: a, require: f };
    s[i] = Promise.all(c.map(e => r[e] || f(e))).then(e => (t(...e), a));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts("worker-nIy7c-EfNPRJ63dL2f59U.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/static/chunks/23-c31cdcfc7d0be421.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/35.03ae917f238a8966.js", revision: "03ae917f238a8966" },
        { url: "/_next/static/chunks/479ba886-d36c0fbc16e78a93.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/5e22fd23-65b714831f3f873d.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/643-32ee8c774adb4a52.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/8e1d74a4-bebd92db0a570707.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/91-5f1f15bb0e3cf554.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/927-8ebabf457cd4e2fe.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/9c4e2130-54bb3241536eff0b.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/app/(home)/error-6980fbf6bbbb1157.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/app/(home)/page-5cf82b943a7f133a.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/app/_not-found/page-d5bf2e071304914f.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/app/auth/page-4582041be3980d47.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/app/layout-19092672d81956f7.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/f97e080b-ec6f55512076540a.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/fc2f6fa8-c4c3fa46e63befc6.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/fd9d1056-c6150bb38bb0cf44.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/framework-f66176bb897dc684.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/main-77a19428ecc75432.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/main-app-a0219f622609a497.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js", revision: "79330112775102f91e1010318bae2bd3" },
        { url: "/_next/static/chunks/webpack-3dd1ddfc4f7859fb.js", revision: "nIy7c-EfNPRJ63dL2f59U" },
        { url: "/_next/static/css/7450d6bd8e4e6089.css", revision: "7450d6bd8e4e6089" },
        { url: "/_next/static/media/26a46d62cd723877-s.woff2", revision: "befd9c0fdfa3d8a645d5f95717ed6420" },
        { url: "/_next/static/media/55c55f0601d81cf3-s.woff2", revision: "43828e14271c77b87e3ed582dbff9f74" },
        { url: "/_next/static/media/581909926a08bbc8-s.woff2", revision: "f0b86e7c24f455280b8df606b89af891" },
        { url: "/_next/static/media/6d93bde91c0c2823-s.woff2", revision: "621a07228c8ccbfd647918f1021b4868" },
        { url: "/_next/static/media/97e0cb1ae144a2a9-s.woff2", revision: "e360c61c5bd8d90639fd4503c829c2dc" },
        { url: "/_next/static/media/a34f9d1faa5f3315-s.p.woff2", revision: "d4fe31e6a2aebc06b8d6e558c9141119" },
        { url: "/_next/static/media/df0a9ae256c0569c-s.woff2", revision: "d54db44de5ccb18886ece2fda72bdfe0" },
        { url: "/_next/static/nIy7c-EfNPRJ63dL2f59U/_buildManifest.js", revision: "2ec694eb52ae4f523f265a46bae4d768" },
        { url: "/_next/static/nIy7c-EfNPRJ63dL2f59U/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
        { url: "/icon512_maskable.png", revision: "9c8774ec1639c10842f9b317bbdddcf8" },
        { url: "/icon512_rounded.png", revision: "59078c9c7b49e676d1de4f4d1fe72aa3" },
        { url: "/line.png", revision: "4c2db9268c3c630d85eade37ec7c90a2" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/og.png", revision: "bfe76bd9b598f76479d387b399cf2967" },
        { url: "/profile.jpeg", revision: "9a3314725fa0d5f59e1af0267e6581ee" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: n, state: c }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET",
    );
});
