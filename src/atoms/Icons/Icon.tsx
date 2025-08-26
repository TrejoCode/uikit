/**
 * @description <Icon> Component
 */

import React from "react";
import type { InterfaceIconProps } from "./Icons.model";
import Lucide from "./Lucide";
import { Colors } from "../../tokens";

const Icon = ({
  icon = "activity",
  size = 32,
  color = Colors.primary.base,
  ariaLabel = undefined,
  ariaHidden = undefined,
  ...props
}: InterfaceIconProps): React.ReactElement => (
  <span role="img" aria-label={ariaLabel} aria-hidden={ariaHidden}>
    <Lucide icon={icon} size={size} color={color} {...props} />
  </span>
);

export default Icon;
