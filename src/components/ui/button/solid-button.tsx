import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonSize = "34" | "36" | "40" | "48";
export type ButtonColor = "primary" | "secondary" | "outline" | "error" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  className?: string;
  borderRadius?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  "34": "px-3 py-2 text-caption1m",
  "36": "px-3 py-2 text-body2m",
  "40": "px-4 py-2.5 text-body2m",
  "48": "px-4 py-3 text-body1m",
};

const colorStyles: Record<ButtonColor, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover disabled:opacity-40",
  secondary: "bg-secondary text-white hover:bg-secondary-hover disabled:opacity-40",
  outline: "bg-inverse border border-primary text-primary hover:border-primary-hover disabled:opacity-40",
  error: "bg-danger text-white hover:bg-danger-bold disabled:opacity-40",
  tertiary: "bg-tertiary text-white hover:bg-tertiary-hover disabled:opacity-40",
};

const SolidButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "40", color = "primary", fullWidth, className, children, disabled, borderRadius: borderRadius = '12', ...props}, ref) => {
    const borderRadiusClass = {
      '2': 'rounded-2',
      '4': 'rounded-4',
      '8': 'rounded-8',
      '12': 'rounded-12',
      '16': 'rounded-16',
      '20': 'rounded-20',
      '24': 'rounded-24',
      '28': 'rounded-28',
      '32': 'rounded-32',
      'circle': 'rounded-circle',
    }[borderRadius] || '';
    
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-colors",
          sizeStyles[size],
          colorStyles[color],
          fullWidth && "w-full",
          borderRadiusClass,
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SolidButton.displayName = "SolidButton";

export default SolidButton;