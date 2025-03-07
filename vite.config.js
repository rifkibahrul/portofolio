import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/portofolio/", // Ganti 'my-porto' dengan nama repository GitHub-mu
  plugins: [react()],
})
