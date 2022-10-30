/**
 * Type definition for Icon
 */
import { icons } from './icons.types';
export declare type Ficons = typeof icons[number];
export interface IconProps {
    /**
     * Feather icon component name
     */
    icon: Ficons;
    /**
     * How large should the Checkmark be?
     */
    size?: string | number;
    /**
     * Add animate spin
     */
    color?: string;
    /**
     * Custom classnames
     */
    className: string;
}
