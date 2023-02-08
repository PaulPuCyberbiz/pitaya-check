import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type PitayaPortalProps = Pick<
  React.HTMLAttributes<HTMLElement>,
  'id' | 'children'
>;

export const PitayaPortal = ({
  id = 'root-portal',
  children,
}: PitayaPortalProps) => {
  const target = useRef(document.getElementById(id));

  useEffect(() => {
    return () => {
      window.requestAnimationFrame(() => {
        if (target.current?.childNodes.length === 0) {
          target.current.remove();
          target.current = null;
        }
      });
    };
  }, []);

  if (!target.current) {
    target.current = document.createElement('div');
    target.current.setAttribute('id', id);
    document.body.appendChild(target.current);
  }

  return ReactDOM.createPortal(children, target.current);
};
