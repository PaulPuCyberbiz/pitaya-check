import React, { useState } from 'react';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaCollapse from '@src/components/pitayas/PitayaCollapse';
import styles from '@src/assets/stylesheets/pitayas/PitayaExpansionPanel.scss';

export type PitayaExpansionPanelProps = Omit<
  React.HTMLProps<HTMLDivElement>,
  'title'
> & {
  title: React.ReactNode;
  toggled?: boolean;
  onToggle?: () => void;
};

const PitayaExpansionPanel = (props: PitayaExpansionPanelProps) => {
  const {
    title,
    className: name,
    children,
    toggled: currentState,
    onToggle,
    ...rest
  } = props;
  const [open, setOpen] = useState(false);

  const onClick =
    typeof currentState === 'boolean' && !!onToggle
      ? () => onToggle()
      : (t: boolean) => setOpen(t);

  const toggled =
    typeof currentState === 'boolean' && !!onToggle ? currentState : open;

  const className = [
    styles['pitaya-expansion-panel'],
    toggled && 'toggled',
    name && name,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <PitayaRoundBox className={className} {...rest}>
      <PitayaGroup
        className="expansion-header"
        onClick={() => onClick(!toggled)}
      >
        <h2 className="title">{title}</h2>
      </PitayaGroup>
      <PitayaCollapse className="content" isOpen={toggled}>
        {children}
      </PitayaCollapse>
    </PitayaRoundBox>
  );
};
export default PitayaExpansionPanel;
