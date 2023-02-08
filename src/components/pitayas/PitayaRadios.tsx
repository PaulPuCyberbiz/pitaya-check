import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from '@src/assets/stylesheets/pitayas/PitayaRadios.scss';

import PitayaFlex, {
  FlexAlignItems,
  FlexDirection,
} from '@src/components/pitayas/PitayaFlex';
import { Partial } from '@src/types/BaseTypes';
import PitayaRadioInput, {
  PitayaRadioInputProps,
} from '@src/components/pitayas/PitayaRadioInput';

export type PitayaRadioValue = string;

export interface PitayaRadioProps extends Partial<PitayaRadioInputProps> {
  value: PitayaRadioValue;
  label?: string;
}

export interface PitayaRadiosProps<T extends PitayaRadioValue>
  extends Partial<HTMLInputElement> {
  checkboxes: PitayaRadioProps[];
  flexDirection?: FlexDirection;
  flexAlignItems?: FlexAlignItems;
  selected: T;
  onChange?: (value: T) => void;
}

const PitayaRadios = <T extends PitayaRadioValue>(
  props: PitayaRadiosProps<T>,
) => {
  const {
    id,
    checkboxes = [],
    className,
    flexDirection,
    flexAlignItems,
    name,
    onChange,
    selected,
  } = props;
  const onRadioSelected = (value: T) => {
    if (onChange) {
      onChange(value);
    }
  };
  const mixedClassName = `${styles.pitayaRadios}${className || ''}`;
  const [idPrefix] = useState(uuid());

  return (
    <div id={id} className={mixedClassName}>
      <PitayaFlex
        flexDirection={flexDirection}
        flexAlignItems={flexAlignItems}
        className="radioItems"
      >
        {checkboxes.map(({ label, value, ...otherProps }, index) => (
          <PitayaFlex
            flexDirection={FlexDirection.ROW_REVERSE}
            flexAlignItems={FlexAlignItems.CENTER}
            className="radioItem"
            key={value}
          >
            {label && <label htmlFor={`${idPrefix}-${index}`}>{label}</label>}
            <PitayaRadioInput
              {...otherProps}
              id={`${idPrefix}-${index}`}
              name={name}
              checked={value === selected}
              onChange={() => onRadioSelected(value as T)}
            />
          </PitayaFlex>
        ))}
      </PitayaFlex>
    </div>
  );
};

export default PitayaRadios;
