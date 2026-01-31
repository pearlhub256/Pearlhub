## 2026-01-31 - Insecure Secret Exposure via Vite `define`

**Vulnerability:** Sensitive API keys were being injected into the client-side bundle using Vite's `define` configuration.
**Learning:** Using `define` to replace `process.env` variables bakes the values directly into the compiled JavaScript, making them publicly visible in the browser. Even if the variables are unused in the source code, their presence in `vite.config.ts` creates a risk of accidental exposure if they are ever added to the environment.
**Prevention:** Avoid using `define` for secrets. Use Vite's built-in `import.meta.env` with the `VITE_` prefix for non-sensitive public configuration, and keep sensitive operations (and their keys) on the server side.
