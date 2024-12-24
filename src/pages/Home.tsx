import React, { useEffect, useState } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";
import { dateToEndUnixTimestamp, dateToStartUnixTimestamp, dateToUnixTimestamp } from "@/0_model/types/unixtimestamp";
import BloodSugarRecordTile from "@/6_view/home/0_components/BloodSugarRecordTile";
import BloodSugarInputForm from "@/6_view/home/0_components/BloodSugarInputForm";
import { cn } from "@/lib/utils";
import { DropdownChip, DropdownData, DropdownList, DropdownProvider } from "@/1_components/ui/dropdown/dropdown";
import HomeKeyboardHeader from '@/6_view/home/0_components/HomeKeyboardHeader';
import { BloodSugarCategory } from "@/0_model/types/bloodSugarCategory";
import { usePageVisibility } from "@/3_hook/usePageVisibility";

const Home = () => {
  const { bloodSugars, loading, fetchBloodSugars, addBloodSugar, deleteBloodSugar } = useHome();
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

  const handleDelete = async (id: string) => {
    await deleteBloodSugar(id);
    await fetchBloodSugars({
      from: dateToStartUnixTimestamp(today),
      to: dateToEndUnixTimestamp(today),
    });
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


  const categoryData: DropdownData<BloodSugarCategory>[] = [
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.Normal), value: BloodSugarCategory.Normal },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.PostMeal2Hours), value: BloodSugarCategory.PostMeal2Hours },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.Fasting), value: BloodSugarCategory.Fasting },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.BeforeExercise), value: BloodSugarCategory.BeforeExercise },
    { label: BloodSugarCategory.getLabel(BloodSugarCategory.AfterExercise), value: BloodSugarCategory.AfterExercise },
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
          <DropdownProvider
            data={categoryData}
            selectedData={selectedCategory}
            onSelect={setSelectedCategory}
          >
            <DropdownChip placeholder="선택" />
            <DropdownList data={categoryData} />
          </DropdownProvider>
        </div>
        <form onSubmit={handleFormSubmit} className="mb-4">
          <BloodSugarInputForm
            value={value}
            onChange={handleValueChange}
            bloodSugarCategory={selectedCategory.value}
          />
        </form>
        {bloodSugars.length > 0 && <div>
          <span
            className="text-body1sb color-text-primary py-2">내 기록</span>
          <ul>
            {bloodSugars.map((sugar) => (
              <li key={sugar.uid} className="pb-2">
                <BloodSugarRecordTile bloodSugar={sugar} bloodSugarCategory={selectedCategory.value} 
                  onDelete={() => {
                    handleDelete(sugar.uid);
                  }}
                  onEdit={() => {
                    console.log("edit");
                  }}
                />
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