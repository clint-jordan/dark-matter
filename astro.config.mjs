// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/site.config";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site.site,
  base: siteConfig.site.base,

  server: {
    port: siteConfig.site.devPort || 4321,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    gfm: true,
    smartypants: true,
  }
});
