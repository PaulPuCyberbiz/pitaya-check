import React, { ReactNode, HTMLProps } from 'react';
import classNames from 'classnames';
import PitayaFlex, { FlexJustify } from '@src/components/pitayas/PitayaFlex';
import PitayaIconBtn from '@src/components/pitayas/PitayaIconBtn';
import styles from '@src/assets/stylesheets/pitayas/PitayaNumberCard.module.scss';

interface PitayaNumberCardProps extends HTMLProps<HTMLDivElement> {
  numberOfCard: ReactNode;
  title?: string;
  tooltipText?: string;
  toolTipChildren?: ReactNode;
  className?: string;
  basis?: string;
}

const PitayaNumberCard = (props: PitayaNumberCardProps) => {
  const {
    title,
    tooltipText,
    toolTipChildren,
    basis,
    numberOfCard,
    className,
    children,
  } = props;

  const marginBottom = basis ? '20px' : '';
  const style = {
    flexBasis: basis,
    marginBottom: marginBottom,
  };

  const tooltipContent = tooltipText && (
    <div>
      <h2>{title}</h2>
      <p>{tooltipText}</p>
      {toolTipChildren}
    </div>
  );

  return (
    <div
      className={classNames([styles.pitayaNumberCard, className])}
      style={style}
    >
      <PitayaFlex>
        {title && (
          <PitayaFlex flexJustify={FlexJustify.CENTER} className="num-header">
            <label className="title">{title}</label>
            {tooltipText && (
              <PitayaIconBtn
                type="questionMark"
                tooltipText={tooltipContent}
                tooltipProps={{
                  type: 'light',
                  className: 'number-card-tooltip text-left',
                  delayHide: 300,
                  withPortal: false,
                }}
                globalEventOff="click"
              />
            )}
          </PitayaFlex>
        )}
        <b className="number">{numberOfCard}</b>
        {children}
      </PitayaFlex>
    </div>
  );
};

export default PitayaNumberCard;
