import React from 'react';
import { Icon, IconType } from '@src/components/pitayas/pitayaIcons/Icon';

import styles from '@src/assets/stylesheets/pitayas/PitayaIconLabel.module.scss';

type ProductEditIconBtnProps = React.HTMLProps<HTMLDivElement> & {
  type: Extract<
    IconType,
    | 'add'
    | 'addCircle'
    | 'published'
    | 'unpublished'
    | 'goToPage'
    | 'delete'
    | 'copy'
    | 'preview'
    | 'import'
    | 'download'
    | 'linked'
    | 'unlinked'
    | 'snippets'
    | 'enableSms'
    | 'disableSms'
    | 'document'
    | 'questionMark'
    | 'cancel'
    | 'shiningStar'
    | 'filter'
  >;
  text?: string;
  cursorNotAllowed?: boolean;
  onClick?: () => void;
};

export const PitayaIconLabel = (props: ProductEditIconBtnProps) => {
  const {
    className: givenName,
    type,
    text,
    cursorNotAllowed,
    disabled,
    onClick,
    ...divProps
  } = props;

  const className = [
    styles['pitaya-icon-label'],
    type,
    givenName && givenName,
    cursorNotAllowed && 'not-allowed',
    disabled && 'disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div {...divProps} className={className} onClick={onClick}>
      <Icon type={type} />
      {text && <span className="text">{text}</span>}
    </div>
  );
};
