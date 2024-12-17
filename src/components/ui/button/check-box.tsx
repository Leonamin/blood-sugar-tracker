import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type CheckBoxSize = 'small' | 'medium';

interface CheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    checked: boolean;
    onChanged?: (checked: boolean) => void;
    size?: CheckBoxSize;
}

export function CheckBox({ 
    checked, 
    onChanged, 
    size = 'small', 
    className, 
    ...props 
}: CheckBoxProps) {
    const sizeStyles = {
        small: 'w-5 h-5',
        medium: 'w-6 h-6'
    };

    return (
        <button
            type="button"
            className={cn(
                'rounded-full flex items-center justify-center',
                'transition-all duration-200 ease-in-out',
                sizeStyles[size],
                checked ? 'color-bg-success border-transparent' : 'color-bg-transparent border-1.5 color-border-primary',

                className
            )}
            onClick={() => onChanged?.(!checked)}
            {...props}
        >
            <div className={cn(
                'transition-transform duration-200 ease-in-out',
                checked ? 'scale-100' : 'scale-0'
            )}>
                <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 5L4.33333 8.5L11 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </button>
    );
} 