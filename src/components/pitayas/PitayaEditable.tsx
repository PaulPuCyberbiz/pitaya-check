import React, { useState, useRef, useEffect, FormEvent } from 'react';

import PitayaInput, {
  PitayaInputProps,
} from '@src/components/pitayas/PitayaInput';
import styles from '@src/assets/stylesheets/pitayas/PitayaEditable.scss';
import { isBlank } from '@src/helpers';

interface PitayaEditableProps extends PitayaInputProps {
  emptyContent?: string;
  onEditStart?: () => void;
  onEditComplete?: (value: string | number | undefined) => void;
  validator?: (v: string) => boolean;
}

const PitayaEditable = (props: PitayaEditableProps) => {
  const {
    className: classNameFromProps,
    emptyContent,
    onEditStart,
    onEditComplete,
    value,
    onChange,
    validator = () => true,
    ...restProps
  } = props;
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const editingValue = onChange ? value : inputValue;
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const inputRef = useRef<HTMLInputElement>(null);
  const className = [classNameFromProps, styles.pitayaEditable]
    .filter(Boolean)
    .join(' ');

  const beginEdit = () => {
    onEditStart?.();
    setEditing(true);
  };
  const endEdit = () => {
    setEditing(false);
    onEditComplete?.(editingValue);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    endEdit();
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const spanContent = emptyContent && !value ? emptyContent : value;
  const spanClass = [
    isBlank(value) && 'editable-empty',
    !spanContent && 'no-content',
  ]
    .filter(Boolean)
    .join(' ');

  if (!editing) {
    return (
      <div className={className}>
        <span className={spanClass} onClick={beginEdit}>
          {spanContent}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={onSubmit}>
        <PitayaInput
          {...restProps}
          className="editable"
          inputRef={inputRef}
          value={editingValue}
          onBlur={endEdit}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (validator(e.target.value)) {
              onChange ? onChange(e) : setInputValue(e.target.value);
            }
          }}
        />
      </form>
    </div>
  );
};
export default PitayaEditable;
