import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/card-manager/', // ← Asegúrate de que esto coincida con tu repo
  build: {
    outDir: 'dist'
  }
})
