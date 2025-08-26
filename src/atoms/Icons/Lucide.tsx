/**
 * @description Custom Feather icon wrapper
 */

import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import type { TypeLucideProps } from "./Icons.model";

const Lucide = ({
  icon,
  size,
  ...rest
}: TypeLucideProps): React.ReactElement => {
  return <DynamicIcon name={icon} size={size} {...rest} />;
};

export default Lucide;
