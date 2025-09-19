// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://emp.mgmavlca.com/",

  adapter: cloudflare({
      platformProxy: {
          enabled: true
      },

      imageService: "cloudflare"
  }),

  integrations: [mdx()]
});