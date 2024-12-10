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
        text: 'text-danger',    
        icon: 'text-danger',
        bg: 'bg-inverse'
    },
    'success': {
        text: 'text-success',
        icon: 'text-success',
        bg: 'bg-inverse'
    },
    'warning': {
        text: 'text-warning',
        icon: 'text-warning',
        bg: 'bg-inverse'
    },
    'info': {
        text: 'text-info',
        icon: 'text-info',
        bg: 'bg-inverse'
    },
    'black': {
        text: 'text-primary',
        icon: 'text-primary',
        bg: 'bg-inverse'
    },
    'orange': {
        text: 'text-orange',
        icon: 'text-orange',
        bg: 'bg-inverse'
    }
}

const filledStyles: Record<TagColorType, ColorApplyType> = {
    'error': {
        text: 'text-danger-bold',
        icon: 'text-danger',
        bg: 'bg-danger-subtle'
    },
    'success': {
        text: 'text-success-bold',
        icon: 'text-success',
        bg: 'bg-success-subtle'
    },
    'warning': {
        text: 'text-warning-bold',
        icon: 'text-warning',
        bg: 'bg-warning-subtle'
    },
    'info': {
        text: 'text-info-bold',
        icon: 'text-info',
        bg: 'bg-info-subtle'
    },
    'black': {
        text: 'text-primary-bold',
        icon: 'text-primary',
        bg: 'bg-primary-hover'
    },
    'orange': {
        text: 'text-orange-bold',
        icon: 'text-orange',
        bg: 'bg-orange-subtle'
    }
}

const solidStyles: Record<TagColorType, ColorApplyType> = {
    'error': {
        text: 'text-inverse',
        icon: 'text-inverse',
        bg: 'bg-danger'
    },
    'success': {
        text: 'text-inverse',
        icon: 'text-inverse',
        bg: 'bg-success'
    },
    'warning': {
        text: 'text-inverse',
        icon: 'text-inverse',
        bg: 'bg-warning'
    },
    'info': {
        text: 'text-inverse',
        icon: 'text-inverse',
        bg: 'bg-info'
    },
    'black': {
        text: 'text-inverse',
        icon: 'text-inverse',
        bg: 'bg-tertiary'
    },
    'orange': {
        text: 'text-inverse',
        icon: 'text-inverse',
        bg: 'bg-orange'
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