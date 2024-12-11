import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
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

interface ColorApplyProps {
  bg: ClassValue;
  hover: ClassValue;
  text: ClassValue;
}


const colorStyles: Record<ButtonColor, ColorApplyProps> = {
  primary: {
    bg: "bg-brand",
    text: "text-inverse",
    hover: "hover:bg-brand-hover dark:hover:bg-brand-hover-dark"
  },
  secondary: {
    bg: "bg-secondary",
    text: "text-inverse",
    hover: "hover:bg-secondary-hover dark:hover:bg-secondary-hover-dark"
  },
  outline: {
    bg: "bg-inverse border border-primary",
    text: "text-primary-hover",
    hover: "hover:bg-primary dark:hover:bg-primary-hover-dark"
  },
  error: {
    bg: "bg-danger",
    text: "text-inverse",
    hover: "hover:bg-danger-bold dark:hover:bg-danger-bold-dark"
  },
  tertiary: {
    bg: "bg-tertiary",
    text: "text-inverse",
    hover: "hover:bg-tertiary-hover dark:hover:bg-tertiary-hover-dark"
  }
};

const shadowStyles: Record<ButtonColor, string> = {
  primary: "hover:shadow-primaryShadow",
  secondary: "hover:shadow-secondaryShadow",
  outline: "hover:shadow-tertiaryShadow",
  error: "hover:shadow-dangerShadow",
  tertiary: "hover:shadow-tertiaryShadow",
};

const disabledStyles: Record<ButtonColor, string> = {
  primary: "disabled:opacity-40",
  secondary: "disabled:opacity-40",
  outline: "disabled:opacity-40",
  error: "disabled:opacity-40",
  tertiary: "disabled:opacity-40",
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
    const prefixIconElement =
      <>
        {prefixIcon ? (
          <span className={cn("flex items-center", colorStyles[color].text)} style={{ width: iconSizes[size], height: iconSizes[size] }}>
            {prefixIcon}
          </span>
        ) : fullWidth ? (
          <span className={cn("flex items-center", colorStyles[color].text)} style={{ width: iconSizes[size], height: iconSizes[size] }}>
          </span>
        ) : null}
      </>;

    const suffixIconElement =
      <>
        {suffixIcon ? (
          <span className={cn("flex items-center", colorStyles[color].text)} style={{ width: iconSizes[size], height: iconSizes[size] }}>
            {suffixIcon}
          </span>
        ) : fullWidth ? (
          <span className={cn("flex items-center", colorStyles[color].text)} style={{ width: iconSizes[size], height: iconSizes[size] }}>
          </span>
        ) : null}
      </>;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center transition-colors duration-200",
          fullWidth
            ? "justify-between px-6"
            : "justify-center gap-2",
          sizeStyles[size],
          colorStyles[color].bg,
          colorStyles[color].hover,
          shadowStyles[color],
          disabledStyles[color],
          borderRadiusStyles[borderRadius],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {prefixIconElement}
        <span className={cn("flex-1 text-center", colorStyles[color].text)}>{children}</span>
        {suffixIconElement}
      </button>
    );
  }
);

SolidButton.displayName = "SolidButton";

export default SolidButton;