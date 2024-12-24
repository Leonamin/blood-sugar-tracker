import { useEffect, useState } from 'react';
import SemiCircleStepIndicator from '@/1_components/ui/indicator/semi-circle-step-indicator';
import type { BloodSugarUnit } from '@/0_model/types/bloodSugarUnit';
import { twMerge } from 'tailwind-merge';
import { BloodSugarCategory } from '@/0_model/types/bloodSugarCategory';
import { GlucoseLevel } from '@/0_model/types/glucoseLevel';

interface BloodSugarInputFormProps {
  value: string;
  unit?: BloodSugarUnit;
  onChange: (value: string) => void;
  bloodSugarCategory: BloodSugarCategory;
  minValue?: number;
}

export default function BloodSugarInputForm({
  value,
  unit = 'mg/dL',
  onChange,
  bloodSugarCategory,
  minValue = 10,
}: BloodSugarInputFormProps) {
  const [localValue, setLocalValue] = useState<string>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // 숫자와 소수점만 허용
    if (!/^\d*\.?\d{0,1}$/.test(newValue)) return;
    
    // 입력값이 비어있거나 '.' 로 시작하는 경우 '0' 또는 '0.'으로 설정
    if (newValue === '' || newValue === '.') {
      setLocalValue('0');
      onChange('0');
      return;
    }

    // 앞의 불필요한 0 제거 (소수점이 있는 경우 제외)
    const formattedValue = newValue.includes('.')
      ? newValue
      : newValue.replace(/^0+(\d)/, '$1');
    
    setLocalValue(formattedValue);
    onChange(formattedValue);
  };

  const parseSafeValue = (value: string) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) return 0;
    return parsedValue;
  }

  const level = BloodSugarCategory.getGlucoseLevel(bloodSugarCategory, parseSafeValue(value));
  const step = parseSafeValue(value) < minValue ? 0 : GlucoseLevel.getIndicatorStep(level);

  return (
    <div className="relative flex flex-col items-center">
      <SemiCircleStepIndicator step={step} />
      
      <div className="absolute bottom-0 flex items-center gap-1">
        <input
          type="number"
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
