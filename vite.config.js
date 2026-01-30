import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      }
    },
    copyPublicDir: false
  },
  server: {
    port: 3000
  },
  publicDir: false
})