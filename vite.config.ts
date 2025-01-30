import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            assets: '/src/assets',
            components: '/src/components',
            constants: '/src/constants',
            hooks: '/src/hooks',
            pages: '/src/pages',
            utils: '/src/utils',
        },
    },
    test: {
        environment: 'jsdom',
    },
    base: '/museum',
});
