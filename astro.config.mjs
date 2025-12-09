// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation",
      logo: {
        light: "./src/assets/chicken-logo-light.svg",
        dark: "./src/assets/chicken-logo-dark.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/srkirkland",
        },
      ],
      sidebar: [
        {
          label: "JSON Toolkit",
          autogenerate: { directory: "jsontoolkit" },
          collapsed: false,
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "guides/getting-started" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
