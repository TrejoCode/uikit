/**
 * @description Main Storybook loader
 */

const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-outline",
    "storybook-tailwind-dark-mode",
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
