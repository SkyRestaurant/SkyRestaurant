// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // site: 'https://skyrestaurant.mk',
  site: 'https://skyrestaurant.github.io',
  // base: '/SkyRestaurant', 
  i18n: {
    defaultLocale: 'mk',
    locales: ['mk', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});