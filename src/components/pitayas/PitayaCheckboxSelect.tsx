import React, { ReactNode, useState } from 'react';
import Select, {
  components,
  OptionProps,
  MenuProps,
  ValueContainerProps,
  StylesConfig,
  MenuPosition,
  MenuPlacement,
} from 'react-select';
import classNames from 'classnames';
import i18n from '@src/locale/i18n';
import { OptionType } from '@src/types/BaseTypes';
import { Size, sizeClassName } from '@src/components/pitayas/PitayaStatus';
import PitayaCheckbox from '@src/components/pitayas/PitayaCheckbox';
import { pitayaSelectStyles } from '@src/components/pitayas/pitaya_select/PitayaSelectStyles';
import styles from '@src/assets/stylesheets/pitayas/PitayaSelect.scss';

let allSelected = '';
const allOption = {
  label: i18n.t('Pitaya:PitayaCheckboxSelect_select_all'),
  value: '*',
};

export type PitayaCheckboxSelectProps<O> = {
  label?: ReactNode;
  selectSize?: Size;
  className?: string;
  maxMenuHeight?: number;
  customStyles?: StylesConfig<O, boolean>;
  options: OptionType[];
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  value?: O;
  invalidContent?: ReactNode;
  menuPortalTarget?: HTMLElement;
  menuPosition?: MenuPosition;
  menuPlacement?: MenuPlacement;
  allSelectedLabel: string;
  onChange: (selectedOption: O) => void;
  disabled?: boolean;
};

// 當全選時只顯示一個 label
const ValueContainer = ({
  children,
  ...valueContainerProps
}: ValueContainerProps<OptionType, boolean>) => {
  const [state] = useState(allSelected);
  const currentValues = valueContainerProps.getValue() as OptionType[];
  let toBeRendered: React.ReactNode[] = children as React.ReactNode[];
  if (currentValues.some(val => val.value === allOption.value)) {
    toBeRendered = [[state], toBeRendered[1]];
  }

  return (
    <components.ValueContainer {...valueContainerProps}>
      {toBeRendered}
    </components.ValueContainer>
  );
};

// 全選按鈕
const Menu = (menuProps: MenuProps<OptionType, boolean>) => {
  const { options, children, getValue, setValue } = menuProps;
  const currentValues = getValue() as OptionType[];
  const isSelectAll = options.length === currentValues.length;
  const onSelect = () => {
    if (isSelectAll) {
      setValue([], 'select-option');
    } else {
      setValue(options, 'select-option');
    }
  };
  return (
    <components.Menu {...menuProps} className="pitaya-checkbox-select">
      <>
        {children}
        {options.length > 0 && (
          <div onClick={onSelect} className="select-all">
            {isSelectAll
              ? i18n.t('Pitaya:PitayaCheckboxSelect_cancel_select_all')
              : i18n.t('Pitaya:PitayaCheckboxSelect_select_all')}
          </div>
        )}
      </>
    </components.Menu>
  );
};

// 加上 PitayaCheckbox
const Option = (optionProps: OptionProps<OptionType, boolean>) => {
  const { label, isSelected } = optionProps;
  if (optionProps.data.value === '*') {
    return null;
  }
  return (
    <components.Option {...optionProps} className="pitaya-checkbox-select">
      <PitayaCheckbox
        label={label}
        checked={isSelected}
        onChange={(e: React.ChangeEvent) => e.stopPropagation()}
      />
    </components.Option>
  );
};

const PitayaCheckboxSelect = <O extends OptionType[]>(
  props: PitayaCheckboxSelectProps<O>,
) => {
  const {
    label,
    className: givenName,
    customStyles: givenStyles,
    selectSize,
    options,
    invalidContent,
    isSearchable = false,
    isClearable = false,
    value,
    allSelectedLabel,
    onChange,
    disabled,
    ...rest
  } = props;
  allSelected = allSelectedLabel;

  const className = classNames(
    styles['pitaya-select'],
    'pitayaSelect',
    givenName,
    {
      invalid: invalidContent,
    },
  );

  const sizeName = sizeClassName(selectSize);

  const customStyles: StylesConfig<any, boolean> = {
    ...pitayaSelectStyles,
    ...givenStyles,
  };

  const onChangeSelect = (selected: O | null) => {
    if (selected === null) {
      return onChange([] as any);
    }

    const currentValues = selected.filter(
      option => option.value !== allOption.value,
    );
    return onChange(currentValues as O);
  };

  return (
    <div className={className}>
      {label && <label className="select-title">{label}</label>}
      <Select
        {...rest}
        isDisabled={disabled}
        className={`select-group ${sizeName}`}
        value={
          options.length && value?.length === options.length
            ? [allOption, ...value]
            : value
        }
        options={options.length ? [allOption, ...options] : options}
        classNamePrefix="pitaya-select"
        components={{
          Option,
          ValueContainer,
          Menu,
        }}
        isMulti={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isSearchable={isSearchable}
        isClearable={isClearable}
        styles={customStyles}
        onChange={onChangeSelect as any}
      />
      {invalidContent && <p className="alert_content">{invalidContent}</p>}
    </div>
  );
};

export default PitayaCheckboxSelect;
