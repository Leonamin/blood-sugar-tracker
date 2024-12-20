import { useState } from 'react';
import SemiCircleStepIndicator from '@/1_components/ui/indicator/semi-circle-step-indicator';
import type { BloodSugarUnit } from '@/0_model/types/bloodSugarUnit';
import { twMerge } from 'tailwind-merge';
import { IndicatorStep } from '@/0_model/types/indicatorStep';

interface BloodSugarInputFormProps {
  defaultValue?: number;
  unit?: BloodSugarUnit;
  onChange?: (value: number) => void;
  valueToStep?: (value: number) => IndicatorStep;
}

export default function BloodSugarInputForm({
  defaultValue = 0,
  unit = 'mg/dL',
  onChange,
  valueToStep,
}: BloodSugarInputFormProps) {
  const [value, setValue] = useState<string>(defaultValue.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // 숫자와 소수점만 허용
    if (!/^\d*\.?\d{0,1}$/.test(newValue)) return;
    
    // 입력값이 비어있거나 '.' 로 시작하는 경우 '0' 또는 '0.'으로 설정
    if (newValue === '' || newValue === '.') {
      setValue('0');
      onChange?.(0);
      return;
    }

    // 앞의 불필요한 0 제거 (소수점이 있는 경우 제외)
    const formattedValue = newValue.includes('.')
      ? newValue
      : newValue.replace(/^0+(\d)/, '$1');
    
    setValue(formattedValue);
    onChange?.(parseFloat(formattedValue));
  };

  const step = valueToStep?.(parseFloat(value)) ?? 1;

  return (
    <div className="relative flex flex-col items-center">
      <SemiCircleStepIndicator step={step} />
      
      <div className="absolute bottom-0 flex items-center gap-1">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          maxLength={5}
          className={twMerge(
            "w-16 bg-transparent text-center outline-none caret-bg-brand",
            "text-h3b text-right color-text-primary",
            "[caret-width:3px]"
          )}
        />
        <span className="text-body-1m color-text-tertiary">
          {unit}
        </span>
      </div>
    </div>
  );
}
