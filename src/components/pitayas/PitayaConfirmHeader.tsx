import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import PitayaButton from '@src/components/pitayas/PitayaButton';
import styles from '@src/assets/stylesheets/pitayas/PitayaConfirmHeader.scss';

interface ConfirmHeaderProps extends HTMLAttributes<HTMLDivElement> {
  cancelText?: string;
  confirmText?: string;
  disableConfirm?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  overrideButtons?: (cancelBtn: ReactNode, confirmBtn: ReactNode) => ReactNode;
}

const PitayaConfirmHeader = (props: ConfirmHeaderProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    cancelText = t('PitayaConfirmHeader_cancel'),
    confirmText = t('PitayaConfirmHeader_confirm'),
    onCancel = () => {},
    onConfirm = () => {},
    overrideButtons,
    className: classNameFromProps,
    disableConfirm,
    ...divProps
  } = props;

  const className = classNames(styles.pitayaConfirmHeader, classNameFromProps);

  const cancelButton = (
    <PitayaButton
      buttonState="secondary"
      className="back-link"
      value={cancelText}
      onClick={onCancel}
    />
  );
  const confirmButton = (
    <PitayaButton
      className="confirm-link"
      disabled={disableConfirm}
      value={confirmText}
      onClick={onConfirm}
    />
  );
  const defaultButtons = (
    <>
      {cancelButton}
      {confirmButton}
    </>
  );

  return (
    <div {...divProps} className={className}>
      {overrideButtons
        ? overrideButtons(cancelButton, confirmButton)
        : defaultButtons}
    </div>
  );
};

export default PitayaConfirmHeader;
