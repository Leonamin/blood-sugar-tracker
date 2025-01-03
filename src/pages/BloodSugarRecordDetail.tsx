import { useLocation, useNavigate } from 'react-router-dom';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useBloodSugarRecordDetail } from '@/5_viewmodels/bloodSugarRecordDetail/useBloodSugarRecordDetail';
import AppBar from '@/1_components/ui/layout/appBar';
import Snackbar from '@/1_components/ui/overlay/snackbar/snackbar';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { IconCalendar, IconClock } from '@/1_components/icons';
import MultilineTextForm from '@/1_components/ui/form/MultilineTextForm';
import SolidButton from '@/1_components/ui/button/solid-button';
import { CRUDType } from '@/0_model/types/CRUDType';
import BloodSugarModel from '@/0_model/model/bloodSugarModel';
import { BloodSugarUnit } from '@/0_model/types/bloodSugarUnit';
import { DateUtils } from '@/7_utils/dateUtils';
import OutlineTextField from '@/1_components/ui/textfield/OutlineTextField';
import { DropdownChip, DropdownData, DropdownList, DropdownProvider } from '@/1_components/ui/dropdown/dropdown';
import { BloodSugarCategory } from '@/0_model/types/bloodSugarCategory';

interface BloodSugarRecordDetailContext {
  recordDetail: BloodSugarModel | null;
  unit: BloodSugarUnit;
  setUnit: (unit: BloodSugarUnit) => void;
  crudType: CRUDType;
  setCrudType: (crudType: CRUDType) => void;
  deleteBloodSugar: (uid: string) => Promise<boolean>;
}

const BloodSugarRecordDetailContext = createContext<BloodSugarRecordDetailContext>({
  recordDetail: null,
  unit: 'mg/dL',
  crudType: CRUDType.Read,
  setCrudType: () => { },
  setUnit: () => { },
  deleteBloodSugar: () => Promise.resolve(false),
});

const BloodSugarRecordDetailProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const location = useLocation();


  // 쿼리 파라미터에서 uid 추출
  const query = new URLSearchParams(location.search);
  const uid = query.get('id');
  const initialUnit: BloodSugarUnit = query.get('unit') as BloodSugarUnit || 'mg/dL';


  const {
    recordDetail,
    updateBloodSugar,
    deleteBloodSugar,
  } = useBloodSugarRecordDetail(uid);

  const [crudType, setCrudType] = useState<CRUDType>(CRUDType.Read);
  const [unit, setUnit] = useState<BloodSugarUnit>(initialUnit);

  return (
    <BloodSugarRecordDetailContext.Provider value={{
      crudType,
      setCrudType,
      recordDetail,
      unit,
      setUnit,
      deleteBloodSugar,
    }}>
      {children}
    </BloodSugarRecordDetailContext.Provider>
  )
}

const useBloodSugarRecordDetailContext = (): BloodSugarRecordDetailContext => {
  const context = useContext(BloodSugarRecordDetailContext);
  if (!context) {
    throw new Error('useBloodSugarRecordDetailContext must be used within a BloodSugarRecordDetailProvider');
  }

  return context;
}

const LabelTitle = ({ label }: { label: string }): ReactNode => (
  <div className="flex items-center gap-0.5">
    <span className="text-body2sb color-text-primary">{label}</span>
    <span className="text-body2sb color-text-brand" aria-hidden="true">*</span>
  </div>
)

const PlaceholderCard = (
  { children,
    bgColor,
    borderColor,
  }: { children: ReactNode, bgColor: ClassValue, borderColor: ClassValue }
): ReactNode => (
  <div className={
    cn(
      "flex items-center justify-center py-2.5 px-4 rounded-12 border border-solid",
      bgColor,
      borderColor,
    )
  }>
    {children}
  </div>
)

