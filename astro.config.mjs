import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tecnoconsult-srl.it',
  output: 'static',
  server: { port: Number(process.env.PORT) || 4321 },
  integrations: [sitemap()],
});
