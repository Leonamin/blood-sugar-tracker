import { Time, TimeUtils } from "@/0_model/types/Time";
import { useEffect, useState } from "react";
import Picker from "react-mobile-picker";
import SolidButton from "../button/solid-button";
import BottomSheet, {
  BottomSheetProvider,
  useBottomSheet,
} from "../overlay/bottomsheet/BottomSheet";

interface TimePickerProps {
  child: React.ReactNode;
  initialValue: Time;
  onChange?: (value: Time) => void;
  onComplete?: (value: Time) => void;
  isDisabled?: boolean;
  is24Hour?: boolean;
}

/// FIXME 12시간 모드가 불완전함
const TimePickerContent = ({
  child,
  initialValue: value,
  onChange,
  onComplete,
  isDisabled,
  is24Hour = true,
}: TimePickerProps) => {
  const selections: Record<keyof Time, string[]> =
    TimeUtils.getTimeSelections(is24Hour);

  const [selectedTime, setSelectedTime] = useState(
    TimeUtils.timeToStringObject(value)
  );

  const [selectedAmPm, setSelectedAmPm] = useState(
    value.hour >= 12 ? "PM" : "AM"
  );

  useEffect(() => {
    setSelectedTime(TimeUtils.timeToStringObject(value));
  }, [value]);

  const handleChange = (value: Record<string, string>, key: string) => {
    let newTime = { ...selectedTime };

    switch (key) {
      case "hour":
        newTime = { ...newTime, hour: value.hour };
        break;
      case "minute":
        newTime = { ...newTime, minute: value.minute };
        break;
      case "ampm": {
        setSelectedAmPm(value.ampm);
        const existingHour = parseInt(selectedTime.hour);
        
        if (value.ampm === "PM" && existingHour < 12) {
          newTime = { ...newTime, hour: (existingHour + 12).toString() };
        } else if (value.ampm === "AM" && existingHour >= 12) {
          newTime = { ...newTime, hour: (existingHour - 12).toString() };
        }
        break;
      }
    }

    setSelectedTime(newTime);
    
    if (onChange) {
      onChange(TimeUtils.stringToTime(newTime));
    }
  };

  const { open, close } = useBottomSheet();

  const handleCancel = () => {
    close();
  };

  const handleComplete = () => {
    onComplete(TimeUtils.stringToTime(selectedTime));
    close();
  };

  const BottomButton = () => (
    <div className="flex flex-row gap-2">
      <SolidButton color="outline" fullWidth onClick={handleCancel}>
        취소
      </SolidButton>
      <SolidButton color="primary" fullWidth onClick={handleComplete}>
        확인
      </SolidButton>
    </div>
  );

  return (
    // FIXME 알 수 없는 이유로 <>를 사용하면 top margin이 16px 추가됨
    <div>
      <div onClick={isDisabled ? undefined : open}>{child}</div>
      <BottomSheet>
        <Picker
          value={{
            hour: selectedTime.hour.toString(),
            minute: selectedTime.minute.toString(),
            ampm: selectedAmPm,
          }}
          onChange={handleChange}
        >
          <Picker.Column key="hour" name="hour">
            {selections.hour.map((hour) => (
              <Picker.Item key={hour} value={hour}>
                {hour}
              </Picker.Item>
            ))}
          </Picker.Column>
          <Picker.Column key="minute" name="minute">
            {selections.minute.map((minute) => (
              <Picker.Item key={minute} value={minute}>
                {minute}
              </Picker.Item>
            ))}
          </Picker.Column>
          {!is24Hour && (
            <Picker.Column key="ampm" name="ampm">
              <Picker.Item key="AM" value="AM">
                AM
              </Picker.Item>
              <Picker.Item key="PM" value="PM">
                PM
              </Picker.Item>
            </Picker.Column>
          )}
          {/* {Object.keys(selections).map(name => (
            <Picker.Column key={name} name={name}>
              {(selections[name] as string[]).map(option => (
                <Picker.Item key={option} value={option}>
                  {option}
                </Picker.Item>
              ))}
            </Picker.Column>
          ))} */}
        </Picker>
        <BottomButton />
      </BottomSheet>
    </div>
  );
};

const TimePicker = (props: TimePickerProps) => (
  <BottomSheetProvider>
    <TimePickerContent {...props} />
  </BottomSheetProvider>
);

export default TimePicker;
