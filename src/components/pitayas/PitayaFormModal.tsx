import React, { useEffect, useRef } from 'react';
import PitayaModal from '@src/components/pitayas/PitayaModal';
import styles from '@src/assets/stylesheets/pitayas/PitayaFormModal.scss';

export enum EventHandlersEventMap {
  KEYPRESS = 'keypress',
}

export enum KeyCode {
  ENTER = 'Enter',
}
export interface PitayaFormModalProps
  extends React.HTMLAttributes<HTMLElement> {
  show: boolean;
  buttons: JSX.Element[];
  closeOnBackDrop?: boolean;
  onClose?: React.MouseEventHandler;
  onBodyEnter?: () => void;
}

const PitayaFormModal = (props: PitayaFormModalProps) => {
  const {
    id,
    show,
    buttons,
    title,
    className,
    closeOnBackDrop,
    onClose,
    onBodyEnter,
    children,
  } = props;
  const formModalBody = useRef<HTMLDivElement>(null);

  const onKeyDown = (el: KeyboardEvent) => {
    if (el.code === KeyCode.ENTER && onBodyEnter) {
      onBodyEnter();
    }
  };

  useEffect(() => {
    const el = formModalBody.current;
    if (id && show && el) {
      el.addEventListener(EventHandlersEventMap.KEYPRESS, onKeyDown);
      return () =>
        el.removeEventListener(EventHandlersEventMap.KEYPRESS, onKeyDown);
    }
  }, [show]);

  return (
    <PitayaModal
      show={show}
      id={id}
      className={className}
      onClose={onClose}
      closeOnBackDrop={closeOnBackDrop}
    >
      <div className={styles.formModal}>
        {onClose && (
          <button type="button" className="closeModal" onClick={onClose} />
        )}
        <div className="formModal-body" ref={formModalBody}>
          {title && <h5>{title}</h5>}
          {children}
        </div>
        <div className="formModal-footer">{buttons}</div>
      </div>
    </PitayaModal>
  );
};

export default PitayaFormModal;
