import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), '')
  const raw = (process.env.VITE_BASE_PATH || fileEnv.VITE_BASE_PATH || '/').trim() || '/'
  const base = raw.endsWith('/') ? raw : `${raw}/`

  return {
    base,
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  }
})
