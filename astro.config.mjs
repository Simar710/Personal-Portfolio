import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://Simar710.github.io',
  base: '/Personal-Portfolio', // Ensure this is correctly set
  integrations: [react()],
});
