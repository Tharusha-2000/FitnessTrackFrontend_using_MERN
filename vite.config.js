


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      dayjs: 'dayjs',
    },
  },
  build: {
    rollupOptions: {
      external: [], // This should be empty unless you want to exclude specific modules
    },
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       dayjs: 'dayjs'
//     }
//   },
//   // build: {
//   //   rollupOptions: {
//   //     external: ['react-router-dom'],
//   //   },
//   //   minify: false, // Disable minification
//   //   sourcemap: true,

//   // },
// });
