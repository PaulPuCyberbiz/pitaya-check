import React from 'react';
import classNames from 'classnames';

import styles from '@src/assets/stylesheets/pitayas/PitayaSwitch.module.scss';

interface PitayaSwitchProps {
  id?: string;
  className?: string;
  checked: boolean;
  onChange: () => void;
  text?: string;
  disabled?: boolean;
}

const PitayaSwitch = (props: PitayaSwitchProps) => {
  const {
    id,
    text,
    className: classNameFromProps,
    checked,
    onChange,
    disabled,
  } = props;
  const className = classNames(styles.pitayaSwitch, classNameFromProps, {
    disabled,
  });

  return (
    <div id={id} className={className}>
      <input type="checkbox" checked={checked || false} readOnly={true} />
      <label onClick={!disabled ? onChange : undefined}>
        <span className="slider round" />
      </label>
      {text && <span className="text">{text}</span>}
    </div>
  );
};

export default PitayaSwitch;
