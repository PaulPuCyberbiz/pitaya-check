import React, { ReactNode } from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaGroup.module.scss';

export interface PitayaGroupProps {
  id?: string;
  className?: string;
  title?: string;
  children?: ReactNode;
  groupRef?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
}

const PitayaGroup = (props: PitayaGroupProps) => {
  const className = props.className ? props.className : '';
  return (
    <div
      ref={props.groupRef}
      id={props.id}
      className={`pitaya-group ${className} ${styles.pitayaGroup}`}
      onClick={props.onClick}
    >
      {props.title && <label className="group-title">{props.title}</label>}
      {props.children}
    </div>
  );
};

export default PitayaGroup;
