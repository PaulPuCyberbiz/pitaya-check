import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaRoundBox.module.scss';

export type PitayaRoundBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  roundBoxRef?: React.RefObject<HTMLDivElement>;
};

const PitayaRoundBox = (props: PitayaRoundBoxProps) => {
  const { className = '', roundBoxRef, ...rest } = props;
  return (
    <div
      ref={roundBoxRef}
      className={`${className} ${styles.pitayaRoundBox}`}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default PitayaRoundBox;
