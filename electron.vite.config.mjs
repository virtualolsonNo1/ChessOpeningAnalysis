import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    server: {
      proxy: {
        '/lichess': {
          target: 'https://explorer.lichess.ovh',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/lichess/, '')
        },
        '/evalAPI': {
          target: 'https://lichess.org',
          changeOrigin: true,
          rewrite: (path) => {
            console.log("PROXY HIT: ", path);
            return path.replace(/^\/evalAPI/, '/api/cloud-eval');
          }
        }
      }
    }
  }
})
