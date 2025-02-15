import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { IconAlertOctagon, } from "@/1_components/icons";

export interface MultilineTextFormProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    handleChange: (value: string) => void;
    placeholder?: string;
    showCount?: boolean;
    maxLength?: number;
    minLines?: number;
    readOnly?: boolean;
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
            disabled ? "color-text-disabled" : "color-text-tertiary"
        )}>
            <span>{value}</span>
            <span>/</span>
            <span>{maxLength}</span>
        </div>
    );
};

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
    return <span className="text-caption1r color-text-danger flex items-center gap-1">
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
    readOnly = false,
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
        if (readOnly) return "color-border-primary";
        if (disabled) return "color-border-disabled color-bg-disabled";
        if (hasError) return "color-border-danger";
        if (isFilled) return "color-border-primary";
        return "color-border-tertiary focus-within:color-border-primary-hover";
    };

    const getTextStyles = () => {
        if (disabled) return "color-text-disabled";
        // if (hasError) return "color-text-danger";
        return "color-text-primary";
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
                        disabled && "cursor-not-allowed",
                        readOnly && "cursor-default",
                    )}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    disabled={disabled}
                    readOnly={readOnly}
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