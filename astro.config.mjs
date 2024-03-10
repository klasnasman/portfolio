import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://klasnasman.com",
  scopedStyleStrategy: "class",
  integrations: [react(), mdx()],
});
