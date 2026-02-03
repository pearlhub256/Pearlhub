## 2025-02-03 - Client-side secret injection via Vite define
**Vulnerability:** Hardcoded/exposed secrets in client-side bundles through Vite's `define` configuration.
**Learning:** Using `define` in `vite.config.ts` to map `process.env` variables (like `GEMINI_API_KEY`) to global constants effectively bakes those secrets into the transpiled Javascript, making them visible to anyone who inspects the network traffic or the bundle.
**Prevention:** Never use `define` to expose sensitive environment variables. Only expose public configuration if absolutely necessary, and prefer using `VITE_` prefixed variables which are explicitly intended for client-side exposure (while still being mindful of what is shared). Sensitive keys should only be used on the server-side or via a backend proxy.
