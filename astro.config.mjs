import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://imaginative-tartufo-200266.netlify.app",
  integrations: [preact()]
});