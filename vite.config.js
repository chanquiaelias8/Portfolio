import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base debe coincidir con el nombre del repo para GitHub Pages:
// el sitio se sirve en https://chanquiaelias8.github.io/Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
