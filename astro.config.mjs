// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'ca',
        locales: ['ca', 'es', 'en'],
        routing: {
          prefixDefaultLocale: false
        }
    },
    vite: {
        plugins: [tailwindcss()]
    }
});
