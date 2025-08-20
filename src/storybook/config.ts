import { withThemeByDataAttribute } from "@storybook/addon-themes";

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
  Notebook: {
    name: "Laptop",
    styles: {
      width: "1366px",
      height: "768px",
    },
  },
  Desktop: {
    name: "2k Monitor",
    styles: {
      width: "1440px",
      height: "910px",
    },
  },
};

const customDecorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

const customBackgrounds = {
  dark: { name: "Dark", value: "#0B0F1A" },
  light: { name: "Light", value: "#FFFFFF" },
};

export const storybookConfig = {
  customBackgrounds,
  customDecorators,
  customViewports,
};
