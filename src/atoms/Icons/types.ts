/**
 * Type definition for Icon
 */

import { icons } from './icons';

export type IconType = keyof typeof icons;

/**
 * Size properties
 */
export const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20] as const;
type Sizes = typeof sizes[number];

export const SizesRecord: Record<Sizes, string> = {
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
};

export interface IconProps {
  /**
   * Icon component
   */
  icon: IconType;
  /**
   * How large should the Checkmark be?
   */
  size?: Sizes;
  /**
   * Fill property classname
   */
  fillClassName?: string;
  /**
   * Stroke property classname
   */
  strokeClassName?: string;
  /**
   * Add animate spin
   */
  spin?: boolean;
}
