import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from https://<user>.github.io/PROTOTYPE_DOUBL/
  base: process.env.NODE_ENV === 'production' ? '/PROTOTYPE_DOUBL/' : '/',
})
