import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../atoms/Button/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "primary",
    variant: "filled",
  },
};

export const PrimaryAlt: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "primary-alt",
    variant: "filled",
  },
};

export const Secondary: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "secondary",
    variant: "filled",
  },
};

export const SecondaryAlt: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "secondary-alt",
    variant: "filled",
  },
};

export const Success: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "success",
    variant: "filled",
  },
};

export const Info: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "info",
    variant: "filled",
  },
};

export const Warning: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "warning",
    variant: "filled",
  },
};

export const Danger: Story = {
  args: {
    children: "Conocer más",
    size: "default",
    color: "danger",
    variant: "filled",
  },
};
