import SolidButton from '@/1_components/ui/button/solid-button';
import MultilineTextForm from '@/1_components/ui/form/multiline-text-form';
import { useKeyboardDetect } from '@/hooks/useKeyboardDetect';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface HomeKeyboardHeaderProps {
  memo?: string;
  onMemoChanged?: (memo: string) => void;
  onTapSave?: () => void;
  onMemoVisibleChanged?: (visible: boolean) => void;
}

export default function HomeKeyboardHeader({
  memo,
  onTapSave,
  onMemoVisibleChanged,
  onMemoChanged,
}: HomeKeyboardHeaderProps) {
  const isKeyboardVisible = useKeyboardDetect();
  const [isMemoVisible, setIsMemoVisible] = useState(false);

  const handleClickMemo = () => {
    setIsMemoVisible(!isMemoVisible);
    onMemoVisibleChanged?.(!isMemoVisible);
  };

  return (
    <div
      className={twMerge(
        'fixed z-50 left-0 right-0 transition-all duration-300 ease-in-out',
        'color-bg-inverse',
        'shadow-shadow4',
        'flex flex-col gap-2',
        'space-y-2',
        isKeyboardVisible
          ? 'opacity-100 translate-y-0'
          : 'translate-y-full opacity-0'
      )}
      style={{
        bottom: 0,
        paddingBottom: 'var(--sab)',
        paddingLeft: 'var(--sal)',
        paddingRight: 'var(--sar)',
      }}
    >
      <div className="px-4 py-2 space-y-2">
        {isMemoVisible && (
          <MultilineTextForm
            value={memo}
            placeholder="메모를 입력해주세요"
            handleChange={onMemoChanged}
          />
        )}
        <div className="flex items-center gap-2 ">
          <SolidButton
            color="outline"
            onClick={() => {
              handleClickMemo();
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            Memo
          </SolidButton>
          <SolidButton color="primary" fullWidth onClick={onTapSave}>
            저장
          </SolidButton>
        </div>
      </div>

    </div>
  );
}
