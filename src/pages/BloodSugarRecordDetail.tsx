import { useLocation, useNavigate } from "react-router-dom";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useBloodSugarRecordDetail } from "@/5_viewmodels/bloodSugarRecordDetail/useBloodSugarRecordDetail";
import AppBar from "@/1_components/ui/layout/appBar";
import Snackbar from "@/1_components/ui/overlay/snackbar/snackbar";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { IconCalendar, IconClock } from "@/1_components/icons";
import MultilineTextForm from "@/1_components/ui/form/MultilineTextForm";
import SolidButton from "@/1_components/ui/button/solid-button";
import { CRUDType } from "@/0_model/types/CRUDType";
import BloodSugarModel from "@/0_model/model/bloodSugarModel";
import { BloodSugarUnit } from "@/0_model/types/bloodSugarUnit";
import { DateUtils } from "@/7_utils/dateUtils";
import OutlineTextField from "@/1_components/ui/textfield/OutlineTextField";
import {
  DropdownChip,
  DropdownData,
  DropdownList,
  DropdownProvider,
} from "@/1_components/ui/dropdown/dropdown";
import {
  BloodSugarCategory,
  BloodSugarCategoryUtils,
} from "@/0_model/types/bloodSugarCategory";
import { GlucoseLevel } from "@/0_model/types/glucoseLevel";

interface BloodSugarRecordDetailContext {
  recordDetail: BloodSugarModel | null;
  unit: BloodSugarUnit;
  setUnit: (unit: BloodSugarUnit) => void;
  crudType: CRUDType;
  setCrudType: (crudType: CRUDType) => void;
  handleDelete: () => Promise<void>;
  handleUpdate: () => Promise<void>;
  bsValue: string;
  bsIntValue: number;
  setBsValue: (value: string) => void;
  memo: string;
  setMemo: (memo: string) => void;
  category: BloodSugarCategory;
  setCategory: (category: BloodSugarCategory) => void;
  date: Date;
  setDate: (date: Date) => void;
  time: string;
  setTime: (time: string) => void;
}

const BloodSugarRecordDetailContext =
  createContext<BloodSugarRecordDetailContext>({
    recordDetail: null,
    unit: "mg/dL",
    category: BloodSugarCategory.Fasting,
    crudType: CRUDType.Read,
    setCrudType: () => {},
    setUnit: () => {},
    setCategory: () => {},
    handleDelete: () => Promise.resolve(),
    handleUpdate: () => Promise.resolve(),
    bsValue: "",
    bsIntValue: 0,
    setBsValue: () => {},
    memo: "",
    setMemo: () => {},
    date: new Date(),
    setDate: () => {},
    time: "",
    setTime: () => {},
  });

const BloodSugarRecordDetailProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const location = useLocation();

  // 쿼리 파라미터에서 uid 추출
  const query = new URLSearchParams(location.search);
  const uid = query.get("id");
  const initialUnit: BloodSugarUnit =
    (query.get("unit") as BloodSugarUnit) || "mg/dL";

  const { recordDetail, updateBloodSugar, deleteBloodSugar } =
    useBloodSugarRecordDetail(uid);

  const [crudType, setCrudType] = useState<CRUDType>(CRUDType.Read);
  const [unit, setUnit] = useState<BloodSugarUnit>(initialUnit);

  // Create Update 모드를 위한 변수
  const [bsValue, setBsValue] = useState<string>(
    recordDetail?.value.toString() || ""
  );
  const bsIntValue = useMemo(() => {
    const parsed = parseInt(bsValue);
    return isNaN(parsed) ? 0 : parsed;
  }, [bsValue]);

  const [category, setCategory] = useState<BloodSugarCategory>(
    recordDetail?.category || BloodSugarCategory.Fasting
  );
  const [memo, setMemo] = useState<string>(recordDetail?.memo || "");
  const [date, setDate] = useState<Date>(
    recordDetail?.recordedAtToDate() || new Date()
  );
  const [time, setTime] = useState<string>(DateUtils.dateToHM(date) || "");

  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await deleteBloodSugar(uid);
    if (result) {
      navigate(-1);
    }
  };

  const handleUpdate = async () => {
    const result = await updateBloodSugar(uid, {
      value: parseInt(bsValue),
      memo: memo,
      category: category,
      recordedAt: date.toISOString(),
    });

    if (result) {
      setCrudType(CRUDType.Read);
    }
  };

  return (
    <BloodSugarRecordDetailContext.Provider
      value={{
        crudType,
        setCrudType,
        recordDetail,
        unit,
        setUnit,
        handleDelete,
        handleUpdate,
        bsValue,
        setBsValue,
        bsIntValue,
        category,
        setCategory,
        memo,
        setMemo,
        date,
        setDate,
        time,
        setTime,
      }}
    >
      {children}
    </BloodSugarRecordDetailContext.Provider>
  );
};

