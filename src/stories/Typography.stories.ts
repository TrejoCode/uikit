/**
 * Icon Story
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import Typography from "../tokens/Typography";

const meta = {
  title: "Tokens/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  name: "Typography",
};
