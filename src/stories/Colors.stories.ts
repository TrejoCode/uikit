/**
 * Color Story
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import PreviewColors from "../tokens/Colors.tsx";

const meta = {
  title: "Tokens/Colors",
  component: PreviewColors,
} satisfies Meta<typeof PreviewColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  name: "Colors",
};
