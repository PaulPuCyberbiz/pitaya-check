import React from 'react';
import { ValueType, Props } from 'react-select';
import {
  AsyncPaginate,
  Response,
  LoadOptions as WrappedOptions,
} from 'react-select-async-paginate';

import styles from '@src/assets/stylesheets/pitayas/PitayaPaginationSelect.scss';

import { OptionType, OptionalPartial } from '@src/types/BaseTypes';
import pitayaSelectStyles from '@src/assets/stylesheets/pitayas/PitayaSelect.scss';
import { pitayaSelectStyles as stylesProps } from '@src/components/pitayas/pitaya_select/PitayaSelectStyles';
import { Size, sizeClassName } from '@src/components/pitayas/PitayaStatus';

type Additional = { page: number };

export type LoadOptions = (
  search: string,
  page: number,
) => Promise<OptionalPartial<Response<OptionType, Additional>, 'options'>>;

const wrapLoadOptions =
  (loadOptions: LoadOptions, loadOptionsCallback?: () => void) =>
  async (
    search: string,
    _loadedOptions: OptionType[],
    { page }: Additional,
  ) => {
    const { options, hasMore, additional } = await loadOptions(search, page);

    if (loadOptionsCallback) {
      loadOptionsCallback();
    }

    return {
      options: options,
      hasMore: hasMore || options.length !== 0,
      additional: additional || { page: page + 1 },
    };
  };

export interface PitayaPaginationSelectProps
  extends Omit<Props<OptionType, boolean>, 'loadOptions' | 'additional'> {
  loadOptions: LoadOptions;
  className?: string;
  selectSize?: Size;
  invalid?: boolean;
  invalidContent?: string;
  isDisabled?: boolean;
  required?: boolean;
  outerRef?: React.RefObject<HTMLDivElement>;
  loadOptionsCallback?: () => void;
}

const PitayaPaginationSelect = (props: PitayaPaginationSelectProps) => {
  const {
    loadOptions,
    selectSize,
    className: classNameFromProps,
    debounceTimeout = 300,
    invalid = false,
    invalidContent,
    isDisabled = false,
    required = false,
    isMulti = false,
    value,
    onChange,
    cacheUniqs,
    outerRef,
    loadOptionsCallback,
    label,
    ...otherProps
  } = props;
  const wrappedLoadOptions = wrapLoadOptions(loadOptions, loadOptionsCallback);
  const className = [
    pitayaSelectStyles['pitaya-select'],
    styles.pitayaPaginationSelect,
    'pitayaSelect',
    invalid && 'invalid',
    classNameFromProps,
  ]
    .filter(Boolean)
    .join(' ');
  const sizeName = sizeClassName(selectSize);

  const onChangeSelect = (o: ValueType<OptionType, boolean>) => {
    onChange?.(isMulti ? o || [] : o);
  };

  return (
    <div className={className} ref={outerRef}>
      {label && <label className="select-title">{label}</label>}
      <AsyncPaginate
        className={`select-group ${sizeName}`}
        classNamePrefix="pitaya-select"
        loadOptions={wrappedLoadOptions as WrappedOptions<any, unknown>}
        debounceTimeout={debounceTimeout}
        additional={{ page: 1 }}
        styles={stylesProps}
        isDisabled={isDisabled}
        isMulti={isMulti}
        value={value}
        cacheUniqs={[cacheUniqs]}
        onChange={onChangeSelect}
        {...otherProps}
      />
      {invalid && <p className="alert_content">{invalidContent}</p>}
      {required && (
        <input
          className="invisible-input"
          multiple={isMulti}
          required={true}
          value={value}
        />
      )}
    </div>
  );
};

export default PitayaPaginationSelect;
