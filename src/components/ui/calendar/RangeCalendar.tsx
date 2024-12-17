import { DayPicker, DateRange, DayProps, DayContentProps } from 'react-day-picker'
import "react-day-picker/dist/style.css";
import { ko } from 'date-fns/locale'
import { format, isSameDay, isToday, isWithinInterval } from 'date-fns'
import { cn } from '@/lib/utils'
import { IconCalendar, IconChevronLeft, IconChevronRight } from '@/components/icons'
import { useElementSize } from '@/hooks/useElementSIze';


export type CalendarProps = {
    className?: string
    disabled?: { from: Date; to: Date }[]
    selected?: DateRange | undefined
    onSelect?: (range: DateRange | undefined, selectedDay: Date) => void;
}

export function Calendar({
    className,
    disabled,
    selected,
    onSelect,
}: CalendarProps) {

    const [setRef, { width }] = useElementSize();
    const cellSize = Math.floor((width - 24) / 7);

    const sizeStyle = width ? `w-[${cellSize}px] min-h-[${cellSize}px]` : 'w-9 min-h-9';

    const isTodayInRange = (date: Date) => {
        if (!selected) return false;
        return isWithinInterval(date, { start: selected.from, end: selected.to });
    }

    const today = new Date();

    return (

        <DayPicker
            mode='range'
            selected={selected}
            onSelect={onSelect}
            disabled={disabled}
            locale={ko}
            className={cn(
                'p-3',
                'rdp',
                className
            )}
            classNames={{
                /* 헤더 부분 */
                month: 'space-y-2',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-body2m font-medium',
                nav_button_previous: 'absolute left-1 ',
                nav_button_next: 'absolute right-1',
                nav: 'space-x-1 flex items-center',
                nav_button: cn(
                    'h-7 w-7 p-0 opacity-50'
                ),
                /* 헤더 부분 */
                head_cell: cn(
                    'text-body2m color-text-tertiary',
                    sizeStyle,
                ),
                /* 셀 부분 */
                day: cn(
                    'text-body2m text-tertiary',
                    sizeStyle,
                ),
                button: cn(
                    'hover:bg-green-400 dark:hover:bg-green-200',
                    'cursor-pointer',
                ),
                day_range_start: cn(
                    'color-text-primary color-bg-secondary rounded-l-full !important',
                    sizeStyle,
                ),
                day_range_middle: cn(
                    'color-text-primary color-bg-secondary rounded-none !important',
                    sizeStyle,
                ),
                day_range_end: cn(
                    'color-text-primary color-bg-secondary rounded-r-full !important',
                    sizeStyle,
                ),
                day_today: cn(
                    !isTodayInRange(today) && 'color-bg-info-subtle color-text-info rounded-full',
                    sizeStyle,
                ),
                cell: cn(
                    'p-0',
                ),
            }}
            components={{
                IconLeft: ({ ...props }) => <IconChevronLeft />,
                IconRight: ({ ...props }) => <IconChevronRight />,
                CaptionLabel: ({ ...props }) =>
                    <div
                        className='text-body2m gap-2 flex items-center '>
                        <IconCalendar size={20} />
                        {format(props.displayMonth, 'yyyy.MM')}
                    </div>,
                // Day: (props: DayProps) => <CustomDay {...props} sizeStyle={sizeStyle} />,
            }}
        />
    )
}

function CustomDay(props: DayProps & { sizeStyle: string }) {
    
    const { date, displayMonth, sizeStyle } = props;

    // 날짜 스타일 결정 로직
    const getDateStyles = () => {
        // 1. 기간 선택 스타일 체크
        // if (from && to && date >= from && date <= to) {
        //     if (isSameDay(date, from)) {
        //         return 'color-bg-secondary rounded-l-full';
        //     }
        //     if (isSameDay(date, to)) {
        //         return 'color-bg-secondary rounded-r-full';
        //     }
        //     if (isWithinInterval(date, { start: from, end: to })) {
        //         return 'color-bg-secondary rounded-none';
        //     }
        // }

        // 2. 오늘 날짜 체크
        if (isToday(date)) {
            return 'color-text-info color-bg-info-subtle rounded-full';
        }

        // 3. 현재 달의 날짜 체크
        if (date.getMonth() === displayMonth.getMonth()) {
            return 'color-text-tertiary';
        }

        // 4. 다른 달의 날짜
        return 'color-text-disabled';
    };

    return (
        <div className={cn(
            'flex items-center justify-center',
            'cursor-pointer',
            sizeStyle,
            getDateStyles()
        )}>
            {props.date.getDate()}
        </div>
    )
}

function Day(props: DayProps, sizeStyle: string) {
    return <div className={cn(
        'rounded-full text-center',
        sizeStyle,
    )}>
        {props.date.getDate()}
    </div>
}

// 날짜 표현 방식
// 기본적으로 text-body2m


// 오늘
// props.date === 오늘
// color-text-info color-bg-info-subtle rounded-full

// 일반 날짜
// props.date.month === props.displayMonth
// color-text-tertiary 

// 해당 달이 아닌 날짜
// props.date.month !== props.displayMonth
// color-text-disabled

// 기간
// from to 비교
// 기간 시작일
// color-bg-secondary rounded-l-full
// 기간 중간일
// color-bg-secondary rounded-none
// 기간 마지막일
// color-bg-secondary rounded-r-full
// 기간 단일날짜
// color-bg-secondary rounded-full