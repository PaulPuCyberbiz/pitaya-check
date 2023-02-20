import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import { OptionType } from '@src/types/BaseTypes';
import { Size, sizeClassName } from '@src/components/pitayas/PitayaStatus';
import { pitayaSelectStyles } from '@src/components/pitayas/pitaya_select/PitayaSelectStyles';

import styles from '@src/assets/stylesheets/pitayas/PitayaSelect.module.scss';
import PitayaFlex from '@src/components/pitayas/PitayaFlex';

export interface PitayaSelectProps<O> extends CreatableProps<O, boolean> {
  className?: string;
  name?: string;
  defaultValue?: OptionType;
  value?: O;
  label?: string;
  options: OptionType[];
  placeholder?: string;
  disabled?: boolean;
  useInputGroup?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  createLabel?: string;
  selectSize?: Size;
  maxMenuHeight?: number;
  menuIsOpen?: boolean;
  tooltip?: any;
  onChange?: (selectedOption: O) => void;
}

const PitayaSelect = <O extends OptionType | OptionType[]>(
  props: PitayaSelectProps<O>,
) => {
  const {
    name,
    defaultValue,
    value,
    label,
    options,
    placeholder,
    disabled,
    onChange,
    isMulti,
    isClearable = false,
    createLabel,
    selectSize,
    maxMenuHeight,
    menuIsOpen,
    onCreateOption,
    tooltip,
  } = props;

  const className = props.className ? ' ' + props.className : '';
  const sizeName = sizeClassName(selectSize);
  const formatCreateLabel = (str: string) =>
    `${createLabel ? createLabel : 'Create'} "${str}"`;

  return (
    <div className={`${styles['pitaya-select']} pitayaSelect ${className}`}>
      <PitayaFlex>
        {label && (
          <label id="channel-label" className="select-title">
            {label}
          </label>
        )}
        {tooltip}
      </PitayaFlex>
      <CreatableSelect
        className={`select-group ${sizeName}`}
        classNamePrefix="pitaya-select"
        defaultValue={defaultValue}
        isDisabled={disabled}
        isMulti={isMulti}
        isClearable={isClearable}
        name={name}
        onChange={onChange as any}
        options={options}
        placeholder={placeholder}
        value={value}
        maxMenuHeight={maxMenuHeight ? maxMenuHeight : 500}
        menuIsOpen={menuIsOpen}
        formatCreateLabel={formatCreateLabel}
        onCreateOption={onCreateOption}
        styles={pitayaSelectStyles}
      />
    </div>
  );
};

export default PitayaSelect;
