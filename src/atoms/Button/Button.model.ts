/**
 * @description Type definition for Button component
 */

import React from "react";

type TypeSize = "small" | "default" | "large";
type TypeColors =
  | "primary"
  | "primary-alt"
  | "secondary"
  | "secondary-alt"
  | "success"
  | "info"
  | "warning"
  | "danger";
type TypeVariants = "filled" | "outline";

export type TypeUseButtonControllerProps = {
  variant: TypeVariants;
  disabled: boolean;
  size: TypeSize;
  color: TypeColors;
};

export interface InterfaceButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  /**
   * Inside element
   */
  children: React.ReactNode;
  /**
   * How large should the button be?
   */
  size: TypeSize;
  /**
   * Button theme color
   */
  color: TypeColors;
  /**
   * Button variant
   */
  variant?: TypeVariants;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
}
