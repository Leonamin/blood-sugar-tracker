import { Time } from '@/0_model/types/Time';
import { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker'



interface TimePickerProps {
  value: Time;
  onChange: (value: Time) => void;
}

const TimeScrollPicker = ({
  value,
  onChange,
}: TimePickerProps) => {
  const selections: Record<keyof Time, string[]> = Time.selections;
  
  const [selectedTime, setSelectedTime] = useState(Time.toStringObject(value));

  useEffect(() => {
    setSelectedTime(Time.toStringObject(value));
  }, [value]);

  const handleChange = (
    value: Record<keyof Time, string>, key: string
  ) => {
    console.log('handleChange', value, key);
    const newTime = Time.toTime(value);
    setSelectedTime(Time.toStringObject(newTime));
    onChange(newTime);
  }

  return (
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
  )
}

export default TimeScrollPicker;