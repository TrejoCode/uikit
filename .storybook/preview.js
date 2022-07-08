/**
 * @description Main Storybook Preview configurations
 */

import "../src/styles/tailwind.css";

const customViewports = {
  Android: {
    name: "Android",
    styles: {
      width: "360px",
      height: "700",
    },
  },
  iPhone: {
    name: "iPhone",
    styles: {
      width: "375px",
      height: "700",
    },
  },
  iPad: {
    name: "iPad",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  iPadPro: {
    name: "iPad Pro",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  MacbookAir: {
    name: "Macbook Air",
    styles: {
      width: "1280px",
      height: "768px",
    },
  },
  Laptop: {
    name: "Laptop",
    styles: {
      width: "1366px",
      height: "768px",
    },
  },
  LaptopHD: {
    name: "Laptop Full HD",
    styles: {
      width: "1440px",
      height: "910px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
};
