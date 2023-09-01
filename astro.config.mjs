import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'http://example.com', // URL where there server is hosted
  output: 'hybrid', // Letting Astro know that a part of the page would be static and a part would be dynamic
  integrations: [react()]
});