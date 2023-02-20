import React from 'react';
import classNames from 'classnames';
import styles from '@src/assets/stylesheets/pitayas/PitayaBulletLabel.module.scss';

export type PitayaBulletLabel = {
  actived?: boolean;
  label: string;
  activeLabel?: string;
  defaultColor?: string;
  activeColor?: string;
};

export const PitayaBulletLabel = (props: PitayaBulletLabel) => {
  const {
    actived = true,
    label: defaultLabel,
    activeLabel,
    defaultColor,
    activeColor,
  } = props;

  const className = classNames(styles['pitaya-bullet-label'], {
    active: actived,
  });

  const customStyle: React.CSSProperties = {};
  if (defaultColor) {
    customStyle.backgroundColor = defaultColor;
  }
  if (actived && activeColor) {
    customStyle.backgroundColor = activeColor;
  }

  const label = actived && activeLabel ? activeLabel : defaultLabel;

  if (!label) {
    return null;
  }

  return (
    <span className={className} style={customStyle}>
      {label}
    </span>
  );
};