const useBloodSugarRecordDetailContext = (): BloodSugarRecordDetailContext => {
  const context = useContext(BloodSugarRecordDetailContext);
  if (!context) {
    throw new Error(
      "useBloodSugarRecordDetailContext must be used within a BloodSugarRecordDetailProvider"
    );
  }

  return context;
};

const LabelTitle = ({ label }: { label: string }): ReactNode => (
  <div className="flex items-center gap-0.5">
    <span className="text-body2sb color-text-primary">{label}</span>
    <span className="text-body2sb color-text-brand" aria-hidden="true">
      *
    </span>
  </div>
);

const PlaceholderCard = ({
  children,
  bgColor,
  borderColor,
}: {
  children: ReactNode;
  bgColor: ClassValue;
  borderColor: ClassValue;
}): ReactNode => (
  <div
    className={cn(
      "flex items-center justify-center py-2.5 px-4 rounded-12 border border-solid",
      bgColor,
      borderColor
    )}
  >
    {children}
  </div>
);

const GlucoseStatusBar = (): ReactNode => {
  const { bsIntValue, category } = useBloodSugarRecordDetailContext();

  if (bsIntValue === 0) {
    return null;
  }

  const glucoseLevel = BloodSugarCategoryUtils.getGlucoseLevel(
    category,
    bsIntValue
  );

  if (glucoseLevel === GlucoseLevel.Low) {
    return (
      <Snackbar
        message="저혈당"
        description="혈당이 낮아요."
        type="info"
        showCloseButton={false}
      />
    );
  } else if (glucoseLevel === GlucoseLevel.Normal) {
    return (
      <Snackbar
        message="정상"
        description="혈당이 정상적이에요."
        type="success"
        showCloseButton={false}
      />
    );
  } else if (glucoseLevel === GlucoseLevel.PreDiabetes) {
    return (
      <Snackbar
        message="전당뇨"
        description="혈당이 살짝 높아요."
        type="warning"
        showCloseButton={false}
      />
    );
  } else if (glucoseLevel === GlucoseLevel.Diabetes) {
    return (
      <Snackbar
        message="당뇨병"
        description="혈당이 높아요."
        type="error"
        showCloseButton={false}
      />
    );
  }
};

