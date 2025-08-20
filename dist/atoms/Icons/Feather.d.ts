/**
 * @description Custom Feather icon wrapper
 */
import React from "react";
import type { TypeFeatherProps } from "./Icons.model";
declare const Feather: ({
  icon,
  size,
  ...rest
}: TypeFeatherProps) => React.ReactElement;
export default Feather;
