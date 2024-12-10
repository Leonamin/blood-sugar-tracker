import React from 'react';
import { cn } from "@/lib/utils";

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ checked = false, disabled = false, onCheckedChange, className, ...props }, ref) => {
    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        disabled={disabled}
        ref={ref}
        onClick={handleClick}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          checked ? "bg-secondary hover:shadow-secondaryShadow active:shadow-secondaryShadow" : "bg-disabled hover:shadow-tertiaryShadow active:shadow-tertiaryShadow",
          disabled && "opacity-40 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-inverse transform transition-transform",
            checked ? "translate-x-5" : "translate-x-1"
          )}
        />
      </button>
    );
  }
);

ToggleButton.displayName = "ToggleButton";

export { ToggleButton };