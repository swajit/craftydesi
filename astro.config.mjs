// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://swajit.github.io', // Placeholder - will need repo name if not a user site
  base: '/craftydesi', // Placeholder repo name
  integrations: [mdx(), sitemap()],
  output: 'static'
});
