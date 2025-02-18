import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        open: true,
    },
    base: '/yuan-component/',
    plugins: [vue()],
})
