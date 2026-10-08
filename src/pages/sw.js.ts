// Service Worker: เก็บทุกหน้าไว้ในเครื่อง เพื่อให้เปิดเว็บได้แม้เน็ตหมด
// ไฟล์นี้สร้างอัตโนมัติตอน build (ได้เป็น /sw.js) — ไม่ต้องแก้เอง
import type { APIRoute } from 'astro';
import { ALL_ROUTES } from '../lib/routes';

export const GET: APIRoute = () => {
  const version = new Date().toISOString(); // build ใหม่ = แคชใหม่ ราคาอัปเดตอัตโนมัติ
  const js = `
const VERSION = ${JSON.stringify(version)};
const CACHE = 'pronte-' + VERSION;
const PAGES = ${JSON.stringify(ALL_ROUTES)};
const STATIC = ['/manifest.webmanifest', '/favicon.svg', '/icons/icon-192.png', '/icons/apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(STATIC);
    const assets = new Set();
    await Promise.all(PAGES.map(async (url) => {
      try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) return;
        await cache.put(url, res.clone());
        const html = await res.text();
        for (const m of html.matchAll(/(?:href|src)="(\\/_astro\\/[^"]+)"/g)) assets.add(m[1]);
      } catch (e) {}
    }));
    await Promise.all([...assets].map((a) => cache.add(a).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('pronte-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // ฟอนต์จาก Google: ใช้ของในเครื่องก่อน
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.open(CACHE).then(async (c) => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); c.put(req, res.clone()); return res; } catch (e) { return Response.error(); }
    }));
    return;
  }
  if (url.origin !== location.origin) return;

  // หน้าเว็บ: ลองโหลดใหม่ก่อน (ราคาล่าสุด) ถ้าไม่มีเน็ตใช้ของในเครื่อง
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const c = await caches.open(CACHE);
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 4000);
        const res = await fetch(req, { signal: ctrl.signal });
        clearTimeout(t);
        if (res.ok) c.put(url.pathname, res.clone());
        return res;
      } catch (e) {
        return (await c.match(url.pathname)) || (await c.match(url.pathname + '/')) || (await c.match('/'));
      }
    })());
    return;
  }

  // ไฟล์อื่น (CSS, รูป): ใช้ของในเครื่องก่อน
  event.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
    return res;
  })));
});
`;
  return new Response(js, { headers: { 'Content-Type': 'application/javascript; charset=utf-8' } });
};
