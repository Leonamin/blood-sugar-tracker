import React from 'react';
import { cn } from "@/lib/utils";

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  disabled?: boolean;
  handleSize?: 16 | 24;
  onCheckedChange?: (checked: boolean) => void;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ checked = false, disabled = false, handleSize = 16, onCheckedChange, className, ...props }, ref) => {
    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const containerHeight = handleSize + 4; // 2px padding on each side
    const containerWidth = (handleSize + 4) * 1.75; // Maintain proportional width
    
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
          "relative inline-flex items-center transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          checked ? "bg-secondary hover:shadow-secondaryShadow active:shadow-secondaryShadow" : "bg-disabled hover:shadow-tertiaryShadow active:shadow-tertiaryShadow",
          disabled && "opacity-40 cursor-not-allowed",
          className
        )}
        style={{
          height: `${containerHeight}px`,
          width: `${containerWidth}px`,
          borderRadius: `${containerHeight}px`,
        }}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block bg-inverse transform transition-transform",
          )}
          style={{
            width: `${handleSize}px`,
            height: `${handleSize}px`,
            borderRadius: '50%',
            transform: `translateX(${checked ? containerWidth - handleSize - 2 : 2}px)`,
          }}
        />
      </button>
    );
  }
);

ToggleButton.displayName = "ToggleButton";

export { ToggleButton };