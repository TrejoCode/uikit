/**
 * @description Controller for Button component
 */
import { Colors } from "../../tokens";
export declare const useButtonController: () => {
  getIconColor: (
    color: keyof typeof Colors,
    variant: "filled" | "outline",
  ) => string;
  buttonComposed: import("tailwind-variants").TVReturnType<
    {
      color: {
        primary: string;
        "primary-alt": string;
        secondary: string;
        "secondary-alt": string;
        success: string;
        info: string;
        warning: string;
        danger: string;
      };
      disabled: {
        true: string;
      };
      loading: {
        true: string;
      };
      variant: {
        filled: string;
        outline: string;
      };
      size: {
        small: string;
        default: string;
        large: string;
      };
    },
    undefined,
    "text-white transition-all duration-200 ease-out flex items-center border-2 focus:outline-hidden focus:ring-2 font-semibold rounded-xl",
    {
      color: {
        primary: string;
        "primary-alt": string;
        secondary: string;
        "secondary-alt": string;
        success: string;
        info: string;
        warning: string;
        danger: string;
      };
      disabled: {
        true: string;
      };
      loading: {
        true: string;
      };
      variant: {
        filled: string;
        outline: string;
      };
      size: {
        small: string;
        default: string;
        large: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        color: {
          primary: string;
          "primary-alt": string;
          secondary: string;
          "secondary-alt": string;
          success: string;
          info: string;
          warning: string;
          danger: string;
        };
        disabled: {
          true: string;
        };
        loading: {
          true: string;
        };
        variant: {
          filled: string;
          outline: string;
        };
        size: {
          small: string;
          default: string;
          large: string;
        };
      },
      undefined,
      "text-white transition-all duration-200 ease-out flex items-center border-2 focus:outline-hidden focus:ring-2 font-semibold rounded-xl",
      unknown,
      unknown,
      undefined
    >
  >;
};
