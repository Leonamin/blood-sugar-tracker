import { cn } from "@/lib/utils";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface BottomSheetContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BottomSheetContext = createContext<BottomSheetContext | null>(null);

const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("BottomSheet 컴포넌트 내부에서만 사용할 수 있습니다");
  }
  return context;
};

interface BottomSheetProviderProps {
  children: ReactNode;
}

export const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <BottomSheetContext.Provider value={{ isOpen, open, close }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => {
  const context = useBottomSheetContext();
  return {
    isOpen: context.isOpen,
    open: context.open,
    close: context.close
  };
};


interface BottomSheetProps {
  children: ReactNode;
  padding?: string;
  borderRadius?: string;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}

/**
 * BottomSheet 컴포넌트
 * 모달 컨텐츠를 표시하는 컴포넌트
 * 
 * @param children - 모달 컨텐츠
 * @param padding - 모달 컨텐츠 패딩 기본값 "p-4"
 * @param borderRadius - 모달 컨텐츠 라운드 기본값 "rounded-t-[16px]"
 * @param className - 모달 컨텐츠 클래스
 */
const BottomSheet = ({
  children,
  padding = "p-4",
  borderRadius = "rounded-t-[16px]",
  onOpen,
  onClose,
  className,
}: BottomSheetProps) => {
  const { isOpen, close } = useBottomSheetContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      onOpen?.();
    } else {
      document.body.style.overflow = 'auto';
      onClose?.();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // 다음 프레임에서 애니메이션 시작
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      // 트랜지션이 완료된 후에 컴포넌트를 안보이게 설정
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    // FIXME 알 수 없는 이유로 <>를 사용하면 top margin이 16px 추가됨
    <div>
      {/* 배경 오버레이 */}
      <div
        className={cn(
          "fixed z-50 inset-0 color-bg-overlay",
          "transition-opacity duration-300",
          isAnimating ? "opacity-100" : "opacity-0"
        )}
        onClick={close}
      />

      {/* 모달 컨텐츠 */}
      <div
        className={cn(
          "fixed z-50 bottom-0 left-0 right-0",
          "color-bg-inverse",
          "transform transition-transform duration-300",
          borderRadius,
          padding,
          isAnimating ? "translate-y-0" : "translate-y-full"
        )}
      >
        {children}
      </div>
    </ div>
  );
};

export default BottomSheet;