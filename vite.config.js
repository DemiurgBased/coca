import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    root: "./src",
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: "../dist",
    },
    plugins: [
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
});