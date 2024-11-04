import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Use the backend URL for production
      '/api': {
        target: process.env.NODE_ENV === 'production' ? 'https://your-backend-service.onrender.com' : 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
