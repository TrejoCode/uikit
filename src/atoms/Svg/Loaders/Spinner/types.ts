/**
 * @description Type definition for SvgSpinner
 */

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24] as const;
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
 * Spinner states, use of cases, using const assertions
 */
export type Sizes = typeof sizes[number];
export type Colors = typeof colors[number];

/**
 * @description Export available options to match classes
 */
const SizesRecord: Record<Sizes, string> = {
  1: 'w-1 h-1',
  2: 'w-2 h-2',
  3: 'w-3 h-3',
  4: 'w-4 h-4',
  5: 'w-5 h-5',
  6: 'w-6 h-6',
  7: 'w-7 h-7',
  8: 'w-8 h-8',
  9: 'w-9 h-9',
  10: 'w-10 h-10',
  11: 'w-11 h-11',
  12: 'w-12 h-12',
  14: 'w-14 h-14',
  16: 'w-16 h-16',
  20: 'w-20 h-20',
  24: 'w-24 h-24',
};

const ColorsRecord: Record<Colors, string> = {
  primary: 'text-primary-base',
  primaryAlt: 'text-primaryAlt-base',
  secondary: 'text-secondary-base',
  secondaryAlt: 'text-secondaryAlt-base',
  success: 'text-success-base',
  info: 'text-info-base',
  warning: 'text-warning-base',
  danger: 'text-danger-base',
  white: 'text-white',
  transparent: 'text-transparent',
};

/**
 * Export Spinner Props
 */
export type SpinnerProps = {
  /**
   * How large should the Spinner be?
   */
  size: Sizes;
  /**
   * Spinner color
   */
  color: Colors;
  /**
   * Custom class
   */
  classNames?: string;
};

export { SizesRecord, ColorsRecord };
