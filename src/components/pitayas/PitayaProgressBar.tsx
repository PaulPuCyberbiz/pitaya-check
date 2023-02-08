import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from '@src/assets/stylesheets/pitayas/PitayaProgressBar.scss';

export interface PitayaProgressBarProps extends React.HTMLProps<HTMLElement> {
  ratio: number;
  hoverText?: string;
  warningRatio?: number;
  dangerRatio?: number;
  reverse?: boolean;
}

const PitayaProgressBar = (props: PitayaProgressBarProps) => {
  const {
    id,
    className,
    ratio,
    hoverText,
    warningRatio,
    dangerRatio,
    reverse,
  } = props;
  const danger =
    dangerRatio &&
    ((!reverse && ratio >= dangerRatio) || (reverse && ratio <= dangerRatio));
  const warning =
    !danger &&
    warningRatio &&
    ((!reverse && ratio >= warningRatio) || (reverse && ratio <= warningRatio));
  const color = danger ? '#FF6071' : warning ? '#FFCE42' : '#22D0AE';

  return (
    <div
      id={id}
      className={`${styles['pitaya-progress-bar']} ${className || ''}`}
    >
      <div
        data-tip={true}
        data-for="progress-text"
        className="progress-container"
      >
        <div
          className="progress-bar"
          style={{ width: `${ratio * 100}%`, backgroundColor: color }}
        />
      </div>
      {hoverText && (
        <ReactTooltip
          id="progress-text"
          className="progress-text"
          type="dark"
          effect="solid"
          place="bottom"
          overridePosition={(pos, e, t, node) => {
            const p = document.querySelector(`#${id}.pitaya-progress-bar`);
            if (!p) {
              return pos;
            }
            const leftOffset = p?.getBoundingClientRect().left;
            const newLeft =
              leftOffset + p.clientWidth * ratio - node.clientWidth / 2;
            return { top: pos.top, left: newLeft };
          }}
        >
          {hoverText}
        </ReactTooltip>
      )}
    </div>
  );
};

export default PitayaProgressBar;
