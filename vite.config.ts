import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User site: https://juliahuynhh.github.io/ (repo juliahuynhh.github.io)
  base: '/',
})
