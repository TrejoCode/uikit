/**
 * @description <Icon> Component
 */

import React from "react";
import type { InterfaceIconProps } from "./Icons.model";
import Feather from "./Feather";
import { Colors } from "../../tokens";

const Icon = ({
  icon,
  size = 32,
  color = Colors.primary.base,
  ariaLabel = undefined,
  ariaHidden = undefined,
  ...props
}: InterfaceIconProps): React.ReactElement => (
  <span role="img" aria-label={ariaLabel} aria-hidden={ariaHidden}>
    <Feather icon={icon} size={size} color={color} {...props} />
  </span>
);

export default Icon;
