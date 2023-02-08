import React, { ReactNode } from 'react';
import PitayaFormModal from '@src/components/pitayas/PitayaFormModal';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import { useTranslation } from 'react-i18next';
export interface PitayaConfirmProps {
  className?: string;
  show: boolean;
  message?: ReactNode;
  yes: () => void;
  no: () => void;
  close?: () => void;
  closeOnBackDrop?: boolean;
  yesText?: string;
  noText?: string;
  children?: React.ReactNode;
  yesBtnDisabled?: boolean;
}

const PitayaConfirm = (props: PitayaConfirmProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    className,
    message,
    yes,
    no,
    close: modalClose,
    closeOnBackDrop,
    show,
    yesText = t('PitayaConfirm_confirm'),
    noText = t('PitayaConfirm_cancel'),
    children,
    yesBtnDisabled,
  } = props;

  const onYes = () => {
    yes();
    modalClose?.();
  };

  const onNo = () => {
    no();
    modalClose?.();
  };

  return (
    <PitayaFormModal
      className={className}
      show={show}
      closeOnBackDrop={closeOnBackDrop}
      buttons={[
        <PitayaButton
          key="no"
          onClick={onNo}
          buttonState="cancel"
          autoFocus={true}
        >
          {noText}
        </PitayaButton>,
        <PitayaButton
          key="yes"
          className="yes-button"
          onClick={onYes}
          disabled={yesBtnDisabled}
        >
          {yesText}
        </PitayaButton>,
      ]}
      onClose={onNo}
    >
      {children ? children : <p data-testid="default-msg">{message}</p>}
    </PitayaFormModal>
  );
};

export default PitayaConfirm;
