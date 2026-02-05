## 2025-05-14 - Exposed API Key in Vite Config
**Vulnerability:** The `vite.config.ts` was using the `define` block to bake `GEMINI_API_KEY` into the client-side bundle.
**Learning:** This is a common pattern in templates that can lead to unintentional secret leakage. Even if the variable is not currently used in the codebase, its presence in the config is a security risk as it will be leaked if a developer adds a key to `.env`.
**Prevention:** Avoid using `define` for secrets. Use a backend proxy for sensitive API calls, or use `import.meta.env.VITE_...` with caution (and only for public keys).
