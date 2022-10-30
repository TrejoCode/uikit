/**
 * @description Custom Feather icon wrapper
 */

import React from 'react';
import * as Fi from 'react-feather';
import { IconProps } from 'react-feather';
import { Ficons } from './types';

interface InterfaceProps extends IconProps {
  icon: Ficons;
}

const Feather = ({ icon, size, color, ...rest }: InterfaceProps): JSX.Element => {
  const Icono = Fi[String(icon)];
  return <Icono size={size} color={color} {...rest} />;
};

export default Feather;
