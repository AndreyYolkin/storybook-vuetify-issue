// @ts-nocheck
import type { StorybookConfig } from "@storybook-vue/nuxt";
import {ViteConfig} from "@nuxt/schema";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // viteFinal: (config: ViteConfig) => {
  //   config.plugins = config.plugins || [];
  //   const vuePluginIndex = config.plugins.findIndex((plugin) => {
  //     return plugin.name === "vite:vue";
  //   });
  //   const vuetifyPlugins = config.plugins.filter((plugin) => {
  //     return plugin.name && plugin.name.startsWith("vuetify:");
  //   });
    
  //   config.plugins = [
  //     ...config.plugins.slice(0, vuePluginIndex + 1).filter(
  //       (plugin) => !plugin.name || !plugin.name.startsWith("vuetify:")
  //     ),
  //     ...vuetifyPlugins,
  //     ...config.plugins.slice(vuePluginIndex + 1),
  //   ];
  //   return config
  // }
};
export default config;
