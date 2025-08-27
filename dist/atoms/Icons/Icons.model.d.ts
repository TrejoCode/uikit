/**
 * @description Types for Icon component
 */
import type { AriaAttributes, ReactNode, ReactElement } from "react";
export type TypeLucideProps = ReactElement<{
    size?: string | number;
    color?: string;
}>;
export interface InterfaceIconProps {
    /**
     * Icon component to render
     */
    children: ReactNode;
    /**
     * Width and height
     */
    size?: string | number;
    /**
     * Custom classnames
     */
    className?: string;
    /**
     * Color
     */
    color: string;
    /**
     * Aria label
     */
    ariaLabel?: AriaAttributes["aria-label"];
    /**
     * Aria hidden
     */
    ariaHidden?: AriaAttributes["aria-hidden"];
}
