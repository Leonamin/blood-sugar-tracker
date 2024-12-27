import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useBloodSugarRecordDetail } from '@/5_viewmodels/bloodSugarRecordDetail/useBloodSugarRecordDetail';
import AppBar from '@/1_components/ui/layout/appBar';
import Snackbar from '@/1_components/ui/overlay/snackbar/snackbar';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { IconCalendar, IconClock } from '@/1_components/icons';
import MultilineTextForm from '@/1_components/ui/form/multiline-text-form';
import SolidButton from '@/1_components/ui/button/solid-button';

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

const BloodSugarRecordDetail = () => {
  const location = useLocation();
  const {
    recordDetail,
    fetchRecordDetail,
    updateBloodSugar,
    deleteBloodSugar,
  } = useBloodSugarRecordDetail();

  // 쿼리 파라미터에서 uid 추출
  const query = new URLSearchParams(location.search);
  const uid = query.get('id');
  const unit = query.get('unit') || 'mg/dL';

  useEffect(() => {
    fetchRecordDetail(uid);
  }, []);

  const GlucoseStatusBar = (): ReactNode => {
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




  const GlucoseData = (): ReactNode => (
    <div
      className="flex flex-col space-y-2"
    >
      <LabelTitle label="혈당" />
      <PlaceholderCard
        bgColor="color-bg-inverse"
        borderColor="color-border-primary"
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-body2r color-text-primary">{recordDetail?.value}</span>
          <span className="text-caption1r color-text-primary">{unit}</span>
        </div>
      </PlaceholderCard>
      <GlucoseStatusBar />
    </div>
  )

  const RecordDate = (): ReactNode => {
    return (
      <div className="flex gap-3">
        <div className="flex flex-col flex-1">
          <LabelTitle label="날짜" />
          <PlaceholderCard
            bgColor="color-bg-disabled"
            borderColor="color-border-disabled"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-body2r color-text-primary">날짜~</span>
              <IconCalendar size={16} />
            </div>
          </PlaceholderCard>
        </div>
        <div className="flex flex-col flex-1">
          <LabelTitle label="시간" />
          <PlaceholderCard
            bgColor="color-bg-disabled"
            borderColor="color-border-disabled"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-body2r color-text-primary">시간~</span>
              <IconClock size={16} />
            </div>
          </PlaceholderCard>
        </div>
      </div>
    );
  }

  const RecordDetail = (): ReactNode => {
    return (
      <div className="flex flex-col space-y-8">
        <GlucoseData />
        <RecordDate />
        <MemoSection />
      </div>
    )
  }

  const MemoSection = (): ReactNode => {
    return (
      <div className="flex flex-col space-y-2">
        <LabelTitle label="메모" />
        <MultilineTextForm
          value={recordDetail?.memo || ''}
          placeholder="메모를 입력해주세요."
          handleChange={() => { }}
        />
      </div>
    )
  }


  const BottomButtons = (): ReactNode => {
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
          onClick={() => { }}
        >
          삭제
        </SolidButton>
        <SolidButton
          fullWidth
          size="48"
          color="primary"
          onClick={() => { }}
        >
          수정
        </SolidButton>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <AppBar title="기록 상세" />
      <main className="flex-1 p-4 px-4 pt-[calc(56px+16px)]">
        <RecordDetail />
      </main>
      <BottomButtons />
    </div >
  );
};

export default BloodSugarRecordDetail; 