const SectionGlucoseData = (): ReactNode => {
  const { unit, crudType, bsValue, setBsValue } =
    useBloodSugarRecordDetailContext();

  const isReadOnly = crudType === CRUDType.Read;

  const handleValueChange = (value: string) => {
    const parsedValue = parseInt(value);
    if (parsedValue > 400) {
      setBsValue("400");
    } else {
      setBsValue(value);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <LabelTitle label="혈당" />
      <OutlineTextField
        value={bsValue}
        onChange={(value) => {
          handleValueChange(value);
        }}
        suffix={
          <span className="text-caption1r color-text-primary">{unit}</span>
        }
        readOnly={isReadOnly}
      />
      <GlucoseStatusBar />
    </div>
  );
};

const SectionDate = (): ReactNode => {
  const { date, setDate, time, setTime } = useBloodSugarRecordDetailContext();

  const displayTime = DateUtils.dateToHM(date);
  const displayDate = DateUtils.dateToYMD(date);

  return (
    <div className="flex gap-3">
      <div className="flex flex-col flex-1 space-y-2">
        <LabelTitle label="날짜" />
        <PlaceholderCard
          bgColor="color-bg-disabled"
          borderColor="color-border-disabled"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-body2r color-text-primary">
              {displayDate}
            </span>
            <IconCalendar size={16} />
          </div>
        </PlaceholderCard>
      </div>
      <div className="flex flex-col flex-1 space-y-2">
        <LabelTitle label="시간" />
        <PlaceholderCard
          bgColor="color-bg-disabled"
          borderColor="color-border-disabled"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-body2r color-text-primary">
              {displayTime}
            </span>
            <IconClock size={16} />
          </div>
        </PlaceholderCard>
      </div>
    </div>
  );
};

const SectionMemo = (): ReactNode => {
  const { memo, setMemo, crudType } = useBloodSugarRecordDetailContext();

  const isReadOnly = crudType === CRUDType.Read;

  return (
    <div className="flex flex-col space-y-2">
      <LabelTitle label="메모" />
      <MultilineTextForm
        value={memo}
        placeholder="메모를 입력해주세요."
        handleChange={setMemo}
        readOnly={isReadOnly}
      />
    </div>
  );
};

const RecordDetail = (): ReactNode => {
  // 데이터가 없으면 렌더링하지 않음
  // if (!recordDetail) {
  //   return null;
  // }

  return (
    <div className="flex flex-col space-y-8">
      <SectionGlucoseData />
      <SectionDate />
      <SectionMemo />
    </div>
  );
};

const BottomButtons = (): ReactNode => {
  const { recordDetail, handleDelete, handleUpdate, crudType, setCrudType } =
    useBloodSugarRecordDetailContext();

  // 수정 모드일 때의 버튼
  if (crudType === CRUDType.Update) {
    return (
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0",
          "flex items-center justify-between gap-2",
          "px-4 pt-2 pb-12"
        )}
      >
        <SolidButton
          fullWidth
          size="48"
          color="error"
          onClick={() => {
            setCrudType(CRUDType.Read);
          }}
        >
          수정 취소
        </SolidButton>
        <SolidButton
          fullWidth
          size="48"
          color="primary"
          onClick={() => {
            handleUpdate();
          }}
        >
          수정 완료
        </SolidButton>
      </div>
    );
  }

  // 읽기 모드일 때의 버튼
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0",
        "flex items-center justify-between gap-2",
        "px-4 pt-2 pb-12"
      )}
    >
      <SolidButton
        fullWidth
        size="48"
        color="error"
        onClick={() => {
          handleDelete();
        }}
      >
        삭제
      </SolidButton>
      <SolidButton
        fullWidth
        size="48"
        color="primary"
        onClick={() => {
          setCrudType(CRUDType.Update);
        }}
      >
        수정
      </SolidButton>
    </div>
  );
};

const HeaderActions = (): ReactNode => {
  const { crudType, category, setCategory } =
    useBloodSugarRecordDetailContext();

  const isReadOnly = crudType === CRUDType.Read;

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

  const selectedCategory = useMemo(
    () =>
      categoryData.find((data) => data.value === category) || categoryData[0],
    [category, categoryData]
  );

  const handleCategoryChange = (category: DropdownData<BloodSugarCategory>) => {
    setCategory(category.value);
  };

  return (
    <div className="flex px-4">
      <DropdownProvider
        data={categoryData}
        selectedData={selectedCategory}
        onSelect={handleCategoryChange}
      >
        <DropdownChip placeholder="선택" isDisabled={isReadOnly} />
        <DropdownList data={categoryData} />
      </DropdownProvider>
    </div>
  );
};

const BloodSugarRecordDetail = () => {
  return (
    <BloodSugarRecordDetailProvider>
      <div className="flex flex-col">
        <AppBar
          title="기록 상세"
          isCenter={false}
          actions={<HeaderActions />}
        />
        <main className="flex-1 p-4 px-4 pt-[calc(56px+16px)]">
          <RecordDetail />
        </main>
        <BottomButtons />
      </div>
    </BloodSugarRecordDetailProvider>
  );
};

export default BloodSugarRecordDetail;
