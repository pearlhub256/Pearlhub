## 2025-05-15 - Exposure of Secret API Keys via Vite Define

**Vulnerability:** The `vite.config.ts` was using the `define` property to inject `GEMINI_API_KEY` directly into the global scope of the client-side bundle. This makes the secret key accessible to anyone visiting the site by inspecting the source code or using the browser console.

**Learning:** Vite's `define` property is intended for defining global constants at build time. However, any value placed here is statically replaced in the compiled code, making it unsuitable for secrets. The pattern was likely used to make the key available to the frontend, but it failed to account for the public nature of client-side code.

**Prevention:** Never use Vite's `define` property for secrets. For frontend applications that require secrets, use a backend proxy or serverless functions to interact with sensitive APIs. Only expose non-sensitive environment variables to the frontend using the `VITE_` prefix, and even then, only if they are not secrets.
