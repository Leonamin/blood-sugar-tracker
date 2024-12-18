import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Chip from "../chip/chip";
import { ChipProps } from "../chip/chip";
import { IconChevronDown } from "@/components/icons";

export interface DropdownData {
    label: string;
    data: any;
}

interface ChipDropdownProps extends Omit<ChipProps, 'checked' | 'onCheckedChange' | 'onSelect'> {
    data: DropdownData[];
    selectedData?: DropdownData;
    placeholder?: string;
    onSelect?: (data: DropdownData) => void;
}

export const ChipDropdown = ({
    data,
    selectedData,
    placeholder = "선택해주세요",
    onSelect,
    className,
    ...chipProps
}: ChipDropdownProps) => {
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
        <div className={cn("relative inline-block", className)} ref={dropdownRef}>
            <Chip
                {...chipProps}
                label={selectedData?.label || placeholder}
                suffixIcon={<IconChevronDown className={cn("transition-transform", isOpen && "rotate-180")} />}
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-1 rounded-8 z-50
                    shadow-shadow4
                    bg-inverse-bg
                    dark:bg-inverse-bg-dark
                ">
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
    );
}; 