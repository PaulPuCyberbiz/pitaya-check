import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaCheckboxesInput.scss';
interface PitayaCheckboxesInputProps extends HTMLElement {
  checkboxes: JSX.Element[];
  input: JSX.Element;
}

const PitayaCheckboxesInput = (props: PitayaCheckboxesInputProps) => {
  return (
    <div
      id={props.id || ''}
      className={`${styles.pitayaCheckboxesInput} ${props.className || ''}`}
    >
      {props.title && (
        <label className="checkboxesInput-title">{props.title}</label>
      )}
      {props.children}
    </div>
  );
};

export default PitayaCheckboxesInput;
