/**
 * Icon Story
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import Icon from "../atoms/Icons/Icon";
import { icons } from "../atoms/Icons/Icons.model";
import { Colors } from "../tokens";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    icon: {
      options: icons,
      control: { type: "select" },
    },
    size: {
      control: { type: "number", min: 1 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: "Activity",
    color: Colors.primary.base,
  },
};

export const Size: Story = {
  args: {
    icon: "Anchor",
    size: 128,
    color: Colors.secondary.base,
  },
};
