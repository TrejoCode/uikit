/**
 * @description Types for Icon component
 */
import type { AriaAttributes } from "react";
import type { iconNames } from "lucide-react/dynamic";
export type TypeLucideIcons = (typeof iconNames)[number];
export type TypeLucideProps = {
  icon: TypeLucideIcons;
  size?: string | number;
  color: string;
};
export interface InterfaceIconProps {
  /**
   * Feather icon component name
   */
  icon: TypeLucideIcons;
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
