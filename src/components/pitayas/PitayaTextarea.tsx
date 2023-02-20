import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaTextarea.module.scss';
interface PitayaTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  warningContent?: string;
  noticeContent?: string;
  resizable?: boolean;
  invalid?: boolean;
  invalidContent?: string;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  languageLabel?: string;
}

const PitayaTextarea = (props: PitayaTextareaProps) => {
  const className =
    (props.resizable ? ' ' : ' fix-height') +
    (props.invalid ? ' error' : '') +
    (props.languageLabel ? ' fix-padding' : '');
  const mainInput = (
    <textarea
      autoComplete="off"
      className={className}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      disabled={props.disabled}
    />
  );
  return (
    <div
      id={props.id}
      className={`${styles.pitayaTextarea} ${props.className || ''}`}
    >
      <label className="textarea-title">{props.label}</label>
      {props.prepend && (
        <div className="input_group_prepend">
          <div className="shop_host_prepend">{props.prepend}</div>
        </div>
      )}
      {mainInput}
      {props.languageLabel && (
        <span className="language_label">{props.languageLabel}</span>
      )}
      {props.append && (
        <div className="input_group_append">
          <div className="shop_host_append">{props.append}</div>
        </div>
      )}
      <div className="remarks_content">
        {props.invalid ? (
          <p className="alert_content">{props.invalidContent}</p>
        ) : (
          props.warningContent && (
            <p className="alert_content">{props.warningContent}</p>
          )
        )}
        {props.noticeContent && (
          <p className="notice_content">{props.noticeContent}</p>
        )}
      </div>
    </div>
  );
};

export default PitayaTextarea;
