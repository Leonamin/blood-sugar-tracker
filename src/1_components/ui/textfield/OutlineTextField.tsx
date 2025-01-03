import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { IconAlertOctagon } from "@/1_components/icons";
import { ReactNode, forwardRef } from "react";

interface OutlineTextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "className" | "prefix" | "suffix" | "textClassName" | "className"> {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  errorTextBuilder?: () => string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  textClassName?: ClassValue;
  className?: ClassValue;
}

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <span className="text-caption1r color-text-danger flex items-center gap-1 mt-1">
      <span className="w-4 h-4 flex items-center justify-center">
        <IconAlertOctagon />
      </span>
      {errorMessage}
    </span>
  );
};

const OutlineTextField = forwardRef<HTMLInputElement, OutlineTextFieldProps>(
  (
    {
      value,
      onChange,
      placeholder,
      readOnly = false,
      errorTextBuilder,
      prefix,
      suffix,
      textClassName,
      className,
      ...props
    },
    ref
  ) => {
    const hasError = errorTextBuilder && errorTextBuilder().length > 0;
    const isFocusable = !readOnly;

    const getStateStyles = () => {
      if (readOnly) return "color-border-primary";
      if (hasError) return "color-border-danger";
      return "color-border-primary focus-within:color-border-secondary";
    };

    const getShadowStyles = () => {
      if (hasError) return "shadow-dangerShadow";
    };

    return (
      <div className="flex flex-col">
        <div
          className={cn(
            "flex items-center gap-2",
            "w-full rounded-12 border bg-inverse px-4 py-2.5",
            getStateStyles(),
            getShadowStyles(),
            className
          )}
        >
          {prefix && <div className="flex-shrink-0">{prefix}</div>}
          <input
            ref={ref}
            className={cn(
              "w-full bg-transparent text-body2r focus:outline-none",
              "color-text-primary",
              readOnly && "cursor-default",
              textClassName
            )}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            readOnly={readOnly}
            {...props}
          />
          {suffix && <div className="flex-shrink-0">{suffix}</div>}
        </div>
        {hasError && <ErrorMessage errorMessage={errorTextBuilder()} />}
      </div>
    );
  }
);

OutlineTextField.displayName = "OutlineTextField";

export default OutlineTextField; 