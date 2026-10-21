// รายชื่อทุกหน้าในเว็บ ใช้ให้แอปเก็บไว้ในเครื่อง (เปิดได้ตอนไม่มีเน็ต)
import { LIST_PAGES } from '../data/pages';
import { SALES } from '../data/sales';
import { HOWTO } from '../data/howto';
import { POSTS } from './blog';
import { LUCKY } from '../data/lucky';
import { AIS } from '../data/ais';
import { NEW_SIM } from '../data/newsim';
import { MY_STYLE } from '../data/mystyle';

export const ALL_ROUTES: string[] = [
  '/',
  '/chooser/',
  '/speed-guide/',
  '/ais-shortcodes/',
  '/about/',
  '/app/',
  '/ais-new-sim/',
  '/ais-my-style/',
  '/ais-sim-register/',
  '/blog/',
  '/ber-mongkol/',
  '/ber-mongkol/check/',
  '/ber-mongkol/pairs/',
  '/ber-mongkol/sum/',
  '/students/',
  '/games/',
  '/travel/',
  '/esim-travel/',
  '/phone-5g/',
  '/iqiyi/',
  '/data-calculator/',
  ...LIST_PAGES.map((p) => `/${p.slug}/`),
  ...SALES.map((s) => `/pro/${s.slug}/`),
  ...HOWTO.map((h) => `/ais/${h.slug}/`),
  ...POSTS.map((p) => `/blog/${p.slug}/`),
  ...AIS.map((p) => `/packages/${p.code}/`),
  ...NEW_SIM.map((p) => `/packages/${p.code}/`),
  ...MY_STYLE.map((p) => `/packages/${p.code}/`),
  ...LUCKY.map((n) => `/ber-mongkol/${n.num}/`),
];
