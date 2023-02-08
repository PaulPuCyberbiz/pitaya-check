import React, { HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';

import { Icon, IconType } from '@src/components/pitayas/pitayaIcons/Icon';
import styles from '@src/assets/stylesheets/pitayas/PitayaNoticeTip.scss';

type TipType = Extract<IconType, 'warning'>;

interface PitayaNoticeTipProps extends HTMLProps<HTMLDivElement> {
  type: TipType;
  text: ReactNode;
  className?: string;
}

const PitayaNoticeTip = (props: PitayaNoticeTipProps) => {
  const { type, text, className: classNameFromProps, ...restProps } = props;
  const className = classNames(
    styles.pitayaNoticeTip,
    type,
    classNameFromProps,
  );

  return (
    <div className={className} {...restProps}>
      <Icon type={type} />
      <span className="text">{text}</span>
    </div>
  );
};

export default PitayaNoticeTip;
