import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src"),
      "@components" : path.resolve(__dirname, "./src/components"),
      "@assets" : path.resolve(__dirname, "./src/assets"),
    }
  },
  plugins: [vue()],
})
