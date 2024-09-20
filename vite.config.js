import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/planificador-de-eventos-de-conferencias",
  plugins: [react()],
})
