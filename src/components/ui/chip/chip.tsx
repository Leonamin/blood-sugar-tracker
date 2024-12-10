import { cn } from "@/lib/utils";

export type ChipSize = 'small' | 'medium' | 'large';
export type ChipVariant = 'brand' | 'brand-light';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    size?: ChipSize;
    variant?: ChipVariant;
    onCheckedChange?: (checked: boolean) => void;
}

const sizeStyles: Record<ChipSize, { container: string; icon: string }> = {
    small: {
        container: 'px-3 py-2 text-caption1m gap-1',
        icon: 'w-4 h-4'
    },
    medium: {
        container: 'px-3 py-3 text-body2m gap-1',
        icon: 'w-5 h-5'
    },
    large: {
        container: 'px-3 py-3 text-body1m gap-1',
        icon: 'w-5 h-5'
    }
};

const getVariantStyles = (variant: ChipVariant, checked: boolean, disabled: boolean) => {
    if (disabled) {
        return variant === 'brand' 
            ? 'text-inverse bg-brand border border-transparent opacity-40'
            : 'text-inverse bg-brand-subtle border border-transparent opacity-40';
    }

    if (checked) {
        return variant === 'brand'
            ? 'text-inverse bg-brand border border-transparent'
            : 'text-brand bg-brand-subtle border border-transparent';
    }

    return variant === 'brand'
        ? 'text-primary bg-inverse border border-primary hover:bg-primary-hover hover:border-primary-hover'
        : 'text-primary bg-inverse border border-primary hover:bg-primary-hover hover:border-primary-hover';
};

const Chip = ({
    size = 'small',
    variant = 'brand',
    label,
    prefixIcon,
    suffixIcon,
    checked = false,
    disabled = false,
    onCheckedChange,
    className,
    ...props
}: ChipProps) => {
    const handleClick = () => {
        if (!disabled && onCheckedChange) {
            onCheckedChange(!checked);
        }
    };

    return (
        <div
            role="button"
            tabIndex={disabled ? -1 : 0}
            onClick={handleClick}
            className={cn(
                'rounded-full inline-flex items-center transition-colors cursor-pointer',
                disabled && 'cursor-not-allowed',
                sizeStyles[size].container,
                getVariantStyles(variant, checked, disabled),
                className
            )}
            {...props}
        >
            {prefixIcon && (
                <span className={cn('flex items-center', sizeStyles[size].icon)}>
                    {prefixIcon}
                </span>
            )}
            {label && <span>{label}</span>}
            {suffixIcon && (
                <span className={cn('flex items-center', sizeStyles[size].icon)}>
                    {suffixIcon}
                </span>
            )}
        </div>
    );
};

export default Chip;