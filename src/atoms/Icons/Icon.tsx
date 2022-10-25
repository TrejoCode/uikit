/**
 * @description <Icon> Atom Component
 */

import React from 'react';
import classnames from 'classnames';
import { icons } from './icons';
import { IconProps, SizesRecord } from './types';

const Icon = ({
  icon,
  size = 4,
  fillClassName = 'currentColor',
  strokeClassName,
  spin = false,
  ...props
}: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames(SizesRecord[size], fillClassName, strokeClassName, {
      'animate-spin': spin,
    })}
    {...props}
  >
    <>{icons[icon]}</>
  </svg>
);

export default Icon;
