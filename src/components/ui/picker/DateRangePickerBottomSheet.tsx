import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { Calendar } from "../calendar/RangeCalendar"
import { DateRange } from "react-day-picker"
import { format } from "date-fns"
import SolidButton from "../button/solid-button"

interface DateRangePickerBottomSheetProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    onSelect?: (range: DateRange) => void
    defaultValue?: DateRange
    disabled?: { from: Date; to: Date }[]
}

export function DateRangePickerBottomSheet({
    open,
    onOpenChange,
    onSelect,
    defaultValue,
    disabled,
}: DateRangePickerBottomSheetProps) {
    const [selected, setSelected] = React.useState<DateRange | undefined>(defaultValue)

    React.useEffect(() => {
        setSelected(defaultValue)
    }, [defaultValue])

    React.useEffect(() => {
        if (!open) {
            setSelected(defaultValue)
        }
    }, [open, defaultValue])

    const handleSelect = (range: DateRange | undefined) => {
        if (range) {
            setSelected(range)
        }
    }

    const handleComplete = () => {
        if (selected && onSelect) {
            onSelect(selected)
            onOpenChange?.(false)
        }
    }

    return (
        <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay
                    className={cn(
                        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    )}
                />
                <DialogPrimitive.Content
                    className={cn(
                        "color-bg-primary rounded-t-32",
                        "fixed inset-x-0 bottom-0 z-50 w-full",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                    )}
                >
                    <div className={cn(
                        "p-4",
                        "flex flex-col",
                    )}>
                        <Calendar
                            selected={selected}
                            onSelect={handleSelect}
                            disabled={disabled}
                            className="mx-auto"
                        />

                        <div className="mt-4 flex gap-2">
                            <SolidButton fullWidth color='outline' size="40" onClick={() => onOpenChange?.(false)}>닫기</SolidButton>
                            <SolidButton fullWidth color='primary' size="40" onClick={handleComplete}>선택</SolidButton>
                        </div>
                    </div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
} 