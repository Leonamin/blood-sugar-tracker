import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import { cn } from '@/lib/utils';
import { IconChevronLeft, IconChevronRight } from '@/1_components/icons';
import { ClassValue } from 'clsx';
import SolidButton from '../button/solid-button';
import { IndicatorStep } from '@/0_model/types/indicatorStep';
import CircleStepIndicator from '../indicator/circle-step-indicator';

// Context

interface MonthlyCalendarContext {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    focusedDay?: Date;
    setFocusedDay: (date: Date) => void;

    // 날짜 타일 관련
    isOutsideDay: (date: Date) => boolean;
    isSelectedDay: (date: Date) => boolean;
    handleDayClick?: (date: Date) => void;
}

const MonthlyCalendarContext = createContext<MonthlyCalendarContext | null>(null);

const useMonthlyCalendarContext = () => {
    const context = useContext(MonthlyCalendarContext);
    if (!context) {
        throw new Error("MonthlyCalendar 컴포넌트 내부에서만 사용할 수 있습니다");
    }
    return context;
};

// Provider
interface MonthlyCalendarProviderProps {
    selectedDay: Date;
    focusedDay: Date;
    setSelectedDay?: (date: Date) => void;
    setFocusedDay?: (date: Date) => void;
    children?: ReactNode;
}

export const MonthlyCalendarProvider = ({
    selectedDay,
    focusedDay,
    setSelectedDay,
    setFocusedDay,
    children,
}: MonthlyCalendarProviderProps) => {

    const isOutsideDay = (date: Date) => {
        return date.getMonth() !== focusedDay?.getMonth() || date.getFullYear() !== focusedDay?.getFullYear();
    };

    const isSelectedDay = (date: Date) => {
        return selectedDay?.getDate() === date.getDate() &&
            selectedDay?.getMonth() === date.getMonth() &&
            selectedDay?.getFullYear() === date.getFullYear();
    };

    const handleDayClick = (date: Date) => {
        setSelectedDay(date);
        setFocusedDay(date);
    }

    return (
        <MonthlyCalendarContext.Provider value={{
            selectedDay,
            setSelectedDay,
            focusedDay,
            setFocusedDay,
            isOutsideDay,
            isSelectedDay,
            handleDayClick,
        }}>
            {children}
        </MonthlyCalendarContext.Provider>
    );
};

// Component


interface MonthlyCalendarProps {
    className?: string;
    children?: ReactNode;
    hideOutSideDays?: boolean;
    dayTileRatioStyle?: string;
    normalDateStyle?: ClassValue;
    selectedDateStyle?: ClassValue;
    outsideDateStyle?: ClassValue;
    dayTileBuilder?: (date: Date) => ReactNode;
}

export const MonthlyCalendar = ({
    className,
    hideOutSideDays = false,
    dayTileRatioStyle = 'aspect-[1/1.2]',
    dayTileBuilder = (date: Date) =>
        <MonthlyDayTile
            date={date}
            dayTileRatioStyle="aspect-[1/1.2]"
            normalDateStyle="text-body2 font-semibold"
            selectedDateStyle="border-2 color-border-success color-bg-success-subtle rounded-full"
            outsideDateStyle="color-text-disabled"
        />
}: MonthlyCalendarProps) => {
    const { selectedDay, focusedDay, setSelectedDay, setFocusedDay } = useMonthlyCalendarContext();

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days: (Date | null)[] = [];

        const addPreviousMonthDays = () => {
            const firstDayOfWeek = firstDay.getDay();
            for (let i = firstDayOfWeek - 1; i >= 0; i--) {
                const prevDate = new Date(year, month, -i);
                days.push(hideOutSideDays ? null : prevDate);
            }
        };

        const addCurrentMonthDays = () => {
            for (let i = 1; i <= lastDay.getDate(); i++) {
                days.push(new Date(year, month, i));
            }
        };

        const addNextMonthDays = () => {
            const lastDayOfWeek = lastDay.getDay();
            for (let i = 1; i < (7 - lastDayOfWeek); i++) {
                const nextDate = new Date(year, month + 1, i);
                days.push(hideOutSideDays ? null : nextDate);
            }
        };

        addPreviousMonthDays();
        addCurrentMonthDays();
        addNextMonthDays();

        return days;
    };

    // 날짜 상태
    const days = getDaysInMonth(focusedDay || new Date());

    const WeekRow = () => {
        const weekDays = {
            ko: ['일', '월', '화', '수', '목', '금', '토'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ja: ['日', '月', '火', '水', '木', '金', '土'],
            zh: ['日', '一', '二', '三', '四', '五', '六']
        }

        const language = navigator.language.split('-')[0] as keyof typeof weekDays;
        const days = weekDays[language] || weekDays.en;

        return days.map((day, i) => (
            <div
                key={day}
                className="text-center text-sm font-medium py-3"
            >
                {day}
            </div>
        ))
    }

    return (
        <div className={cn("w-full",
            "box-border",
            "space-y-2",
            className,
        )}>
            <div className="grid grid-cols-7">
                <WeekRow />
                {days.map((date, i) => {
                    if (!date) return <div key={`empty-${i}`} />;

                    return dayTileBuilder(date);  // 커스텀 빌더 사용
                })}
            </div>
        </div>
    );
};


