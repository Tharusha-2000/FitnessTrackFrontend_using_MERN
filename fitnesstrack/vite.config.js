// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      dayjs: 'dayjs'
    }
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
    minify: false, // Disable minification
    sourcemap: true,

  },
});