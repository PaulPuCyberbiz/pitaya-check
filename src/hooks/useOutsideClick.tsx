import React, { useEffect, useRef } from 'react';

const useOutsideClick = (
  callback: () => void,
  ref: React.MutableRefObject<any> = useRef(null),
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return ref;
};

export default useOutsideClick;
