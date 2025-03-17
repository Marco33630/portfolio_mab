import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  baseUrl: '/portfolio_mab/',
  plugins: [react()],
})
