/**
 * @description Main Storybook loader
 */

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-outline",
    "storybook-tailwind-dark-mode",
    "storybook-css-modules-preset",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
