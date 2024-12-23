import React, { useEffect, useState } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";
import SolidButton from "@/1_components/ui/button/solid-button";
import { dateToUnixTimestamp } from "@/0_model/types/unixtimestamp";
import BloodSugarRecordTile from "@/6_view/home/0_components/BloodSugarRecordTile";
import BloodSugarInputForm from "@/6_view/home/0_components/BloodSugarInputForm";
import { IndicatorStep } from "@/0_model/types/indicatorStep";
import { cn } from "@/lib/utils";
import { DropdownData } from "@/1_components/ui/dropdown/dropdown";
import { ChipDropdown } from "@/1_components/ui/dropdown/chip-dropdown";
import HomeKeyboardHeader from '@/6_view/home/0_components/HomeKeyboardHeader';

const Home = () => {
  const { bloodSugars, loading, fetchBloodSugars, addBloodSugar } = useHome();
  const [value, setValue] = useState("");
  const [memo, setMemo] = useState("");

  const startDate = new Date(new Date().setDate(new Date().getDate() - 15));
  const endDate = new Date(new Date().setDate(new Date().getDate() + 15));

  const today = new Date();

  // today를 2024-12-20 형식으로 변환
  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    fetchBloodSugars({
      from: dateToUnixTimestamp(startDate),
      to: dateToUnixTimestamp(endDate),
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;

    await addBloodSugar(parseInt(value), memo);
    await fetchBloodSugars({
      from: dateToUnixTimestamp(startDate),
      to: dateToUnixTimestamp(endDate),
    });

    // 입력 폼 초기화
    setValue("");
    setMemo("");
  };

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
    if (value > 200) {
      return 4;
    } else if (value > 150) {
      return 3;
    } else if (value > 100) {
      return 2;
    } else if (value > 0) {
      return 1;
    }

    return undefined;
  }


  const categoryData: DropdownData[] = [
    { label: "기본", data: 1 },
    { label: "식후 2시간", data: 2 },
    { label: "공복", data: 3 },
    { label: "운동 전", data: 4 },
    { label: "운동 후", data: 5 },
  ];

  const [selectedCategory, setSelectedCategory] = useState<DropdownData>(
    categoryData[0]
  );


  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 color-bg-primary pb-20 min-h-screen">
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
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="space-y-4">
          <BloodSugarInputForm
            value={value}
            onChange={handleValueChange}
            valueToStep={valueToStep}
          />
          <SolidButton
            color="primary"
            onClick={handleSubmit}
          >
            기록하기
          </SolidButton>
        </div>
      </form>
      {bloodSugars.length > 0 && <div>
        <span
          className="text-body1sb color-text-primary py-2">내 기록</span>
        <ul className="space-y-2">
          {bloodSugars.map((sugar) => (
            <li key={sugar.uid}>
              <BloodSugarRecordTile bloodSugar={sugar} />
            </li>
          ))}
        </ul>
      </div>}
      <HomeKeyboardHeader onSave={() => handleSubmit} />
    </div>
  );
}

export default Home;