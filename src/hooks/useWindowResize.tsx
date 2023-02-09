import { DependencyList, useEffect } from 'react';

export const useWindowResize = (
  callback: (e: UIEvent) => void,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  }, deps);
};
