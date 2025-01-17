import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to the port you want
    host: '0.0.0.0', // This allows access from the local network; use 'localhost' if you only need local access
}})
