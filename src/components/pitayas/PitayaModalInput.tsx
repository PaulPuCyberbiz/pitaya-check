import React, { useState } from 'react';
import classnames from 'classnames';
import styles from '@src/assets/stylesheets/pitayas/PitayaModalInput.scss';
import PitayaInput, {
  PitayaInputProps,
} from '@src/components/pitayas/PitayaInput';
import PitayaConfirm, {
  PitayaConfirmProps,
} from '@src/components/pitayas/PitayaConfirm';

export interface PitayaModalInputProps
  extends PitayaInputProps,
    Omit<PitayaConfirmProps, 'show'> {
  inputClassName?: string;
  modalClassName?: string;
  modalClose?: () => void;
}

const PitayaModalInput = (props: PitayaModalInputProps) => {
  const {
    id,
    className: givenName,
    label,
    inputClassName,
    modalClassName,
    value,
    invalid,
    message,
    yes,
    no,
    yesText,
    noText,
    children,
    yesBtnDisabled,
    closeOnBackDrop,
    modalClose,
    ...restProps
  } = props;

  const className = classnames(styles.pitayaModalInput, givenName, {
    error: invalid,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => setShowModal(perv => !perv);
  const onClose = () => {
    toggleModal();
    modalClose?.();
  };
  return (
    <div id={id} className={className}>
      {label && <label>{label}</label>}
      <div>
        <div className="input-blk" onClick={() => toggleModal()}>
          <PitayaInput
            {...restProps}
            className={inputClassName}
            disabled={true}
            value={value}
          />
        </div>
        <PitayaConfirm
          className={modalClassName}
          show={showModal}
          message={message}
          yes={yes}
          no={no}
          close={onClose}
          yesText={yesText}
          noText={noText}
          yesBtnDisabled={yesBtnDisabled}
          closeOnBackDrop={closeOnBackDrop}
        >
          {children}
        </PitayaConfirm>
      </div>
    </div>
  );
};

export default PitayaModalInput;
