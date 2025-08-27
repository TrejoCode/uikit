/**
 * Icon Story
 */

import { createElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Activity } from "lucide-react";
import Icon from "../atoms/Icons/Icon";
import { Colors } from "../tokens";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
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
    children: createElement(Activity),
    color: Colors.primary.base,
    size: 256,
  },
};
