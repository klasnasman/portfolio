import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://klasnasman.com",
  integrations: [
    mdx(),
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "ISerif",
      cssVariable: "--font-iserif",
      fallbacks: ["serif"],
      options: {
        variants: [{ weight: "100 900", style: "normal", src: ["./src/assets/fonts/ISerif.woff2"] }],
      },
    },
  ],
});
