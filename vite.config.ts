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
      /*
       * SECURITY WARNING: Do not use the 'define' block to expose sensitive
       * environment variables (like API keys) to the client-side bundle.
       * This is a frontend-only application, and any secrets defined here
       * will be visible in the public source code.
       */
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
