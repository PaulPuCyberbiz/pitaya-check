import React, { useEffect } from 'react';

import styles from '@src/assets/stylesheets/pitayas/PitayaModal.scss';
import { CSSTransition } from 'react-transition-group';

export interface PitayaModalProps extends React.HTMLAttributes<HTMLElement> {
  show: boolean;
  id?: string;
  className?: string;
  closeOnBackDrop?: boolean;
  onClose?: React.MouseEventHandler;
}

const keyDownEvent = (
  event: React.KeyboardEvent,
  onClose?: React.MouseEventHandler,
) => {
  if (event.key === 'Escape') {
    // esc
    if (onClose) {
      onClose(event as unknown as React.MouseEvent);
    }
  }
};

const PitayaModal = (props: PitayaModalProps) => {
  const {
    id,
    className: givenName,
    children,
    closeOnBackDrop = true,
    show,
    onClose,
  } = props;

  useEffect(() => {
    document.getElementsByClassName('pitayaModal show').length > 0
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  const className = [styles.pitayaModal, givenName && givenName, show && 'show']
    .filter(Boolean)
    .join(' ');

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="pitaya-modal"
      unmountOnExit={true}
    >
      <div
        id={id}
        className={className}
        onKeyDown={event => keyDownEvent(event, onClose)}
      >
        {closeOnBackDrop && (
          <div className="close-backdrop" onClick={onClose} />
        )}
        <div className="modal-container">{children}</div>
      </div>
    </CSSTransition>
  );
};

export default PitayaModal;
