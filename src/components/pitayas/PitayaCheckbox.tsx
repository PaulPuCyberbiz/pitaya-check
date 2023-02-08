import React, { useState } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import styles from '@src/assets/stylesheets/pitayas/PitayaCheckbox.scss';

export interface PitayaCheckboxProps extends React.HTMLProps<HTMLInputElement> {
  inputId?: string;
  label?: string;
  checked?: boolean;
  onChange?: (el?: any) => void;
  renderLabel?: React.ReactNode;
}

const PitayaCheckbox = (props: PitayaCheckboxProps) => {
  const {
    id,
    inputId: givenInputId,
    className: givenClassName,
    onChange,
    type,
    name,
    label,
    checked,
    disabled,
    children,
    onClick,
    renderLabel,
  } = props;
  const className = classNames(styles.pitayaCheckbox, givenClassName);
  const [randomId] = useState(uuid());
  const inputId = givenInputId || randomId;
  return (
    <div id={id} className={className} onClick={onClick}>
      <input
        id={inputId}
        className="pitayaCheckbox__input"
        type={type || 'checkbox'}
        checked={checked}
        disabled={disabled}
        readOnly={true}
        name={name}
        onClick={onChange}
      />
      {children ? (
        children
      ) : (
        <label className="pitayaCheckbox__label" htmlFor={inputId}>
          {renderLabel ? renderLabel : label}
        </label>
      )}
    </div>
  );
};

export default PitayaCheckbox;
