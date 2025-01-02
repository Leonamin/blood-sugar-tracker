import { cn } from "@/lib/utils";
import { createContext, ReactNode, useContext, useState } from "react";

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
  className
}: BottomSheetProps) => {
  const { isOpen, close } = useBottomSheetContext();

  if (!isOpen) return null;

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={cn(
          "fixed z-50 inset-0 bg-black/40",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
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
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default BottomSheet;