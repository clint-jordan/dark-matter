// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Import site configuration to get the dev port
import { siteConfig } from "./src/site.config";
const port = siteConfig.site.devPort || 4321;

// https://astro.build/config
export default defineConfig({
  server: {
    port: port,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