export const MonthlyCalendarHeader = ({
    className,
}: {
    className?: string;
}) => {
    const { focusedDay, setFocusedDay, setSelectedDay } = useMonthlyCalendarContext();
    const today = focusedDay || new Date();

    const handleChevronClick = (direction: 'left' | 'right') => {
        const months = direction === 'left' ? -1 : 1;
        setFocusedDay(addMonths(today, months));
    };

    const handleTodayButtonClick = () => {
        setFocusedDay(new Date());
        setSelectedDay(new Date());
    }

    const getDisplayMonth = (date: Date) => {
        /// 기기의 언어에 따라 월 표기를 변경
        const language = navigator.language;
        return `${date.toLocaleDateString(language, { month: 'long' })} ${date.getFullYear()}`;
    }

    const iconSize = 24;

    return (
        <div className={cn(
            "flex items-center justify-between",
            className,
        )}>
            <div className="flex items-center justify-start">
                <div className="flex items-center gap-1">
                    <button className="cursor-pointer" onClick={() => handleChevronClick('left')}>
                        <IconChevronLeft size={iconSize} />
                    </button>
                    <div className="text-h5b">
                        {getDisplayMonth(today)}
                    </div>
                    <button className="cursor-pointer" onClick={() => handleChevronClick('right')}>
                        <IconChevronRight size={iconSize} />
                    </button>
                </div>
            </div>
            <SolidButton
                color="outline"
                size="40"
                onClick={() => handleTodayButtonClick()}
            >
                오늘
            </SolidButton>
        </div>

    )
}

interface DayTileProps {
    date: Date;
    dayTileRatioStyle: ClassValue;
    normalDateStyle: ClassValue;
    selectedDateStyle: ClassValue;
    outsideDateStyle: ClassValue;
}

const MonthlyDayTile = ({
    date,
    dayTileRatioStyle = "aspect-[1/1.2]",
    normalDateStyle,
    selectedDateStyle,
    outsideDateStyle,
}: DayTileProps) => {
    const { isOutsideDay, isSelectedDay, handleDayClick } = useMonthlyCalendarContext();

    const isOutside = isOutsideDay(date);
    const isSelected = isSelectedDay(date);

    return (
        <button
            key={date.toISOString()}
            onClick={() => handleDayClick?.(date)}
            className={cn(
                "flex items-center justify-center relative",
                dayTileRatioStyle,
                normalDateStyle,
                isSelected && selectedDateStyle,
                isOutside && outsideDateStyle,
            )}
        >
            {format(date, 'd')}
        </button>
    );
}

interface MonthlyDayTileWithIndicatorProps {
    date: Date;
    dayTileRatioStyle: ClassValue;
    indicatorStep: IndicatorStep;
    hasMemo: boolean;
}

export const MonthlyDayTileWithIndicator = ({
    date,
    dayTileRatioStyle = "aspect-[1/1.2]",
    indicatorStep,
    hasMemo
}: MonthlyDayTileWithIndicatorProps) => {
    const { isOutsideDay, isSelectedDay, handleDayClick } = useMonthlyCalendarContext();

    const { normalDateStyle,
        selectedDateStyle,
        outsideDateStyle } = {
        normalDateStyle: "text-body2 font-semibold",
        selectedDateStyle: "border-2 color-border-success color-bg-success-subtle rounded-full",
        outsideDateStyle: "color-text-disabled",
    }

    const isOutside = isOutsideDay(date);
    const isSelected = isSelectedDay(date);

    const hasIndicator = indicatorStep > 0;

    return (
        <button
            key={date.toISOString()}
            onClick={() => handleDayClick?.(date)}
            className={cn(
                "flex items-center justify-center relative",
                dayTileRatioStyle,
                normalDateStyle,
                isSelected && selectedDateStyle,
                isOutside && outsideDateStyle,
            )}
        >

            {hasIndicator && <CircleStepIndicator step={indicatorStep}>
                {format(date, 'd')}
            </CircleStepIndicator>}
            {!hasIndicator && format(date, 'd')}

        </button>
    );
}