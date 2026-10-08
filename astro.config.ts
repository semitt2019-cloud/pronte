import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

// โดเมนจริงแก้ที่ src/config.ts (SITE.url) ที่เดียว
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
