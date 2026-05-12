// @ts-check
import path from 'path';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

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
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                // 2. Explicitly map the alias
                '@': path.resolve('./src')
            }
        }
    },
    site: 'https://pausegues.vercel.app',
    adapter: vercel(),
    security: {
        checkOrigin: false,
    }
});
