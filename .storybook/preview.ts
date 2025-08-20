/**
 * @description Storybook preview configuration
 */

import type { Preview } from "@storybook/react-vite";
import { storybookConfig } from "../src/storybook/config";
import "../src/styles/tailwind.css";

const preview: Preview = {
  decorators: storybookConfig.customDecorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: storybookConfig.customViewports,
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Tokens", "Atoms"],
      },
    },
    backgrounds: {
      options: storybookConfig.customBackgrounds,
    },
  },
};

export default preview;
