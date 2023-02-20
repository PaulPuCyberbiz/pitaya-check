import React, { ButtonHTMLAttributes, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import { Icon, IconType } from '@src/components/pitayas/pitayaIcons/Icon';
import PitayaTooltip, {
  PitayaTooltipProps,
} from '@src/components/pitayas/PitayaTooltip';
import styles from '@src/assets/stylesheets/pitayas/PitayaIconBtn.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type'];

export interface PitayaIconBtnProps {
  buttonType?: ButtonType;
  type: Extract<
    IconType,
    | 'add'
    | 'unpublished'
    | 'published'
    | 'edit'
    | 'delete'
    | 'goToPage'
    | 'questionMark'
    | 'warning'
  >;
  onClick?: React.MouseEventHandler;
  tooltipText?: React.ReactNode;
  disableTooltipText?: boolean;
  tooltipProps?: PitayaTooltipProps;
  globalEventOff?: string;
  disabled?: boolean;
}

export const PitayaIconBtn = (props: PitayaIconBtnProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    type,
    buttonType = 'button',
    tooltipText,
    disableTooltipText,
    tooltipProps,
    globalEventOff,
    ...rest
  } = props;

  const [tooltipId] = useState(uuid());

  const extendsProps: { [key in string]: Partial<PitayaTooltipProps> } = {
    questionMark: {
      place: 'bottom',
      effect: 'solid',
      delayUpdate: 500,
    },
  };

  const extendProps = extendsProps[type];

  return (
    <span className={`${styles.pitayaIconBtn} ${props.type}`}>
      <button
        type={buttonType}
        onClick={props.onClick}
        data-tip={true}
        data-for={tooltipId}
        {...rest}
      >
        <Icon type={type} />
      </button>
      {!disableTooltipText && (
        <PitayaTooltip
          id={tooltipId}
          className="iconBtn-tooltip"
          type="dark"
          effect="solid"
          globalEventOff={globalEventOff}
          {...extendProps}
          {...tooltipProps}
        >
          {tooltipText || t(`PitayaIconBtn_${type}`)}
        </PitayaTooltip>
      )}
    </span>
  );
};
export default PitayaIconBtn;
