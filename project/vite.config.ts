import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures all asset paths are relative for deployment
  build: {
    outDir: 'dist', // Output directory for the build
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
