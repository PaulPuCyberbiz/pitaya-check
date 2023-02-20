import React, { HTMLProps } from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaRadioInput.module.scss';

export type PitayaRadioInputProps = Omit<HTMLProps<HTMLInputElement>, 'type'>;

const PitayaRadioInput = (props: PitayaRadioInputProps) => {
  const { className: classNameFromProps, ...otherProps } = props;
  const className = [classNameFromProps, styles.pitayaRadioInput]
    .filter(Boolean)
    .join(' ');

  return <input className={className} {...otherProps} type="radio" />;
};
export default PitayaRadioInput;
