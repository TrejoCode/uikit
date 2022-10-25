/**
 * @description <Button> Atom Component
 */

import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { InterfaceButtonProps, SizesRecord, ColorsRecord, VariationsRecord } from './types';
import SvgSpinner from '../Svg/Loaders/Spinner';

const Button = forwardRef<HTMLButtonElement, InterfaceButtonProps>(
  (
    {
      children,
      size = 'default',
      color = 'primary',
      variation = 'filled',
      disabled = false,
      loading = false,
      classNames,
      onClick,
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      className={classnames(
        'tc-button',
        SizesRecord[size],
        ColorsRecord[color],
        VariationsRecord[variation],
        {
          '--transparent': variation === 'outline' && !disabled,
          [`text-${color}-base`]: variation === 'outline' && !disabled,
        },
        classNames
      )}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
      {loading && (
        <div className="ml-2">
          <SvgSpinner size={4} color={`${variation === 'outline' ? color : 'white'}`} />
        </div>
      )}
    </button>
  )
);

export default Button;
