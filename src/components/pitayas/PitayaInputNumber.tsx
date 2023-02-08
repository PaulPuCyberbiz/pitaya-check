import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import PitayaInput, {
  PitayaInputProps,
} from '@src/components/pitayas/PitayaInput';

export interface PitayaInputNumberProps extends PitayaInputProps {
  value: number | undefined;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  minText?: string;
  maxText?: string;
  reducer?: (text: string) => [number, string];
  onValidate?: (invalid: boolean) => void;
}

const PitayaInputNumber = (props: PitayaInputNumberProps) => {
  const { t } = useTranslation('Pitaya');

  const defaultReducer = (text: string) => {
    const replaced = text.replace(/[^0-9\.]/g, '');
    const num = _.round(Number(replaced)) || 0;
    const newStr = String(num);
    return [num, newStr] as const;
  };

  const {
    value,
    setValue,
    min,
    max,
    minText = t('PitayaInputNumber_min_text', { amount: min }) || '',
    maxText = t('PitayaInputNumber_max_text', { amount: max }) || '',
    reducer = defaultReducer,
    onValidate,
    invalid: otherInvalid = false,
    onChange,
    onBlur,
    invalidContent = '',
    ...rest
  } = props;

  const [inputText, setInputText] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState('');

  const large = (num: number) => (max !== undefined ? num > max : false);
  const small = (num: number) => (min !== undefined ? num < min : false);

  const validate = () => {
    const [num, str] = reducer(inputText);
    setInputText(str);
    setValue(num);
    const tooLarge = large(num);
    const tooSmall = small(num);
    setInvalid(tooLarge || tooSmall || otherInvalid);
    if (tooLarge) {
      setInvalidText(maxText);
    } else if (tooSmall) {
      setInvalidText(minText);
    } else if (otherInvalid) {
      setInvalidText(invalidContent);
    }
    if (onValidate) {
      onValidate(tooLarge || tooSmall);
    }
  };

  useEffect(() => {
    setInputText(value === undefined ? '' : String(value));
    setInvalid(
      value !== undefined && (large(value) || small(value) || otherInvalid),
    );
  }, [value, otherInvalid]);

  return (
    <PitayaInput
      value={inputText}
      onChange={e => {
        setInputText(e.currentTarget.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        validate();
        if (onBlur) {
          onBlur(e);
        }
      }}
      invalid={invalid}
      invalidContent={invalidText}
      {...rest}
    />
  );
};

export default PitayaInputNumber;
