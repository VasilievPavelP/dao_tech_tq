import { useEffect } from 'react';

type UseDocTitleType = (title: string) => void

export const useDocTitle: UseDocTitleType = (newTitle) => {
  useEffect(() => {
    const { title } = document;
    if (title !== newTitle) {
      document.title = newTitle;
    }
  }, [newTitle]);
};
