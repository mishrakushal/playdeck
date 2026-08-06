// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mishrakushal.github.io',
  base: '/playdeck',
  outDir: './dist',
  trailingSlash: 'ignore',
});
