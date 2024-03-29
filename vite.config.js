/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'markedNewtab',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['marked']
    }
  }
})
