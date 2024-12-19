import React from 'react';
import { cn } from "@/lib/utils";

export type HandleSizeType = 'small' | 'medium' | 'large';

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  disabled?: boolean;
  handleSizeType?: HandleSizeType;
  onCheckedChange?: (checked: boolean) => void;
}

const handleSizeMap = {
  small: {
    handleSize: 16,
    containerPadding: 2,
    containerWidthRatio: 1.75,
  },
  medium: {
    handleSize: 20,
    containerPadding: 3,
    containerWidthRatio: 1.75,
  },
  large: {
    handleSize: 24,
    containerPadding: 3,
    containerWidthRatio: 1.75,
  },
};

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ checked = false, disabled = false, handleSizeType = 'small', onCheckedChange, className, ...props }, ref) => {
    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const handleSize = handleSizeMap[handleSizeType].handleSize;
    const containerPadding = handleSizeMap[handleSizeType].containerPadding;
    const containerWidthRatio = handleSizeMap[handleSizeType].containerWidthRatio;

    const containerWidth = (handleSize + containerPadding * 2) * containerWidthRatio;
    const containerHeight = handleSize + containerPadding * 2;

    const transformX = checked ? containerWidth - handleSize - containerPadding : containerPadding;

    // styles

    const bgStyle = checked ? "color-bg-secondary" : "color-bg-disabled hover:shadow-tertiaryShadow active:shadow-tertiaryShadow"
    const shadowStyle = checked ? "hover:shadow-secondaryShadow active:shadow-secondaryShadow" : "hover:shadow-tertiaryShadow active:shadow-tertiaryShadow"

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
          bgStyle,
          shadowStyle,
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
            "pointer-events-none block transform transition-transform",
            "color-bg-inverse"
          )}
          style={{
            width: `${handleSize}px`,
            height: `${handleSize}px`,
            borderRadius: '50%',
            transform: `translateX(${transformX}px)`,
          }}
        />
      </button>
    );
  }
);

ToggleButton.displayName = "ToggleButton";

export { ToggleButton };