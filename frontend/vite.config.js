import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tps-exp-1-NLC-BK/',   // 👈 VERY IMPORTANT (repo name)
})
