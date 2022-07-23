import { useEffect } from 'react';

export const usePressKey = (key: string, func: () => void): void => {
  const callBack = (e: { key: string; }): void => {
    if (e.key === key) {
      func();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', callBack);

    return () => {
      window.removeEventListener('keyup', callBack);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
