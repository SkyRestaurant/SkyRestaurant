import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://sezontech.com',
  i18n: {
    defaultLocale: 'mk',
    locales: ['mk', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
