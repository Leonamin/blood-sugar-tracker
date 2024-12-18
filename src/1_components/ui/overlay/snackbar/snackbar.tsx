import GraphicIconSuccess from "@/1_components/graphic-icons/GraphicIconSuccess";
import GraphicIconWarning from "@/1_components/graphic-icons/GraphicIconWarning";
import GraphicIconDanger from "@/1_components/graphic-icons/GraphicIconDanger";
import GraphicIconInfo from "@/1_components/graphic-icons/GraphicIconInfo";
import { cn } from "@/lib/utils";
import { IconBlock } from "@/1_components/icons";

export type SnackbarType = 'success' | 'warning' | 'error' | 'info';

export interface SnackbarProps {
    type: SnackbarType;
    message: string;
    description?: string;
    showCloseButton?: boolean;
    onClose?: () => void;
}

const SnackbarStyle: Record<SnackbarType, any> = {
    success: {
        icon: <GraphicIconSuccess />,
        color: 'color-bg-success-subtle',
        msgColor: 'color-text-primary',
        descColor: 'color-text-tertiary',
    },
    warning: {
        icon: <GraphicIconWarning />,
        color: 'color-bg-warning-subtle',
        msgColor: 'color-text-primary',
        descColor: 'color-text-tertiary',
    },
    error: {
        icon: <GraphicIconDanger />,
        color: 'color-bg-danger-subtle',
        msgColor: 'color-text-primary',
        descColor: 'color-text-tertiary',
    },
    info: {
        icon: <GraphicIconInfo />,
        color: 'color-bg-info-subtle',
        msgColor: 'color-text-primary',
        descColor: 'color-text-tertiary',
    },
}

const Snackbar = ({ type, message, description, showCloseButton = true, onClose }: SnackbarProps) => {
    const { icon, color, msgColor, descColor } = SnackbarStyle[type];
    return <div className={cn(
        'flex flex-row items-start self-stretch gap-2 px-4 py-3 rounded-16',
        color,
    )}>
        {icon}
        <div className={cn(
            'flex flex-col items-start justify-start flex-1',
        )}>
            <p className={cn(
                'text-body2m',
                msgColor,
            )}>{message}</p>
            <p className={cn(
                'text-caption1r',
                descColor,
            )}>{description}</p>
        </div>
        {showCloseButton &&
            <div className="cursor-pointer" onClick={onClose}>
                <IconBlock />
            </div>
        }
    </div>;
}

export default Snackbar;