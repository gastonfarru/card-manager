import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/card-manager/' // ✅ Debe coincidir exactamente con tu repo
})
