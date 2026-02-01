import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      // NOTE: Do not use the 'define' property to expose sensitive API keys
      // or secrets to the client-side bundle. This can lead to security
      // vulnerabilities where keys are leaked in the public JavaScript.
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
