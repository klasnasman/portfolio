import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://klasnasman.com",
  integrations: [react()],
  prefetchAll: true,
});
