// รายชื่อทุกหน้าในเว็บ ใช้ให้แอปเก็บไว้ในเครื่อง (เปิดได้ตอนไม่มีเน็ต)
import { LIST_PAGES } from '../data/pages';
import { SALES } from '../data/sales';
import { HOWTO } from '../data/howto';

export const ALL_ROUTES: string[] = [
  '/',
  '/chooser/',
  '/speed-guide/',
  '/ais-shortcodes/',
  '/about/',
  '/app/',
  '/ais-new-sim/',
  '/ais-sim-register/',
  ...LIST_PAGES.map((p) => `/${p.slug}/`),
  ...SALES.map((s) => `/pro/${s.slug}/`),
  ...HOWTO.map((h) => `/ais/${h.slug}/`),
];
