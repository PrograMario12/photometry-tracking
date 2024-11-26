import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Establece el directorio raíz al directorio actual
  build: {
    outDir: resolve(__dirname, 'dist'), // Establece el directorio de salida
  },
  server: {
    port: 8080, // Establece el puerto del servidor de desarrollo
    proxy: {
      '/api': 'http://localhost:5000', // Configura el proxy para las solicitudes API
    },
  },
})