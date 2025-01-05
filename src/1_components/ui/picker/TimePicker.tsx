import { Time, TimeUtils } from '@/0_model/types/Time';
import { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker'
import SolidButton from '../button/solid-button';
import BottomSheet, { BottomSheetProvider, useBottomSheet } from '../overlay/bottomsheet/BottomSheet';



interface TimePickerProps {
  child: React.ReactNode;
  initialValue: Time;
  onChange?: (value: Time) => void;
  onComplete?: (value: Time) => void;
  isDisabled?: boolean;
}

const TimePickerContent = ({
  child,
  initialValue: value,
  onChange,
  onComplete,
  isDisabled,
}: TimePickerProps) => {
  const selections: Record<keyof Time, string[]> = TimeUtils.getTimeSelections();

  const [selectedTime, setSelectedTime] = useState(TimeUtils.timeToStringObject(value));

  useEffect(() => {
    setSelectedTime(TimeUtils.timeToStringObject(value));
  }, [value]);

  const handleChange = (
    value: Record<keyof Time, string>, key: string
  ) => {
    const newTime = TimeUtils.stringToTime(value);
    setSelectedTime(TimeUtils.timeToStringObject(newTime));
    onChange(newTime);
  }

  const { open, close } = useBottomSheet();

  const handleCancel = () => {
    close();
  }

  const handleComplete = () => {
    onComplete(TimeUtils.stringToTime(selectedTime));
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
        <Picker value={selectedTime} onChange={handleChange}>
          {Object.keys(selections).map(name => (
            <Picker.Column key={name} name={name}>
              {(selections[name] as string[]).map(option => (
                <Picker.Item key={option} value={option}>
                  {option}
                </Picker.Item>
              ))}
            </Picker.Column>
          ))}
        </Picker>
        <BottomButton />

      </BottomSheet>

    </ div>
  )
}


const TimePicker = (props: TimePickerProps) => (
  <BottomSheetProvider>
    <TimePickerContent {...props} />
  </BottomSheetProvider>
);

export default TimePicker;