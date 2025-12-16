import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TPS-exp-1---BK/',   // 👈 VERY IMPORTANT (repo name)
})
