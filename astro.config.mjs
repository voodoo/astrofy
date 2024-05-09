import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://voodoo.github.io',
  base: '/astrofy',
  integrations: [mdx(), sitemap(), tailwind()]
});