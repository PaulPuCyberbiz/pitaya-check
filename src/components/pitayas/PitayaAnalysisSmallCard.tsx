import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaAnalysisSmallCard.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import PitayaIconBtn from '@src/components/pitayas/PitayaIconBtn';
export type AnalysisSmallCardProps = {
  title: string | JSX.Element;
  value: number;
  pastValue: number;
  displayPercentage?: boolean;
  className?: string;
  tooltip?: string;
};

const PitayaAnalysisSmallCard = (props: AnalysisSmallCardProps) => {
  const { t } = useTranslation('BusinessIntelligence');

  const {
    title,
    value,
    pastValue,
    displayPercentage = false,
    className,
    tooltip,
  } = props;
  const combinedClassName = classNames(
    styles.pitayaAnalysisSmallCard,
    className,
  );

  const compareRatio = pastValue
    ? ((100 * (value - pastValue)) / pastValue).toFixed(2)
    : ' - ';
  const formatValue = Number(value.toFixed(2)).toLocaleString();

  return (
    <div className={combinedClassName}>
      <div className="title">
        {title}
        {tooltip && <PitayaIconBtn type="questionMark" tooltipText={tooltip} />}
      </div>
      <div className="numberOfCard">
        {formatValue}
        {displayPercentage ? '%' : ''}
      </div>
      <div className="compareText">
        {t('BI_omo_compare_to_specific_period')} {`${compareRatio}%`}
      </div>
    </div>
  );
};

export default PitayaAnalysisSmallCard;
