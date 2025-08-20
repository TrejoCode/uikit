/**
 * @description Custom Feather icon wrapper
 */

import React from "react";
import * as FeatherIcon from "react-feather";
import type { TypeFeatherProps } from "./Icons.model";

const Feather = ({
  icon,
  size,
  ...rest
}: TypeFeatherProps): React.ReactElement => {
  // @ts-expect-error No types for Feather as signatures
  const Icon = FeatherIcon[String(icon)] || FeatherIcon.Activity;
  return <Icon size={size} {...rest} />;
};

export default Feather;