const GlucoseStatusBar = (): ReactNode => {
  const { recordDetail, unit } = useBloodSugarRecordDetailContext();

  /// 70 이하 저혈당 70이상 100 정상 100이상 140 전당뇨 140이상 당뇨병
  if (recordDetail?.value < 70) {
    return <Snackbar
      message="저혈당"
      description="혈당이 낮아요."
      type="info"
      showCloseButton={false}
    />
  }
  else if (recordDetail?.value < 100) {
    return <Snackbar
      message="정상"
      description="혈당이 정상적이에요."
      type="success"
      showCloseButton={false}
    />
  } else if (recordDetail?.value <= 140) {
    return <Snackbar
      message="전당뇨"
      description="혈당이 살짝 높아요."
      type="warning"
      showCloseButton={false}
    />
  } else {
    return <Snackbar
      message="당뇨병"
      description="혈당이 높아요."
      type="error"
      showCloseButton={false}
    />
  }
}

const SectionGlucoseData = (): ReactNode => {
  const { recordDetail, unit, crudType } = useBloodSugarRecordDetailContext();

  const isReadOnly = crudType === CRUDType.Read;

  return (
    <div
      className="flex flex-col space-y-2"
    >
      <LabelTitle label="혈당" />
      <OutlineTextField
        value={recordDetail?.value.toString() || ''}
        onChange={(value) => {
        }}
        suffix={<span className="text-caption1r color-text-primary">{unit}</span>}
        readOnly={isReadOnly}
      />
      <GlucoseStatusBar />
    </div>
  )
}

const SectionDate = (): ReactNode => {
  const { recordDetail } = useBloodSugarRecordDetailContext();

  const date = recordDetail?.recordedAtToDate();

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
            <span className="text-body2r color-text-primary">{displayDate}</span>
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
            <span className="text-body2r color-text-primary">{displayTime}</span>
            <IconClock size={16} />
          </div>
        </PlaceholderCard>
      </div>
    </div>
  );
}

const SectionMemo = (): ReactNode => {
  const { recordDetail, crudType } = useBloodSugarRecordDetailContext();

  const isReadOnly = crudType === CRUDType.Read;

  return (
    <div className="flex flex-col space-y-2">
      <LabelTitle label="메모" />
      <MultilineTextForm
        value={recordDetail?.memo || ''}
        placeholder="메모를 입력해주세요."
        handleChange={() => { }}
        readOnly={isReadOnly}
      />
    </div>
  )
}

const RecordDetail = (): ReactNode => {
  const { recordDetail } = useBloodSugarRecordDetailContext();

  // 데이터가 없으면 렌더링하지 않음
  if (!recordDetail) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-8">
      <SectionGlucoseData />
      <SectionDate />
      <SectionMemo />
    </div>
  )
}




const BottomButtons = (): ReactNode => {
  const { recordDetail, deleteBloodSugar, crudType, setCrudType } = useBloodSugarRecordDetailContext();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await deleteBloodSugar(recordDetail.uid);
    if (result) {
      navigate(-1);
    }
  }

  // 수정 모드일 때의 버튼
  if (crudType === CRUDType.Update) {
    return (
      <div className={
        cn(
          "fixed bottom-0 left-0 right-0",
          "flex items-center justify-between gap-2",
          "px-4 pt-2 pb-12",
        )
      }>
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
            // 수정 완료 로직은 추후 구현
          }}
        >
          수정 완료
        </SolidButton>
      </div>
    )
  }

  // 읽기 모드일 때의 버튼
  return (
    <div className={
      cn(
        "fixed bottom-0 left-0 right-0",
        "flex items-center justify-between gap-2",
        "px-4 pt-2 pb-12",
      )
    }>
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
  )
}

const HeaderActions = (): ReactNode => {
  const { crudType } = useBloodSugarRecordDetailContext();

  const isReadOnly = crudType === CRUDType.Read;

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

  return (
    <div className="flex px-4">
      <DropdownProvider
        data={categoryData}
        selectedData={selectedCategory}
        onSelect={setSelectedCategory}
      >
        <DropdownChip placeholder="선택" isDisabled={isReadOnly} />
        <DropdownList data={categoryData} />
      </DropdownProvider>
    </div>
  )
}

const BloodSugarRecordDetail = () => {
  return (
    <BloodSugarRecordDetailProvider>
      <div className="flex flex-col">
        <AppBar title="기록 상세"
          isCenter={false}
          actions={
            <HeaderActions />
          }
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