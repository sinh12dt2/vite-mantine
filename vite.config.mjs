import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import ViteCompressionPlugin from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteCompressionPlugin({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
})
