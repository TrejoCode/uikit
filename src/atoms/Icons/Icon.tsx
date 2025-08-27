/**
 * @description <Icon> Component
 */

import { isValidElement, cloneElement, Children } from "react";
import type { InterfaceIconProps, TypeLucideProps } from "./Icons.model";
import { Colors } from "../../tokens";

const Icon = ({
  children,
  size = 32,
  color = Colors.primary.base,
  ariaLabel = undefined,
  ariaHidden = undefined,
  ...props
}: InterfaceIconProps) => {
  return (
    <span role="img" aria-label={ariaLabel} aria-hidden={ariaHidden} {...props}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as TypeLucideProps, {
            size,
            color,
            ...(child.props || {}),
          });
        }
        return child;
      })}
    </span>
  );
};

export default Icon;
