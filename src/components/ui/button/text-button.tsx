import React from 'react';
import { cn } from "@/lib/utils";
import { ClassValue } from 'clsx';

export type TextButtonSizeType = '22px' | '24px' | '26px';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    size?: TextButtonSizeType;
    isUnderline?: boolean;
    isDisabled?: boolean;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    onClick?: () => void;
}

const textSizeMap = {
    '22px': 'text-body2r',
    '24px': 'text-body2r',
    '26px': 'text-body1r',
};

const iconSizeMap = {
    '22px': 'w-3 h-3',
    '24px': 'w-4 h-4',
    '26px': 'w-4 h-4',
};

const paddingMap = {
    '22px': 'px-1 py-0.5',
    '24px': 'px-1 py-0.5',
    '26px': 'px-1 py-0.5',
};

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
    ({ label, size = '24px', isUnderline = false, isDisabled = false, prefixIcon, suffixIcon, className, onClick, ...props }, ref) => {
        const textSize = textSizeMap[size];
        const iconSize = iconSizeMap[size];
        const padding = paddingMap[size];

        const underlineStyle = isUnderline ? 'underline' : '';
        const hoverStyle: ClassValue = 'hover:bg-primary-hover dark:hover:bg-primary-hover-dark';
        const disabledStyle: ClassValue = 'cursor-not-allowed opacity-40';

        return (
            <button
                className={
                    cn(
                        'rounded-full inline-flex items-center transition-colors duration-200 cursor-pointer',
                        padding,
                        hoverStyle,
                        className,
                        isDisabled && disabledStyle,
                    )}
                onClick={onClick}
                disabled={isDisabled}
                {...props}
            >
                {prefixIcon && (
                    <span className={cn('flex items-center', iconSize)}>
                        {prefixIcon}
                    </span>
                )}
                {label && <span
                    className={cn(textSize, underlineStyle)}
                >{label}</span>}
                {suffixIcon && (
                    <span className={cn('flex items-center', iconSize)}>
                        {suffixIcon}
                    </span>
                )}
            </button>
        );
    }
);

export default TextButton;