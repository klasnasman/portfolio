import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://klasnasman.com",
  integrations: [
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
  prefetchAll: true,
});