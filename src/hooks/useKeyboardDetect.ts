import { useState, useEffect } from 'react';

export function useKeyboardDetect() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  
  useEffect(() => {
    const initialHeight = window.innerHeight;
    
    const handleResize = () => {
      // 현재 높이가 초기 높이보다 25% 이상 작아지면 키보드가 올라온 것으로 판단
      const heightDifference = (initialHeight - window.innerHeight) / initialHeight;
      setIsKeyboardVisible(heightDifference > 0.25);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isKeyboardVisible;
} 