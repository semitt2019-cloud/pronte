import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

/** หน้าที่ไม่ใช่เนื้อหา ไม่ให้เข้า sitemap */
function indexable(page: string): boolean {
  try {
    const path = new URL(page).pathname;
    return path !== '/sw.js' && path !== '/sw.js/' && path !== '/404' && path !== '/404/';
  } catch {
    return true;
  }
}

// โดเมนจริงแก้ที่ src/config.ts (SITE.url) ที่เดียว
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: indexable })],
});
