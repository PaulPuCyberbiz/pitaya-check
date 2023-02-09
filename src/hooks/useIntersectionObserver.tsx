import { useEffect, DependencyList } from 'react';

const useIntersectionObserver = (
  targets: Array<Element | React.RefObject<HTMLElement>>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    targets.forEach(target => {
      if (!('current' in target)) {
        observer.observe(target);
      } else if (target.current) {
        observer.observe(target.current);
      }
    });
    return () => observer.disconnect();
  }, deps);
};

export default useIntersectionObserver;
