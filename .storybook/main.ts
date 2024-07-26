import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/theming"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr({ include: "**/*.svg" })],
    });
  },
};
export default config;
