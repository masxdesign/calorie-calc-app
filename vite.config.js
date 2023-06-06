import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2015"
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: "./src/setupTests.js"
  },
  plugins: [
    react(),
    // jsconfigPaths()
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
})