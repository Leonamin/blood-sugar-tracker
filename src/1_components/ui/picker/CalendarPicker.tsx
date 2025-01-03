import { Time } from '@/0_model/types/Time';
import { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker'
import SolidButton from '../button/solid-button';
import BottomSheet, { BottomSheetProvider, useBottomSheet } from '../overlay/bottomsheet/BottomSheet';
import { MonthlyCalendar, MonthlyCalendarHeader, MonthlyCalendarProvider } from '../calendar/MonthlyCalendar';



interface CalendarPickerProps {
  child: React.ReactNode;
  initialValue: Date;
  onChange?: (value: Date) => void;
  onComplete?: (value: Date) => void;
  isDisabled?: boolean;
}

const CalendarPickerContent = ({
  child,
  initialValue: value,
  onChange,
  onComplete,
  isDisabled,
}: CalendarPickerProps) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [focusedDay, setFocusedDay] = useState<Date>(new Date());

  const { open, close } = useBottomSheet();

  const handleCancel = () => {
    close();
  }

  const handleComplete = () => {
    onComplete(selectedDay);
    close();
  }


  const BottomButton = () => (
    <div className="flex flex-row gap-2">
      <SolidButton color="outline" fullWidth onClick={handleCancel}>
        취소
      </SolidButton>
      <SolidButton color="primary" fullWidth onClick={handleComplete}>
        확인
      </SolidButton>
    </div>
  )

  return (
    // FIXME 알 수 없는 이유로 <>를 사용하면 top margin이 16px 추가됨
    <div>
      <div onClick={isDisabled ? undefined : open}>{child}</div>
      <BottomSheet>
        <div className="space-y-4">
          <MonthlyCalendarProvider
            selectedDay={selectedDay}
            focusedDay={focusedDay}
            setSelectedDay={setSelectedDay}
            setFocusedDay={setFocusedDay}

          >
            <MonthlyCalendarHeader />
            <MonthlyCalendar
              selectedDay={selectedDay}
              focusedDay={focusedDay}
              setSelectedDay={setSelectedDay}
              setFocusedDay={setFocusedDay}
              dayTileRatioStyle='aspect-square'
            />
          </MonthlyCalendarProvider>
          <BottomButton />
        </div>
      </BottomSheet>

    </ div>
  )
}


const CalendarPicker = (props: CalendarPickerProps) => (
  <BottomSheetProvider>
    <CalendarPickerContent {...props} />
  </BottomSheetProvider>
);

export default CalendarPicker;