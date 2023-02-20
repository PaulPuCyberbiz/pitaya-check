import React from 'react';
import classNames from 'classnames';
import styles from '@src/assets/stylesheets/pitayas/PitayaButton.module.scss';
import {
  Size,
  sizeClassName,
  State,
  stateClassName,
} from '@src/components/pitayas/PitayaStatus';

export interface PitayaButtonProps
  extends Omit<Partial<React.HTMLAttributes<HTMLButtonElement>>, 'onClick'> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  autoFocus?: boolean;
  buttonSize?: Size;
  buttonState?: State;
  value?: string;
  disabled?: boolean;
  onClick?: (el: React.ChangeEvent<HTMLInputElement>) => void;
}

const PitayaButton = (props: PitayaButtonProps) => {
  const {
    autoFocus,
    className: givenName,
    disabled,
    onClick = () => {},
    type = 'button',
    value,
    children,
    buttonSize,
    buttonState,
    ...rest
  } = props;
  const sizeName = sizeClassName(buttonSize);
  const stateName = stateClassName(buttonState);

  const className = classNames(
    styles.pitayaButton,
    sizeName,
    stateName,
    'pitaya-button',
    givenName,
  );

  return (
    <button
      className={className}
      onClick={e => {
        const el = e as unknown as React.ChangeEvent<HTMLInputElement>;
        onClick(el);
        el.target.blur();
      }}
      disabled={disabled}
      autoFocus={autoFocus}
      type={type}
      data-testid={`${stateName}`}
      {...rest}
    >
      {children || value}
    </button>
  );
};

export default PitayaButton;
