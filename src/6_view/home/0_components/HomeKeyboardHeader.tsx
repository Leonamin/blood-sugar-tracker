import SolidButton from '@/1_components/ui/button/solid-button';
import MultilineTextForm from '@/1_components/ui/form/multiline-text-form';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface HomeKeyboardHeaderProps {
  memo?: string;
  onSave: () => void;
}

export default function HomeKeyboardHeader({
  memo,
  onSave,
}: HomeKeyboardHeaderProps) {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [localMemo, setLocalMemo] = useState(memo);
  const [isMemoVisible, setIsMemoVisible] = useState(false);

  // 입력 필드 포커스 감지
  useEffect(() => {
    const handleFocus = () => {
      setIsKeyboardVisible(true);
    };
    const handleBlur = () => {
      setIsKeyboardVisible(false);
    };

    // 스크롤 화면 내 모든 입력 필드에 이벤트 리스너 추가
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  useEffect(() => {
    setLocalMemo(memo);
  }, [memo]);

  const handleClickMemo = () => {
    setIsMemoVisible(!isMemoVisible);
  };

  return (
    <div
      className={twMerge(
        'fixed z-50 left-0 right-0 transition-all duration-300 ease-in-out',
        'color-bg-inverse px-4 py-2',
        'shadow-shadow4',
        'flex flex-col gap-2',
        isKeyboardVisible
          ? 'bottom-0 translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      )}
    >
      {isMemoVisible && (
        <MultilineTextForm
          value={localMemo}
          placeholder="메모를 입력해주세요"
          handleChange={setLocalMemo}
        />
      )}
      <div className="flex items-center gap-2">
        <SolidButton color="outline" onClick={handleClickMemo}>
          Memo
        </SolidButton>
        <SolidButton color="primary" fullWidth onClick={onSave}>
          저장
        </SolidButton>
      </div>
    </div>
  );
}
