import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonSize = "34" | "36" | "40" | "48";
export type ButtonColor = "primary" | "secondary" | "outline" | "error" | "tertiary";
export type ButtonRadius = "2" | "4" | "8" | "12" | "16" | "20" | "24" | "28" | "32" | "circle";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  className?: string;
  borderRadius?: ButtonRadius;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
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

const borderRadiusStyles: Record<ButtonRadius, string> = {
  "2": "rounded-2",
  "4": "rounded-4",
  "8": "rounded-8",
  "12": "rounded-12",
  "16": "rounded-16",
  "20": "rounded-20",
  "24": "rounded-24",
  "28": "rounded-28",
  "32": "rounded-32",
  "circle": "rounded-circle",
};

const iconSizes: Record<ButtonSize, number> = {
  "34": 16,
  "36": 16,
  "40": 20,
  "48": 24,
};

const SolidButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    size = "40", 
    color = "primary", 
    fullWidth, 
    className, 
    children,
    disabled,
    borderRadius = "12",
    prefixIcon,
    suffixIcon,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center transition-colors duration-200",
          fullWidth
            ? "justify-between px-6"
            : "justify-center gap-2",
          sizeStyles[size],
          colorStyles[color],
          borderRadiusStyles[borderRadius],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {prefixIcon && (
          <span className="flex items-center" style={{ width: iconSizes[size], height: iconSizes[size] }}>
            {prefixIcon}
          </span>
        )}
        <span className="flex-1 text-center">{children}</span>
        {suffixIcon && (
          <span className="flex items-center" style={{ width: iconSizes[size], height: iconSizes[size] }}>
            {suffixIcon}
          </span>
        )}
      </button>
    );
  }
);

SolidButton.displayName = "SolidButton";

export default SolidButton;