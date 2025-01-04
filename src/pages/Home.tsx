import React, { useEffect, useMemo, useState } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";
import {
  dateToEndUnixTimestamp,
  dateToStartUnixTimestamp,
} from "@/0_model/types/unixtimestamp";
import BloodSugarRecordTile from "@/6_view/home/0_components/BloodSugarRecordTile";
import BloodSugarInputForm from "@/6_view/home/0_components/BloodSugarInputForm";
import { cn } from "@/lib/utils";
import {
  DropdownChip,
  DropdownData,
  DropdownList,
  DropdownProvider,
} from "@/1_components/ui/dropdown/dropdown";
import HomeKeyboardHeader from "@/6_view/home/0_components/HomeKeyboardHeader";
import {
  BloodSugarCategory,
  BloodSugarCategoryUtils,
} from "@/0_model/types/bloodSugarCategory";
import { usePageVisibility } from "@/3_hook/usePageVisibility";
import { Utils } from "@/7_utils/utils";
import { useNavigate } from "react-router-dom";
import BloodSugarModel from "@/0_model/model/bloodSugarModel";
import { NavigatorUtils } from "@/7_utils/navigatorUtils";

const Home = () => {
  const { bloodSugars, fetchBloodSugars, addBloodSugar, deleteBloodSugar } =
    useHome();
  const [value, setValue] = useState("0");
  const [memo, setMemo] = useState("");
  const [category, setCategory] = useState(BloodSugarCategory.Fasting);
  const visibilityState = usePageVisibility();
  const navigate = useNavigate();

  const [today, setToday] = useState(new Date());

  useEffect(() => {
    setToday(new Date());
  }, [visibilityState]);

  // today를 2024-12-20 형식으로 환
  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
  };

  const handleDelete = async (id: string) => {
    await deleteBloodSugar(id);
    await fetchBloodSugars({
      from: dateToStartUnixTimestamp(today),
      to: dateToEndUnixTimestamp(today),
    });
  };

  const handleEdit = async (id: string) => {
    NavigatorUtils.navigateToBsDetail(navigate, id);
  };

  const processFormSubmit = async () => {
    console.log(memo);
    if (Utils.isNaN(parseInt(value))) return;

    await addBloodSugar(parseInt(value), selectedCategory.value, memo);
    await fetchBloodSugars({
      from: dateToStartUnixTimestamp(today),
      to: dateToEndUnixTimestamp(today),
    });

    // 입력 폼 초기화
    setValue("");
    setMemo("");
  };

  const handleMemoVisibleChanged = (visible: boolean) => {
    if (!visible) {
      // 메모가 닫힐 때 BloodSugarInputForm에 포커스
      const inputElement = document.querySelector('input[type="number"]');
      if (inputElement instanceof HTMLInputElement) {
        inputElement.focus();
      }
    }
  };

  const maxValue = 400;
  const handleValueChange = (value: string) => {
    const parsedValue = parseInt(value);
    if (parsedValue > maxValue) {
      setValue(maxValue.toString());
    } else {
      setValue(value);
    }
  };

  const categoryData = useMemo(
    () => [
      {
        label: BloodSugarCategoryUtils.getLabel(BloodSugarCategory.Fasting),
        value: BloodSugarCategory.Fasting,
      },
      {
        label: BloodSugarCategoryUtils.getLabel(
          BloodSugarCategory.PostMeal2Hours
        ),
        value: BloodSugarCategory.PostMeal2Hours,
      },
    ],
    []
  );

  const selectedCategory = useMemo(() => 
    categoryData.find((data) => data.value === category) || categoryData[0]
  , [category, categoryData]);

  const handleCategoryChange = (category: DropdownData<BloodSugarCategory>) => {
    setCategory(category.value);
  };

  return (
    <div className={cn("color-bg-primary min-h-screen", "px-4", "relative")}>
      {/* {loading && <LoadingOverlay />} */}
      <div className="overflow-y-auto bottom-nav-space">
        <div className={cn("flex items-center justify-between", "py-3 mb-3")}>
          <span className="text-h5b color-text-primary">
            {getFormattedDate(today)}
          </span>
          <DropdownProvider
            data={categoryData}
            selectedData={selectedCategory}
            onSelect={handleCategoryChange}
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
        {bloodSugars.length > 0 && (
          <div>
            <span className="text-body1sb color-text-primary py-2">
              내 기록
            </span>
            <ul>
              {bloodSugars.map((sugar) => (
                <li key={sugar.uid} className="pb-2">
                  <BloodSugarRecordTile
                    bloodSugar={sugar as BloodSugarModel}
                    onDelete={() => {
                      handleDelete(sugar.uid);
                    }}
                    onEdit={() => {
                      handleEdit(sugar.uid);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <HomeKeyboardHeader
        onTapSave={handleSave}
        memo={memo}
        onMemoChanged={setMemo}
        onMemoVisibleChanged={handleMemoVisibleChanged}
      />
    </div>
  );
};

export default Home;
