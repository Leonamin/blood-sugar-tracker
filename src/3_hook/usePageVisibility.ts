import { useState, useEffect } from 'react';

type VisibilityState = 'visible' | 'hidden';

export const usePageVisibility = () => {
  const [visibilityState, setVisibilityState] = useState<VisibilityState>(
    document.visibilityState === 'visible' ? 'visible' : 'hidden'
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisibilityState(document.visibilityState === 'visible' ? 'visible' : 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return visibilityState;
};