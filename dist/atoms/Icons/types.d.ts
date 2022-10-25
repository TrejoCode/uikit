/**
 * Type definition for Icon
 */
import { icons } from './icons';
export declare type IconType = keyof typeof icons;
/**
 * Size properties
 */
export declare const sizes: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20];
declare type Sizes = typeof sizes[number];
export declare const SizesRecord: Record<Sizes, string>;
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
export {};
