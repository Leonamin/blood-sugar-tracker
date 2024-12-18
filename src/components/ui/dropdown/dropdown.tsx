import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export interface DropdownData {
    label: string;
    data: any;
}

interface DropdownProps {
    data: DropdownData[];
    selectedData?: DropdownData;
    placeholder?: string;
    onSelect?: (data: DropdownData) => void;
    className?: string;
}

export const Dropdown = ({
    data,
    selectedData,
    placeholder = "선택해주세요",
    onSelect,
    className,
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cn("relative", className)} ref={dropdownRef}>
            <div className="shadow-primaryShadow absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-lg z-50">
                {isOpen && (
                    <div className="py-1">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "px-4 py-2 cursor-pointer",
                                    item.label === selectedData?.label
                                        ? "color-bg-brand-subtle"
                                        : "color-bg-primary hover:color-bg-primary-hover"
                                )}
                                onClick={() => {
                                    onSelect?.(item);
                                    setIsOpen(false);
                                }}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}; 