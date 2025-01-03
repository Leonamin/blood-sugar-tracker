import { cn } from "@/lib/utils";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
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
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // 다음 프레임에서 애니메이션 시작
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        } else {
            setIsAnimating(false);
            // 트랜지션이 완료된 후에 컴포넌트를 안보이게 설정
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
            <div
                className={
                    cn(
                        "fixed inset-0 color-bg-overlay",
                        "transition-opacity duration-300",
                        isAnimating ? "opacity-100" : "opacity-0"
                    )
                }
                onClick={close}
            />

            <div className={cn(
                "relative color-bg-inverse rounded-16 py-6 px-4 w-full",
                "transition-opacity duration-300",
                "transition-transform duration-300",
                isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                className
            )}>
                {/* 헤더 & 설명과 컨텐츠 사이 24px */}
                <div className="space-y-6">
                    {/* 헤더와 설명 사이 4px */}
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