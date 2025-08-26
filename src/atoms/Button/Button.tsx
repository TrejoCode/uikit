/**
 * @description <Button> Component
 */

import clsx from "clsx";
import { forwardRef } from "react";
import type { InterfaceButtonProps } from "./Button.model";
import { useButtonController } from "./Button.controller";
import { Icon } from "../Icons";

const Button = forwardRef<HTMLButtonElement, InterfaceButtonProps>(
  (
    {
      children,
      size = "default",
      color = "primary",
      variant = "filled",
      disabled = false,
      loading = false,
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const { buttonComposed, getIconColor } = useButtonController();

    return (
      <button
        ref={ref}
        className={clsx(
          buttonComposed({ size, color, variant, disabled }),
          className,
        )}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {children}
        {loading && (
          <span aria-live="polite" aria-busy="true" className="ml-1">
            <Icon
              icon="loader"
              color={getIconColor(color, variant)}
              size={16}
              className="animate-spin"
            />
          </span>
        )}
      </button>
    );
  },
);

export default Button;
