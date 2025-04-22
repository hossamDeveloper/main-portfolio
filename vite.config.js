import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['react-icons', 'react-type-animation'],
          'utils': ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    target: 'esnext',
    modulePreload: {
      polyfill: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@react-three/fiber', '@react-three/drei', 'framer-motion'],
    exclude: ['@react-three/fiber', '@react-three/drei']
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
