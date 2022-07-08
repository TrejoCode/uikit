/**
 * @description Type definition for Button
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button states, use of cases, using const assertions
 */

const sizes = ['small', 'default', 'large'] as const;
const variations = ['filled', 'outline'] as const;
const colors = [
  'primary',
  'primaryAlt',
  'secondary',
  'secondaryAlt',
  'success',
  'info',
  'warning',
  'danger',
  'white',
  'transparent',
] as const;

/**
 * @description Union type of those string literals defined in the array above
 */
type Sizes = typeof sizes[number];
type Variations = typeof variations[number];
type Colors = typeof colors[number];

/**
 * @description Export available options to match classes
 */
const SizesRecord: Record<Sizes, string> = {
  small: 'text-sm text-white py-2 px-4',
  default: 'text-base text-white py-3 px-6',
  large: 'text-lg text-white py-4 px-8',
};

const ColorsRecord: Record<Colors, string> = {
  primary:
    'bg-primary-base hover:bg-primary-lighten focus:bg-primary-darken focus:ring-primary-lighten focus:border-primary-lighten',
  primaryAlt:
    'bg-primaryAlt-base hover:bg-primaryAlt-lighten focus:bg-primaryAlt-darken focus:ring-primaryAlt-lighten focus:border-primaryAlt-lighten',
  secondary:
    'bg-secondary-base hover:bg-secondary-lighten focus:bg-secondary-darken focus:ring-secondary-lighten focus:border-secondary-lighten',
  secondaryAlt:
    'bg-secondaryAlt-base hover:bg-secondaryAlt-lighten focus:bg-secondaryAlt-darken focus:ring-secondaryAlt-lighten focus:border-secondaryAlt-lighten',
  success:
    'bg-success-base hover:bg-success-lighten focus:bg-success-darken focus:ring-success-lighten focus:border-success-lighten',
  info: 'bg-info-base hover:bg-info-lighten focus:bg-info-darken focus:ring-info-lighten focus:border-info-lighten',
  warning:
    'bg-warning-base hover:bg-warning-lighten focus:bg-warning-darken focus:ring-warning-lighten focus:border-warning-lighten',
  danger:
    'bg-danger-base hover:bg-danger-lighten focus:bg-danger-darken focus:ring-danger-lighten focus:border-danger-lighten',
  white:
    'bg-white hover:bg-danger-lighten focus:bg-danger-darken focus:ring-danger-lighten focus:border-danger-lighten',
  transparent: 'bg-transparent',
};

const VariationsRecord: Record<Variations, string> = {
  filled: 'flex items-center border-2 bg-current focus:outline-none focus:ring',
  outline: 'flex items-center border-2 focus:outline-none focus:ring',
};

/**
 * @description Export Button Props
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
   * Click handler
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
}

export { SizesRecord, ColorsRecord, VariationsRecord };
