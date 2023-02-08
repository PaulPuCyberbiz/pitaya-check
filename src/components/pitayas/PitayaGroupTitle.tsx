import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaGroupTitle.scss';

type PitayaGroupTitleProps = HTMLElement;

const PitayaGroupTitle = (props: PitayaGroupTitleProps) => {
  return <div className={styles.pitayaGroupTitle}>{props.children}</div>;
};

export default PitayaGroupTitle;
