## 2024-08-05 - Insecure Vite `define` Configuration Exposes API Keys

**Vulnerability:** The Vite configuration file (`vite.config.ts`) was using the `define` property to directly embed the `GEMINI_API_KEY` into the client-side bundle.

**Learning:** This vulnerability existed because the `define` property in Vite is designed for replacing global constants at build time, and it was mistakenly used to handle a secret key. This makes the key visible to anyone inspecting the built JavaScript files.

**Prevention:** To prevent this in the future, all secret keys must be handled exclusively on the server side. If a client-side application needs to interact with an API that requires a secret key, it should make requests to a backend endpoint that then forwards the request to the API with the key. Never use the Vite `define` property or any other method that exposes secrets to the client-side bundle.
