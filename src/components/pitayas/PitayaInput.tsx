import React, { HTMLProps, ReactNode, RefObject } from 'react';
import classnames from 'classnames';
import { sizeClassName } from '@src/components/pitayas/PitayaStatus';
import styles from '@src/assets/stylesheets/pitayas/PitayaInput.module.scss';
import PitayaFlex, {
  FlexAlignItems,
  FlexDirection,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';
import { InputMode } from '@src/types/BaseTypes';
import { useTranslation } from 'react-i18next';
import { PitayaBulletLabel } from './PitayaBulletLabel';

type PickHTMLInputProps =
  | 'step'
  | 'min'
  | 'max'
  | 'required'
  | 'onChange'
  | 'onBlur'
  | 'onFocus'
  | 'pattern'
  | 'autoComplete';
type InputPropsFromHTML = Pick<HTMLProps<HTMLInputElement>, PickHTMLInputProps>;
export interface PitayaInputProps extends InputPropsFromHTML {
  id?: string;
  append?: React.ReactNode;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  invalid?: boolean;
  invalidContent?: string;
  inputDirection?: 'ltr' | 'rtl';
  inputRef?: RefObject<HTMLInputElement>;
  inputSize?: 'large' | 'medium' | 'small';
  isShowDelBtn?: boolean;
  label?: ReactNode;
  languageLabel?: string;
  inputType?: InputMode;
  name?: string;
  noticeContent?: string;
  placeholder?: string;
  prepend?: React.ReactNode;
  warningContent?: string;
  value?: string | number;
  onDelBtnClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  requiredText?: string;
  onCompositionStart?: (event: React.CompositionEvent) => void;
  onCompositionEnd?: (event: React.CompositionEvent) => void;
  readOnly?: boolean;
  onPressEnter?: (event: React.KeyboardEvent) => void;
  outerRef?: RefObject<HTMLDivElement>;
  spellCheck?: boolean;
}

const PitayaInput = (props: PitayaInputProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    id,
    append,
    className: givenName,
    disabled,
    inputDirection,
    inputType = 'text',
    inputRef,
    inputSize,
    invalid,
    invalidContent,
    isShowDelBtn,
    label,
    languageLabel,
    noticeContent,
    prepend,
    warningContent,
    onDelBtnClick,
    value: givenValue,
    required = false,
    requiredText = t('PitayaInput_required_text'),
    readOnly,
    onKeyDown,
    onPressEnter,
    outerRef,
    ...rest
  } = props;

  const value = 'value' in props ? givenValue || '' : undefined;

  const sizeName = sizeClassName(inputSize);

  const className = [styles.pitayaInput, givenName, invalid && 'error']
    .filter(Boolean)
    .join(' ');

  const inputContentClassName = classnames('input_content', {
    disabled,
    readOnly,
  });

  const inputClassName = [sizeName].join(' ');

  const onCustomKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      (e.target as HTMLInputElement).blur();
      if (onPressEnter) {
        onPressEnter(e);
      }
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const mainInput = (
    <input
      autoComplete="off"
      className={inputClassName}
      id={id}
      ref={inputRef}
      dir={inputDirection}
      disabled={disabled}
      type={inputType}
      value={value}
      required={required}
      readOnly={readOnly}
      onKeyDown={onCustomKeyDown}
      {...rest}
    />
  );
  return (
    <div className={className} ref={outerRef}>
      {(label || (required && requiredText)) && (
        <PitayaFlex
          className="input_label_row"
          flexAlignItems={FlexAlignItems.CENTER}
        >
          {label && (
            <label className="input-title" htmlFor={id}>
              {label}
            </label>
          )}
          {required && requiredText && (
            <span className="input_required_text">{requiredText}</span>
          )}
        </PitayaFlex>
      )}
      <div className="input_group">
        {prepend && (
          <PitayaFlex className={`input_group_prepend ${sizeName}`}>
            {prepend}
          </PitayaFlex>
        )}
        <div className="input_block">
          <div className={inputContentClassName}>
            {mainInput}
            {(languageLabel || isShowDelBtn) && (
              <span className="trailing-component">
                {languageLabel && (
                  <PitayaBulletLabel actived={true} label={languageLabel} />
                )}
                {isShowDelBtn && (
                  <div className="close_btn" onClick={onDelBtnClick}>
                    ✕
                  </div>
                )}
              </span>
            )}
          </div>
          <PitayaFlex
            flexJustify={FlexJustify.SPACE_BETWEEN}
            flexAlignItems={FlexAlignItems.START}
          >
            <PitayaFlex
              flexDirection={FlexDirection.COLUMN}
              flexAlignItems={FlexAlignItems.START}
            >
              {invalid && invalidContent && (
                <p className="alert_content">{invalidContent}</p>
              )}
              {warningContent && (
                <p className="alert_content">{warningContent}</p>
              )}
            </PitayaFlex>
            {noticeContent && <p className="notice_content">{noticeContent}</p>}
          </PitayaFlex>
        </div>
        {append && (
          <PitayaFlex className={`input_group_append ${sizeName}`}>
            {append}
          </PitayaFlex>
        )}
      </div>
    </div>
  );
};

export default PitayaInput;
