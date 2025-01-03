import { MonthlyCalendar, MonthlyCalendarHeader, MonthlyCalendarProvider } from "@/1_components/ui/calendar/MonthlyCalendar";
import { Card } from "@/1_components/ui/card";
import { useAppDispatch } from "@/3_hook/useAppDispatch";
import { setSelectedDay, setFocusedDay } from "@/8_store/calendar/calendarSlice";
import { RootState } from "@/8_store/store";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

const Calendar = () => {
  const dispatch = useAppDispatch();
  const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);
  const focusedDay = useSelector((state: RootState) => state.calendar.focusedDay);

  const changeSelectedDay = (day: Date) => {
    dispatch(setSelectedDay(day));
  }

  const changeFocusedDay = (day: Date) => {
    dispatch(setFocusedDay(day));
  }

  return (
    <div className={cn(
      "flex flex-col",
      "items-center",
      "justify-start",
      "color-bg-primary",
      "min-h-screen",
      "overflow-y-auto",
      "bottom-nav-space"
    )}>
      <div
        className={cn(
          "w-full",
          "pb-4 rounded-b-24",
          "color-bg-inverse",
          "shadow-shadow4"
        )}
      >
        <MonthlyCalendarProvider
          setSelectedDay={changeSelectedDay}
          setFocusedDay={changeFocusedDay}
        >
          <MonthlyCalendarHeader className="p-4" />
          <MonthlyCalendar
            selectedDay={selectedDay}
            focusedDay={focusedDay}
            setSelectedDay={changeSelectedDay}
            setFocusedDay={changeFocusedDay}
          />
        </MonthlyCalendarProvider>
      </div>
    </div>
  );
};

export default Calendar;