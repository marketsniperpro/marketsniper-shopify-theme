import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add additional pages here as you create them:
        // features: resolve(__dirname, 'features.html'),
        // pricing: resolve(__dirname, 'pricing.html'),
        // contact: resolve(__dirname, 'contact.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
