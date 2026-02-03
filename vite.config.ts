import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // 🛡️ SECURITY WARNING: Do not use 'define' to expose secrets to the client bundle.
      // Vite automatically prevents environment variable leakage. Only variables
      // prefixed with 'VITE_' are exposed via import.meta.env.VITE_...
      // The previous 'define' block was removed to prevent accidental leakage of GEMINI_API_KEY.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
