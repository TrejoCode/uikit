/**
 * @description <Button> Component
 */

import { forwardRef } from "react";
import classnames from "classnames";
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
        className={classnames(
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
              icon="Loader"
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
