import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: ReactNode;
    className?: string;
}

const Dialog = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    className,
}: DialogProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 배경 오버레이 */}
            <div
                className="fixed inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* 다이얼로그 컨텐츠 */}
            <div className={cn(
                "relative bg-white rounded-16 p-6 w-[320px] animate-fade-in",
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

export default Dialog; 