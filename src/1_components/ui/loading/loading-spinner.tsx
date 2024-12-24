import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
    className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
    return (
        <div className={cn("animate-spin rounded-full border-4 border-primary border-t-transparent h-10 w-10", className)} />
    );
};

export const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center z-50">
            <LoadingSpinner />
        </div>
    );
}; 