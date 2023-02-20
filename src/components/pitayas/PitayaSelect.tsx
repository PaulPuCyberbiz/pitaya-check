import React, { ReactNode, RefObject } from 'react';
import Select, {
  StylesConfig,
  MenuPlacement,
  InputActionMeta,
  SelectComponentsConfig,
} from 'react-select';
import { OptionType, GroupOptionType } from '@src/types/BaseTypes';
import { Size, sizeClassName } from '@src/components/pitayas/PitayaStatus';
import styles from '@src/assets/stylesheets/pitayas/PitayaSelect.module.scss';
import { pitayaSelectStyles } from '@src/components/pitayas/pitaya_select/PitayaSelectStyles';

export interface PitayaSelectProps<O> {
  className?: string;
  name?: string;
  defaultValue?: OptionType;
  value?: O | null;
  label?: ReactNode;
  options: OptionType[] | GroupOptionType[];
  placeholder?: string;
  disabled?: boolean;
  useInputGroup?: boolean;
  isMulti?: boolean;
  selectSize?: Size;
  maxMenuHeight?: number;
  menuIsOpen?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
  isHideDropdownIndicator?: boolean;
  customStyles?: StylesConfig<O, boolean>;
  onChange?: (selectedOption: O) => void;
  id?: string;
  menuPortalTarget?: HTMLElement | null;
  invalidContent?: React.ReactNode;
  menuPlacement?: MenuPlacement;
  outerRef?: RefObject<HTMLDivElement>;
  onMenuOpen?: () => void;
  inputValue?: string;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  component?: SelectComponentsConfig<OptionType, boolean>;
  filterOption?: (
    option: {
      label: string;
      value: string;
      data: OptionType;
    },
    inputValue: string,
  ) => boolean;
  captureMenuScroll?: boolean;
}

const PitayaSelect = <O extends OptionType | OptionType[]>(
  props: PitayaSelectProps<O>,
) => {
  const {
    id,
    className: givenName,
    defaultValue,
    value,
    label,
    options,
    onChange,
    isMulti,
    selectSize,
    customStyles: givenStyles,
    maxMenuHeight,
    isSearchable = false,
    isClearable = false,
    closeMenuOnSelect = true,
    isHideDropdownIndicator = false,
    invalidContent,
    disabled,
    outerRef,
    onMenuOpen,
    component,
    filterOption,
    ...rest
  } = props;

  const className = [
    styles['pitaya-select'],
    'pitayaSelect',
    givenName && givenName,
    invalidContent && 'invalid',
  ]
    .filter(Boolean)
    .join(' ');

  const sizeName = sizeClassName(selectSize);

  const onChangeSelect = (o: O) => {
    const option = isMulti ? o || [] : o;
    onChange?.(option);
  };

  const customStyles = {
    ...pitayaSelectStyles,
    ...givenStyles,
  };

  const components = ({
    hideDropdownIndicator,
    selectComponent,
  }: {
    hideDropdownIndicator: boolean;
    selectComponent?: SelectComponentsConfig<OptionType, boolean>;
  }) => {
    if (hideDropdownIndicator) {
      return { DropdownIndicator: () => null };
    }
    if (!!selectComponent) {
      return { ...selectComponent };
    }
    return {};
  };

  return (
    <div className={className} ref={outerRef}>
      {label && <label className="select-title">{label}</label>}
      <Select
        id={id}
        className={`select-group ${sizeName}`}
        classNamePrefix="pitaya-select"
        defaultValue={defaultValue}
        isMulti={isMulti}
        onChange={onChangeSelect as any}
        options={options}
        value={value}
        filterOption={filterOption}
        maxMenuHeight={maxMenuHeight ? maxMenuHeight : 500}
        styles={customStyles}
        isSearchable={isSearchable}
        isClearable={isClearable}
        components={components({
          hideDropdownIndicator: isHideDropdownIndicator,
          selectComponent: component,
        })}
        closeMenuOnSelect={closeMenuOnSelect}
        isDisabled={disabled}
        onMenuOpen={onMenuOpen}
        {...rest}
      />
      {invalidContent && <p className="alert_content">{invalidContent}</p>}
    </div>
  );
};

export default PitayaSelect;
