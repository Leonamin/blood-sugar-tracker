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
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [localMemo, setLocalMemo] = useState(memo);
  const [isMemoVisible, setIsMemoVisible] = useState(false);

  useEffect(() => {
    setLocalMemo(memo);
  }, [memo]);

  useEffect(() => {
    const handleKeyboardWillShow = (event: any) => {
      setIsKeyboardVisible(true);
      const safeAreaBottom = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--ion-safe-area-bottom'), 10) || 0;
      setKeyboardHeight(event.keyboardHeight + safeAreaBottom);
    };

    const handleKeyboardWillHide = () => {
      setIsKeyboardVisible(false);
      setKeyboardHeight(0);
    };

    document.addEventListener('keyboardWillShow', handleKeyboardWillShow);
    document.addEventListener('keyboardWillHide', handleKeyboardWillHide);

    return () => {
      document.removeEventListener('keyboardWillShow', handleKeyboardWillShow);
      document.removeEventListener('keyboardWillHide', handleKeyboardWillHide);
    };
  }, []);

  const handleClickMemo = () => {
    setIsMemoVisible(!isMemoVisible);
  };

  return (
    <div
      className={twMerge(
        'fixed z-50 left-0 right-0 transition-all duration-300 ease-in-out',
        'color-bg-inverse px-4',
        'shadow-shadow4',
        'flex flex-col gap-2',
        isKeyboardVisible
          ? 'opacity-100'
          : 'translate-y-full opacity-0'
      )}
      style={{
        bottom: `${keyboardHeight}px`,
        paddingBottom: 'var(--sab)',
        paddingLeft: 'var(--sal)',
        paddingRight: 'var(--sar)',
      }}
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
