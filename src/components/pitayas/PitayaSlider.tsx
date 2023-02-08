import React, { PropsWithChildren } from 'react';
import Slider, { Settings } from 'react-slick';

import styles from '@src/assets/stylesheets/pitayas/PitayaSlider.scss';

export type PitayaSliderProps = PropsWithChildren<Settings> & {
  ref?: React.RefObject<Slider>;
};

const PitayaSlider = (props: PitayaSliderProps) => {
  const { className: classNameFromProps, ref, ...otherProps } = props;
  const className = [classNameFromProps, styles.pitayaSlider]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <Slider {...otherProps} ref={ref} />
    </div>
  );
};
export default PitayaSlider;
