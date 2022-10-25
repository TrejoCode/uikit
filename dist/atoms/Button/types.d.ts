/**
 * @description Type definition for Button
 */
import { ButtonHTMLAttributes, ReactNode } from 'react';
/**
 * Button states, use of cases, using const assertions
 */
declare const sizes: readonly ["small", "default", "large"];
declare const variations: readonly ["filled", "outline"];
declare const colors: readonly ["primary", "primaryAlt", "secondary", "secondaryAlt", "success", "info", "warning", "danger"];
/**
 * @description Union type of those string literals defined in the array above
 */
declare type Sizes = typeof sizes[number];
declare type Variations = typeof variations[number];
declare type Colors = typeof colors[number];
declare type ButtonTypeProps = JSX.IntrinsicElements['button']['type'];
/**
 * @description Export available options to match classes
 */
declare const SizesRecord: Record<Sizes, string>;
declare const ColorsRecord: Record<Colors, string>;
declare const VariationsRecord: Record<Variations, string>;
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
