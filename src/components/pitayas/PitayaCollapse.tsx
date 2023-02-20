import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import styles from '@src/assets/stylesheets/pitayas/PitayaCollapse.module.scss';

export type PitayaCollapseProps = React.HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
  refresh?: string | number | boolean;
};

const PitayaCollapse = (props: PitayaCollapseProps) => {
  const { isOpen, refresh, className: name, children, ...rest } = props;

  const groupRef = useRef(null);
  const className = classNames(styles['pitaya-collapse'], name, {
    open: isOpen,
  });

  useEffect(() => {
    Promise.resolve(1).then(() => {
      const el = groupRef.current as unknown as HTMLDivElement;
      if (el) {
        el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
      }
    });
  }, [isOpen, children, refresh]);

  return (
    <div className={className} ref={groupRef} {...rest}>
      {children}
    </div>
  );
};

export default PitayaCollapse;
