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

interface ColorApplyType {
    text?: string;
    icon?: string;
    bg?: string;
}

const emptyStyles: Record<TagColorType, ColorApplyType> = {
    'error': {
        text: 'color-text-danger',
        icon: 'color-text-danger',
        bg: 'color-bg-inverse'
    },
    'success': {
        text: 'color-text-success',
        icon: 'color-text-success',
        bg: 'color-bg-inverse'
    },
    'warning': {
        text: 'color-text-warning',
        icon: 'color-text-warning',
        bg: 'color-bg-inverse'
    },
    'info': {
        text: 'color-text-info',
        icon: 'color-text-info',
        bg: 'color-bg-inverse'
    },
    'black': {
        text: 'color-text-primary',
        icon: 'color-text-primary',
        bg: 'color-bg-inverse'
    },
    'orange': {
        text: 'color-text-orange',
        icon: 'color-text-orange',
        bg: 'color-bg-inverse'
    }
}

const filledStyles: Record<TagColorType, ColorApplyType> = {
    'error': {
        text: 'color-text-danger-bold',
        icon: 'color-text-danger',
        bg: 'color-bg-danger-subtle'
    },
    'success': {
        text: 'color-text-success-bold',
        icon: 'color-text-success',
        bg: 'color-bg-success-subtle'
    },
    'warning': {
        text: 'color-text-warning-bold',
        icon: 'color-text-warning',
        bg: 'color-bg-warning-subtle'
    },
    'info': {
        text: 'color-text-info-bold',
        icon: 'color-text-info',
        bg: 'color-bg-info-subtle'
    },
    'black': {
        text: 'color-text-primary-bold',
        icon: 'color-text-primary',
        bg: 'color-bg-primary-hover'
    },
    'orange': {
        text: 'color-text-orange-bold',
        icon: 'color-text-orange',
        bg: 'color-bg-orange-subtle'
    }
}

const solidStyles: Record<TagColorType, ColorApplyType> = {
    'error': {
        text: 'color-text-inverse',
        icon: 'color-text-inverse',
        bg: 'color-bg-danger'
    },
    'success': {
        text: 'color-text-inverse',
        icon: 'color-text-inverse',
        bg: 'color-bg-success'
    },
    'warning': {
        text: 'color-text-inverse',
        icon: 'color-text-inverse',
        bg: 'color-bg-warning'
    },
    'info': {
        text: 'color-text-inverse',
        icon: 'color-text-inverse',
        bg: 'color-bg-info'
    },
    'black': {
        text: 'color-text-inverse',
        icon: 'color-text-inverse',
        bg: 'color-bg-tertiary'
    },
    'orange': {
        text: 'color-text-inverse',
        icon: 'color-text-inverse',
        bg: 'color-bg-orange'
    }
}

const variantStyles: Record<TagVariantType, Record<TagColorType, ColorApplyType>> = {
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
            sizeStyles[size].container, variantStyles[variant][color].bg, className)} {...props}>
            {prefixIcon && <div className={cn('flex items-center justify-center', sizeStyles[size].icon, variantStyles[variant][color].icon)}>{prefixIcon}</div>}
            <span className={cn('flex items-center justify-center', sizeStyles[size].text, variantStyles[variant][color].text)}>{label}</span>
            {suffixIcon && <div className={cn('flex items-center justify-center', sizeStyles[size].icon, variantStyles[variant][color].icon)}>{suffixIcon}</div>}
        </div>
    );
}

export default Tag;