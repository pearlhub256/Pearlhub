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
      // 🛡️ SECURITY WARNING: Never expose secret API keys or credentials
      // via the 'define' property as they will be injected into the client bundle.
      // Use environment variables prefixed with VITE_ only for non-sensitive data.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
