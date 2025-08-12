// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Import content collections and get the dev port from configuration
import "./src/content.config";
import { siteConfig } from "./src/content.config";
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
