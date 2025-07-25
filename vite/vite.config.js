import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    server: {
        host: true
    },
    build: {
        chunkSizeWarningLimit: 2100,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('phaser')) {
                        return 'phaser'
                    }
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                }
            }
        }
    }
})
