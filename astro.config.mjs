import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://www.frghackers.xyz",
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), image()],
  output: "static"
});