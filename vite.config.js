import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host:"0.0.0.0",
    fs:{
      strict: false,
    }
  },
  base: '/resume-builder/', // This is the base path for your application, adjust it as needed
  plugins: [react()],
})