import { cn } from "@/lib/utils";

export type TagSizeType = 'small' | 'medium';
export type TagColorType = 'error' | 'success' | 'warning' | 'info' | 'black' | 'orange';
export type TagVariantType = 'empty' | 'filled' | 'solid';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    size?: TagSizeType;
    color?: TagColorType;
    variant?: TagVariantType;
}

const sizeStyles: Record<TagSizeType, { container: string; icon: string; text: string }> = {
    small: {
        container: 'px-1 py-0.5 gap-1',
        icon: 'w-4 h-4',
        text: 'text-caption2m'
    },
    medium: {
        container: 'px-2 py-0.5 gap-1',
        icon: 'w-5 h-5',
        text: 'text-body2m'
    }
}

const emptyStyles: Record<TagColorType, string> = {
    'error': 'bg-inverse text-danger',
    'success': 'bg-inverse text-success',
    'warning': 'bg-inverse text-warning',
    'info': 'bg-inverse text-info',
    'black': 'bg-inverse text-primary',
    'orange': 'bg-inverse text-orange',
}

const filledStyles: Record<TagColorType, string> = {
    'error': 'bg-danger-subtle text-danger',
    'success': 'bg-success-subtle text-success',
    'warning': 'bg-warning-subtle text-warning',
    'info': 'bg-info-subtle text-info',
    'black': 'bg-primary-hover text-primary',
    'orange': 'bg-orange-subtle text-orange',
}

const solidStyles: Record<TagColorType, string> = {
    'error': 'bg-danger text-inverse',
    'success': 'bg-success text-inverse',
    'warning': 'bg-warning text-primary',
    'info': 'bg-info text-inverse',
    'black': 'bg-tertiary text-inverse',
    'orange': 'bg-orange text-inverse',
}

const variantStyles: Record<TagVariantType, Record<TagColorType, string>> = {
    empty: emptyStyles,
    filled: filledStyles,
    solid: solidStyles,
}

const Tag = ({
    label,
    prefixIcon,
    suffixIcon,
    size = 'small',
    color = 'error',
    variant = 'empty',
    className,
    ...props
}: TagProps) => {
    return (
        <div className={cn(
            'inline-flex items-center justify-center gap-0.5 rounded-4',
            sizeStyles[size].container, variantStyles[variant][color], className)} {...props}>
            {prefixIcon && <div className={cn('flex items-center justify-center', sizeStyles[size].icon)}>{prefixIcon}</div>}
            <span className={cn('flex items-center justify-center', sizeStyles[size].text)}>{label}</span>
            {suffixIcon && <div className={cn('flex items-center justify-center', sizeStyles[size].icon)}>{suffixIcon}</div>}
        </div>
    );
}

export default Tag;