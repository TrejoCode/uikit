/**
 * @description Type definition for Button
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button states, use of cases, using const assertions
 */

const sizes = ['small', 'default', 'large'] as const;
const variations = ['filled', 'outline'] as const;
const colors = ['primary', 'primaryAlt', 'secondary', 'secondaryAlt', 'success', 'info', 'warning', 'danger'] as const;

/**
 * @description Union type of those string literals defined in the array above
 */
type Sizes = typeof sizes[number];
type Variations = typeof variations[number];
type Colors = typeof colors[number];
type ButtonTypeProps = JSX.IntrinsicElements['button']['type'];

/**
 * @description Export available options to match classes
 */
const SizesRecord: Record<Sizes, string> = {
  small: '--small',
  default: '--default',
  large: '--large',
};

const ColorsRecord: Record<Colors, string> = {
  primary: '--primary',
  primaryAlt: '--primaryAlt',
  secondary: '--secondary',
  secondaryAlt: '--secondaryAlt',
  success: '--success',
  info: '--info',
  warning: '--warning',
  danger: '--danger',
};

const VariationsRecord: Record<Variations, string> = {
  filled: '',
  outline: '--outline',
};

/**
 * @description Export Button Props
 */

export interface InterfaceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Inside item
   */
  children: ReactNode;
  /**
   * How large should the button be?
   */
  size: Sizes;
  /**
   * Button theme color
   */
  color: Colors;
  /**
   * Button variant
   */
  variation: Variations;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Custom class
   */
  classNames?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Button type attribute
   */
  type?: ButtonTypeProps;
}

export { SizesRecord, ColorsRecord, VariationsRecord };
