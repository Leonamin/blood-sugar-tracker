import React, { useEffect, useState } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";
import SolidButton from "@/1_components/ui/button/solid-button";
import { dateToEndUnixTimestamp, dateToStartUnixTimestamp, dateToUnixTimestamp } from "@/0_model/types/unixtimestamp";
import BloodSugarRecordTile from "@/6_view/home/0_components/BloodSugarRecordTile";
import BloodSugarInputForm from "@/6_view/home/0_components/BloodSugarInputForm";
import { IndicatorStep } from "@/0_model/types/indicatorStep";
import { cn } from "@/lib/utils";
import { DropdownData } from "@/1_components/ui/dropdown/dropdown";
import { ChipDropdown } from "@/1_components/ui/dropdown/chip-dropdown";
import HomeKeyboardHeader from '@/6_view/home/0_components/HomeKeyboardHeader';
import { BloodSugarCategory } from "@/0_model/types/bloodSugarCategory";
import { GlucoseLevel } from "@/0_model/types/glucoseLevel";
import { usePageVisibility } from "@/3_hook/usePageVisibility";

const Home = () => {
  const { bloodSugars, loading, fetchBloodSugars, addBloodSugar } = useHome();
  const [value, setValue] = useState("0");
  const [memo, setMemo] = useState("");
  const visibilityState = usePageVisibility();

  const [today, setToday] = useState(new Date());

  useEffect(() => {
    setToday(new Date());
  }, [visibilityState]);

  // today를 2024-12-20 형식으로 환
  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    fetchBloodSugars({
      from: dateToStartUnixTimestamp(today),
      to: dateToEndUnixTimestamp(today),
    });
  }, [today]);

  useEffect(() => {
    fetchBloodSugars({
      from: dateToStartUnixTimestamp(today),
      to: dateToEndUnixTimestamp(today),
    });
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;

    processFormSubmit();
  };

  const handleSave = async () => {
    await processFormSubmit();
  }

  const processFormSubmit = async () => {
    await addBloodSugar(parseInt(value), memo);
    await fetchBloodSugars({
      from: dateToStartUnixTimestamp(today),
      to: dateToEndUnixTimestamp(today),
    });

    // 입력 폼 초기화
    setValue("");
    setMemo("");
  }

  const handleMemoVisibleChanged = (visible: boolean) => {
    if (!visible) {
      // 메모가 닫힐 때 BloodSugarInputForm에 포커스
      const inputElement = document.querySelector('input[type="number"]');
      if (inputElement instanceof HTMLInputElement) {
        inputElement.focus();
      }
    }
  }

  const maxValue = 400;
  const handleValueChange = (value: string) => {
    const parsedValue = parseInt(value);
    if (parsedValue > maxValue) {
      setValue(maxValue.toString());
    } else {
      setValue(value);
    }
  }

  const valueToStep = (value: number): IndicatorStep | undefined => {
    if (value === 0) return undefined
    const category = selectedCategory.data;
    
    const glucoseLevel = BloodSugarCategory.getGlucoseLevel(category, value);
    return GlucoseLevel.getIndicatorStep(glucoseLevel);
  }


  const categoryData: DropdownData[] = [
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.Normal), data: BloodSugarCategory.Normal },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.PostMeal2Hours), data: BloodSugarCategory.PostMeal2Hours },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.Fasting), data: BloodSugarCategory.Fasting },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.BeforeExercise), data: BloodSugarCategory.BeforeExercise },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.AfterExercise), data: BloodSugarCategory.AfterExercise },
  ];

  const [selectedCategory, setSelectedCategory] = useState<DropdownData>(
    categoryData[0]
  );


  if (loading) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "color-bg-primary min-h-screen",
        "px-4",
      )}
    >
      <div
        className="overflow-y-auto bottom-nav-space">

        <div className={cn(
          "flex items-center justify-between",
          "py-3 mb-3"
        )}>
          <span className="text-h5b color-text-primary">
            {getFormattedDate(today)}
          </span>
          <ChipDropdown
            data={categoryData}
            selectedData={selectedCategory}
            placeholder="선택"
            onSelect={setSelectedCategory}
            variant="brand"
          />
        </div>
        <form onSubmit={handleFormSubmit} className="mb-4">
          <BloodSugarInputForm
            value={value}
            onChange={handleValueChange}
            valueToStep={valueToStep}
          />
        </form>
        {bloodSugars.length > 0 && <div>
          <span
            className="text-body1sb color-text-primary py-2">내 기록</span>
          <ul>
            {bloodSugars.map((sugar) => (
              <li key={sugar.uid} className="pb-2">
                <BloodSugarRecordTile bloodSugar={sugar} />
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <HomeKeyboardHeader onTapSave={handleSave} memo={memo} onMemoVisibleChanged={handleMemoVisibleChanged} />
    </div>
  );
}

export default Home;