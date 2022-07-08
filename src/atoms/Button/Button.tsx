/**
 * @description <Button> Atom Component
 */

import React from 'react';
import classnames from 'classnames';
import { ButtonProps, SizesRecord, ColorsRecord, VariationsRecord } from './types';
import SvgSpinner from '../Svg/Loaders/Spinner';
import styles from './Button.module.css';

const Button = ({
  children,
  size = 'default',
  color = 'primary',
  variation = 'filled',
  disabled = false,
  loading = false,
  classNames,
  onClick,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classnames([
        styles.__button,
        SizesRecord[size],
        ColorsRecord[color],
        VariationsRecord[variation],
        `${variation === 'outline' || variation === 'filled' ? `border-${color}-base` : ''}`,
        `${
          variation === 'outline'
            ? `${
                disabled
                  ? ''
                  : `${styles.__button__transparent} !text-${color}-base hover:bg-opacity-20 focus:bg-opacity-10`
              }`
            : ''
        }`,
        `${disabled ? `!bg-${color}-lighten cursor-not-allowed` : ''}`,
        classNames,
      ])}
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
  );
};

export default Button;
