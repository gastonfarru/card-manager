import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/card-manager/', // Cambia 'card-manager' por el nombre de tu repo
})
