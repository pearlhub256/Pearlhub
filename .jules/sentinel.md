## 2026-02-01 - [Secret Exposure in Vite Configuration]
**Vulnerability:** The `vite.config.ts` was using the `define` property to inject `GEMINI_API_KEY` into the global `process.env` object on the client-side.
**Learning:** Even if a secret is not explicitly used in the source code, defining it in Vite's `define` configuration makes it part of the build process and potentially leaks it into the client-side bundle if not carefully managed. It also creates a "gun on the mantelpiece" where any future code (or dependency) could accidentally log or expose it.
**Prevention:** Never use `define` to expose sensitive keys. Use `VITE_` prefixed environment variables only for non-sensitive public keys, and handle sensitive operations on the server-side.
