import { createContext, ReactNode, useContext, useEffect, useRef, useState, useMemo } from "react";
import Chip from "../chip/chip";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@/1_components/icons";
import { useTextsDimensions } from '@/3_hook/useTextDimensions';

interface DropdownData<T = any> {
    label: string;
    value: T;
}

interface DropdownContext<T> {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    onSelect: (data: DropdownData<T>) => void;
    selectedData: DropdownData<T> | null;
}

const DropdownContext = createContext<DropdownContext<any> | null>(null);

const useDropdownContext = <T,>() => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("Dropdown 컴포넌트 내부에서만 사용할 수 있습니다");
    }
    return context as DropdownContext<T>;
};

interface DropdownProviderProps<T> {
    children: ReactNode;
    data: DropdownData<T>[];
    selectedData: DropdownData<T> | null;
    onSelect: (data: DropdownData<T>) => void;
}

export const DropdownProvider = <T,>({ children, selectedData, onSelect }: DropdownProviderProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const handleSelect = (data: DropdownData<T>) => {
        selectedData = data;
        onSelect(data);
        close();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block">
            <DropdownContext.Provider value={{ isOpen, open, close, onSelect: handleSelect, selectedData }}>
                {children}
            </DropdownContext.Provider>
        </div>
    );
};

export const useDropdown = <T,>() => {
    const context = useDropdownContext<T>();
    return {
        isOpen: context.isOpen,
        open: context.open,
        close: context.close,
        selectedData: context.selectedData,
        onSelect: context.onSelect,
    };
};

interface DropdownChipProps {
    placeholder?: string;
}

export const DropdownChip = <T,>({
    placeholder = "선택해주세요",
}: DropdownChipProps) => {
    const { isOpen, open, close, selectedData } = useDropdown<T>();

    const handleClick = () => {
        isOpen ? close() : open();
    };

    return (
        <Chip
            label={selectedData?.label || placeholder}
            suffixIcon={<IconChevronDown className={cn("transition-transform", isOpen && "rotate-180")} />}
            onClick={handleClick}
        />
    );
};

interface DropdownListProps<T> {
    data: DropdownData<T>[];
}

export const DropdownList = <T,>({ data }: DropdownListProps<T>) => {
    const { isOpen, onSelect, selectedData } = useDropdown<T>();
    
    // 텍스트 너비 계산을 위한 배열 생성
    const allTexts = useMemo(() => 
        data.map(item => item.label),
        [data]
    );
    
    const { maxWidth } = useTextsDimensions(allTexts);

    if (!isOpen) return null;

    return (
        <div 
            className="absolute top-full right-0 mt-1 rounded-8 z-50
                shadow-shadow4
                bg-inverse-bg
                dark:bg-inverse-bg-dark"
            style={{ width: maxWidth + 40 }}
        >
            {data.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "px-2 py-2.5 cursor-pointer",
                        index === 0 && "rounded-t-8",
                        index === data.length - 1 && "rounded-b-8",
                        item.label === selectedData?.label
                            ? "color-bg-brand-subtle"
                            : "color-text-primary hover:bg-primary-bg dark:hover:bg-primary-bg-dark"
                    )}
                    onClick={() => onSelect(item)}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export const IconDropdown = <T,>({ icon }: { icon: ReactNode }) => {
    const { isOpen, open, close } = useDropdown<T>();

    const handleClick = () => {
        isOpen ? close() : open();
    };

    return (
        <button 
            onClick={handleClick}
            className="flex items-center justify-center"
        >
            {icon}
        </button>
    );
};

export type { DropdownData, DropdownContext };
