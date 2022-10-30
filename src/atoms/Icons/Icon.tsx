/**
 * @description <Icon> Atom Component
 */

import React from 'react';
import { IconProps } from './types';
import Feather from './Feather';

const Icon = ({ icon, size = 32, color, ...props }: IconProps): JSX.Element => (
  <span>
    <Feather icon={icon} size={size} color={color} {...props} />
  </span>
);

export default Icon;
