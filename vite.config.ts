import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/card-manager/', // Debe coincidir EXACTAMENTE con el nombre de tu repo
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
