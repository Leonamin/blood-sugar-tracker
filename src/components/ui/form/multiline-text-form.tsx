import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useEffect, useRef } from "react";
import { IconAlertOctagon, } from "@/components/icons";

export interface MultilineTextFormProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    handleChange: (value: string) => void;
    placeholder?: string;
    showCount?: boolean;
    maxLength?: number;
    minLines?: number;
    maxLines?: number;
    disabled?: boolean;
    validator?: (value: string) => boolean;
    errorMessage?: string;
    className?: string;
}

const Counter = ({ value, maxLength, disabled }: { value: number; maxLength: number; disabled?: boolean }) => {
    return (
        <div className={cn(
            "text-caption2r flex items-center justify-end",
            disabled ? "text-disabled" : "text-tertiary"
        )}>
            <span>{value}</span>
            <span>/</span>
            <span>{maxLength}</span>
        </div>
    );
};

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
    return <span className="text-caption1r text-danger flex items-center gap-1">
        <span className="w-4 h-4 flex items-center justify-center">
            <IconAlertOctagon />
        </span>
        {errorMessage}</span>
};

const MultilineTextForm = ({
    value,
    handleChange,
    placeholder,
    showCount = true,
    maxLength = 1000,
    minLines = 3,
    maxLines,
    disabled = false,
    validator,
    errorMessage,
    className,
    ...props
}: MultilineTextFormProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const hasError = validator ? validator(value) : false;
    const isFilled = value.length > 0;

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            const computedHeight = textareaRef.current.scrollHeight;
            const lineHeight = parseInt(getComputedStyle(textareaRef.current).lineHeight);

            const minHeight = lineHeight * minLines;
            const maxHeight = maxLines ? lineHeight * maxLines : Infinity;

            textareaRef.current.style.height = `${Math.min(Math.max(computedHeight, minHeight), maxHeight)}px`;
        }
    }, [value, minLines, maxLines]);

    const getStateStyles = () => {
        if (disabled) return "border-disabled bg-disabled";
        if (hasError) return "border-danger";
        if (isFilled) return "border-primary";
        return "border-tertiary focus-within:border-primary-hover";
    };

    const getTextStyles = () => {
        if (disabled) return "text-disabled";
        if (hasError) return "text-danger";
        return "text-primary";
    };

    const getShadowStyles = () => {
        if (hasError) return "shadow-dangerShadow";
    };

    return (
        <div className="flex flex-col gap-2">
            <div
                className={cn(
                    "w-full rounded-12 border bg-inverse",
                    showCount ? "p-4" : "px-4 pt-4 pb-3",
                    getStateStyles(),
                    getShadowStyles(),
                    className
                )}
                {...props}
            >
                <textarea
                    ref={textareaRef}
                    className={cn(
                        "w-full resize-none bg-transparent text-body2r focus:outline-none",
                        getTextStyles(),
                        disabled && "cursor-not-allowed"
                    )}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    disabled={disabled}
                />
                {showCount && (
                    <Counter
                        value={value.length}
                        maxLength={maxLength}
                        disabled={disabled}
                    />
                )}
            </div>
            {hasError && errorMessage && (
                <ErrorMessage errorMessage={errorMessage} />
            )}
        </div>
    );
};

export default MultilineTextForm;