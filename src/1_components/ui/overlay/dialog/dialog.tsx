import { cn } from "@/lib/utils";
import { ReactNode, createContext, useContext, useState } from "react";
import SolidButton, { ButtonProps } from "../../button/solid-button";

interface DialogContext {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    onConfirm: () => void;
}

const DialogContext = createContext<DialogContext | null>(null);

const useDialogContext = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("Dialog 컴포넌트 내부에서만 사용할 수 있습니다");
    }
    return context;
};

interface DialogProviderProps {
    children: ReactNode;
    onConfirm?: () => void;
}

export const DialogProvider = ({ children, onConfirm }: DialogProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    
    const handleConfirm = () => {
        onConfirm?.();
        close();
    };

    return (
        <DialogContext.Provider value={{ 
            isOpen, 
            open, 
            close, 
            onConfirm: handleConfirm 
        }}>
            {children}
        </DialogContext.Provider>
    );
};

export const useDialog = () => {
    const context = useDialogContext();
    return {
        open: context.open,
        close: context.close
    };
};

interface DialogProps {
    title: string;
    description?: string;
    children?: ReactNode;
    className?: string;
}

interface DialogButtonProps extends Omit<ButtonProps, 'onClick'> {
    label: string;
    onClick?: () => void;
}

const Button = ({
    label,
    color = "outline",
    size = "40",
    onClick,
    ...props
}: DialogButtonProps) => {
    const { close } = useDialogContext();

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        close();
    };

    return <SolidButton color={color} size={size} onClick={handleClick} {...props}>{label}</SolidButton>;
};

const Dialog = ({
    title,
    description,
    children,
    className,
}: DialogProps) => {
    const { isOpen, close } = useDialogContext();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
            <div
                className="fixed inset-0 color-bg-overlay"
                onClick={close}
            />

            <div className={cn(
                "relative bg-white rounded-16 py-6 px-4 w-full animate-fade-in",
                className
            )}>
                <div className="space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-h5b color-text-primary">{title}</h2>
                        {description && (
                            <p className="text-body2r color-text-primary">{description}</p>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

Dialog.Button = Button;

export default Dialog; 