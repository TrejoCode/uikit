/**
 * @description Controller for Button component
 */

import { tv } from "tailwind-variants";
import { Colors } from "../../tokens";

export const useButtonController = () => {
  const buttonComposed = tv(
    {
      base: "text-white transition-all duration-200 ease-out flex items-center border-2 focus:outline-hidden focus:ring-2 font-semibold rounded-xl",
      variants: {
        color: {
          primary: `bg-primary-base hover:bg-primary-lighten focus:bg-primary-darken focus:ring-primary-lighten focus:border-primary-lighten border-primary-base disabled:bg-primary-lighten`,
          "primary-alt": `bg-primary-alt-base hover:bg-primary-alt-lighten focus:bg-primary-alt-darken focus:ring-primary-alt-lighten focus:border-primary-alt-lighten border-primary-alt-base disabled:bg-primary-alt-lighten`,
          secondary: `bg-secondary-base hover:bg-secondary-lighten focus:bg-secondary-darken focus:ring-secondary-lighten focus:border-secondary-lighten border-secondary-base disabled:bg-secondary-lighten`,
          "secondary-alt": `bg-secondary-alt-base hover:bg-secondary-alt-lighten focus:bg-secondary-alt-darken focus:ring-secondary-alt-lighten focus:border-secondary-alt-lighten border-secondary-alt-base disabled:bg-secondary-alt-lighten`,
          success: `bg-success-base hover:bg-success-lighten focus:bg-success-darken focus:ring-success-lighten focus:border-success-lighten border-success-base disabled:bg-success-lighten`,
          info: `bg-info-base hover:bg-info-lighten focus:bg-info-darken focus:ring-info-lighten focus:border-info-lighten border-info-base disabled:bg-info-lighten`,
          warning: `bg-warning-base hover:bg-warning-lighten focus:bg-warning-darken focus:ring-warning-lighten focus:border-warning-lighten border-warning-base disabled:bg-warning-lighten`,
          danger: `bg-danger-base hover:bg-danger-lighten focus:bg-danger-darken focus:ring-danger-lighten focus:border-danger-lighten border-danger-base disabled:bg-danger-lighten`,
        },
        disabled: {
          true: "cursor-not-allowed",
        },
        loading: {
          true: "pointer-events-none",
        },
        variant: {
          filled: "",
          outline: "bg-transparent",
        },
        size: {
          small: "text-sm py-2 px-4",
          default: "text-base py-3 px-6",
          large: "text-lg py-3 px-7",
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "outline",
          class:
            "text-primary-base hover:bg-primary-lighten/25 focus:bg-primary-darken/25 disabled:bg-primary-lighten/25",
        },
        {
          color: "primary-alt",
          variant: "outline",
          class:
            "text-primary-alt-base hover:bg-primary-alt-lighten/25 focus:bg-primary-alt-darken/25 disabled:bg-primary-alt-lighten/25",
        },
        {
          color: "secondary",
          variant: "outline",
          class:
            "text-secondary-base hover:bg-secondary-lighten/25 focus:bg-secondary-darken/25 disabled:bg-secondary-lighten/25",
        },
        {
          color: "secondary-alt",
          variant: "outline",
          class:
            "text-secondary-alt-base hover:bg-secondary-alt-lighten/25 focus:bg-secondary-alt-darken/25 disabled:bg-secondary-alt-lighten/25",
        },
        {
          color: "success",
          variant: "outline",
          class:
            "text-success-base hover:bg-success-lighten/25 focus:bg-success-darken/25 disabled:bg-success-lighten/25",
        },
        {
          color: "info",
          variant: "outline",
          class:
            "text-info-base hover:bg-info-lighten/25 focus:bg-info-darken/25 disabled:bg-info-lighten/25",
        },
        {
          color: "warning",
          variant: "outline",
          class:
            "text-warning-base hover:bg-warning-lighten/25 focus:bg-warning-darken/25 disabled:bg-warning-lighten/25",
        },
        {
          color: "danger",
          variant: "outline",
          class:
            "text-danger-base hover:bg-danger-lighten/25 focus:bg-danger-darken/25 disabled:bg-danger-lighten/25",
        },
      ],
      defaultVariants: {
        size: "default",
        color: "primary",
      },
    },
    {
      twMerge: false,
    },
  );

  /**
   * Get the color of the icon based on the color and variant of the button
   * @returns {string} The color of the icon
   */
  const getIconColor = (
    color: keyof typeof Colors,
    variant: "filled" | "outline",
  ): string => {
    if (variant === "filled") {
      return "#FFFFFF";
    }
    return Colors[color]?.base || Colors.primary.base;
  };

  return {
    getIconColor,
    buttonComposed,
  };
};
