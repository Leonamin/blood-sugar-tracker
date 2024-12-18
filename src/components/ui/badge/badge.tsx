import { cn } from "@/lib/utils";

type BadgeColor = "brand" | "success" | "warning" | "danger" | "black";
type BadgeSize = "small" | "medium";
type BadgePosition = 
  | "top-left" 
  | "top-center" 
  | "top-right"
  | "center-left" 
  | "center" 
  | "center-right"
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right";

interface BadgeProps {
    color?: BadgeColor;
    size?: BadgeSize;
    position?: BadgePosition;
    spacing?: number;
    className?: string;
}

const Badge = ({
    color = "brand",
    size = "small",
    position = "top-right",
    spacing = 1,
    className,
}: BadgeProps) => {
    const sizeStyles = {
        small: "w-[6px] h-[6px]",
        medium: "w-[8px] h-[8px]",
    };

    const colorStyles = {
        brand: "color-bg-brand",
        success: "color-bg-success",
        warning: "color-bg-warning",
        danger: "color-bg-danger",
        black: "color-bg-tertiary",
    };

    const getPositionStyles = (position: BadgePosition, spacing: number) => {
        const spaceValue = `${spacing * 4}px`;
        
        const positions = {
            "top-left": `top-[${spaceValue}] left-[${spaceValue}]`,
            "top-center": `top-[${spaceValue}] left-1/2 -translate-x-1/2`,
            "top-right": `top-[${spaceValue}] right-[${spaceValue}]`,
            "center-left": `top-1/2 -translate-y-1/2 left-[${spaceValue}]`,
            "center": `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
            "center-right": `top-1/2 -translate-y-1/2 right-[${spaceValue}]`,
            "bottom-left": `bottom-[${spaceValue}] left-[${spaceValue}]`,
            "bottom-center": `bottom-[${spaceValue}] left-1/2 -translate-x-1/2`,
            "bottom-right": `bottom-[${spaceValue}] right-[${spaceValue}]`,
        };

        return positions[position];
    };

    return (
        <div
            className={cn(
                "rounded-full absolute",
                sizeStyles[size],
                colorStyles[color],
                getPositionStyles(position, spacing),
                className
            )}
        />
    );
};

export default Badge; 