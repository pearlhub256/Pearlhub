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
      // 🛡️ Sentinel: Removed 'define' block that exposed GEMINI_API_KEY to the client bundle.
      // Secrets should never be injected into client-side code as they can be easily extracted.
      // If client-side environment variables are needed, use the VITE_ prefix (e.g., VITE_API_URL).
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
