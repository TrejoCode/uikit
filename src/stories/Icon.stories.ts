/**
 * Icon Story
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { iconNames } from "lucide-react/dynamic";
import Icon from "../atoms/Icons/Icon";
import { Colors } from "../tokens";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: iconNames,
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
    icon: "activity",
    color: Colors.primary.base,
  },
};

export const Size: Story = {
  args: {
    icon: "anchor",
    size: 128,
    color: Colors.secondary.base,
  },
};
