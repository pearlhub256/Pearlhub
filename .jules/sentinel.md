## 2024-08-15 - Vite Config Exposes API Key

**Vulnerability:** A hardcoded `GEMINI_API_KEY` was exposed to the client-side bundle through the `define` property in `vite.config.ts`.

**Learning:** The Vite configuration file was directly embedding an environment variable into the client-side code. This makes the secret key publicly accessible in the browser, posing a significant security risk. The key was unused, but its presence was a critical vulnerability.

**Prevention:** Regularly audit `vite.config.ts` and similar build configuration files. Ensure that the `define` property or any other mechanism for injecting environment variables is never used for secrets. All sensitive keys should be handled exclusively on the server-side.
