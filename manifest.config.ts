import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "CRXJS from scratch",
  version: "1.0.0",
  action: {
    default_popup: "src/contexts/action/index.html",
  },
  background: {
    service_worker: "src/contexts/background/main.ts",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/contexts/content-scripts/main.ts"],
    },
  ],
  permissions: [],
});
