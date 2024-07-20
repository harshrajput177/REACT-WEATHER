import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'),
        vendor: resolve(__dirname, 'src/vendor.js')
      },
      output: {
        format: 'es',
        dir: 'dist',
        sourcemap: true,
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      },
      external: ['react', 'react-dom']
    }
  }
})

