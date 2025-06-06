import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio__V.1/',  // This *must* match your GitHub repo name EXACTLY, including case
  plugins: [react()]
})
