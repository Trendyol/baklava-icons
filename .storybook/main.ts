import { StorybookConfig } from "@storybook/web-components-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

export const title = "Baklava Icons";

const config: StorybookConfig = {
  stories: ["../docs/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
  ],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr({ include: "**/*.svg" })],
    });
  },
};

export default config;
