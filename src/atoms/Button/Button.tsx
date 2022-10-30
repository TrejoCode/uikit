/**
 * @description <Button> Atom Component
 */

import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { InterfaceButtonProps, SizesRecord, ColorsRecord, VariationsRecord } from './types';
import { Icon } from '../Icons';

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
  ): JSX.Element => {
    /**
     * Generate all icons classnames states
     */
    const getIconClassNames = (): string =>
      classnames({
        'fill-white': variation === 'filled',
        [`fill-${color}-base`]: variation === 'outline',
      });

    return (
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
          <span aria-live="polite" aria-busy="true" className="ml-1">
            <Icon icon="Loader" size={16} className={classnames(getIconClassNames(), 'animate-spin')} />
          </span>
        )}
      </button>
    );
  }
);

export default Button;
