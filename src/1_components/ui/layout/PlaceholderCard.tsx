import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type PlaceholderVariant = 'default' | 'disabled';

interface PlaceholderCardProps {
  children: ReactNode;
  variant?: PlaceholderVariant;
  className?: string;
}

const variantStyles = {
  default: {
    background: "color-bg-inverse",
    border: "color-border-primary",
  },
  disabled: {
    background: "color-bg-disabled",
    border: "color-border-disabled",
  },
} as const;

const PlaceholderCard = ({
  children,
  variant = 'default',
  className,
}: PlaceholderCardProps): ReactNode => (
  <div
    className={cn(
      "flex items-center justify-center py-2.5 px-4 rounded-12 border border-solid",
      variantStyles[variant].background,
      variantStyles[variant].border,
      className
    )}
  >
    {children}
  </div>
);

export default PlaceholderCard;
