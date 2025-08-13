import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.config.ts";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
  build: {
    rollupOptions: {
      input: {
        action: "src/contexts/action/index.html",
        background: "src/contexts/background/main.ts",
        content: "src/contexts/content-scripts/main.ts",
      },
    },
    outDir: "dist",
    sourcemap: true,
  },
});
