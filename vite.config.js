// micro-auth-app/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'micro_auth_app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthScreen': './src/AuthScreen.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  optimizeDeps: {
    exclude: ['@originjs/vite-plugin-federation']
  },
  build: {
    target: 'esnext'
  },
  server: {
    port: 3001,
    cors: {
      origin: '*' // ou use '*' para permitir todas as origens
    }
  }
});
