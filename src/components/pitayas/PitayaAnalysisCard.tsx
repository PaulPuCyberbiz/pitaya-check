import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import PitayaFlex, { FlexDirection } from '@src/components/pitayas/PitayaFlex';
import PitayaIconBtn from '@src/components/pitayas/PitayaIconBtn';
import PitayaDoughnutPlot from '@src/components/pitayas/pitayaChart/PitayaDoughnutPlot';
import PitayaAnalysisSmallCard, {
  AnalysisSmallCardProps,
} from '@src/components/pitayas/PitayaAnalysisSmallCard';
import styles from '@src/assets/stylesheets/pitayas/PitayaAnalysisCard.scss';

export interface PitayaAnalysisCardProps extends HTMLProps<HTMLDivElement> {
  title: string;
  legend?: string;
  smallCard: AnalysisSmallCardProps[];
  tooltip?: string;
}

const checkCompareRatio = (compareRatio: number) => {
  if (compareRatio > 0) {
    return 'increasing';
  } else if (compareRatio < 0) {
    return 'decreasing';
  } else {
    return '';
  }
};

const PitayaAnalysisCard = (props: PitayaAnalysisCardProps) => {
  const { title, smallCard, className: classNameFromProps, tooltip } = props;
  const smallCard1 = smallCard[0];
  const smallCard2 = smallCard[1];
  const totalValue = smallCard1.value + smallCard2.value;
  const formatTotalValue = Number(totalValue.toFixed(2)).toLocaleString();

  const totalPastValue = smallCard1.pastValue + smallCard2.pastValue;
  const compareRatio = totalPastValue
    ? ((100 * (totalValue - totalPastValue)) / totalPastValue).toFixed(2)
    : ' - ';
  const compareRatioClass = checkCompareRatio(Number(compareRatio));
  const card1Ratio = totalValue
    ? (100 * (smallCard1.value / totalValue)).toFixed(2)
    : ' - ';
  const card2Ratio = totalValue
    ? (100 * (smallCard2.value / totalValue)).toFixed(2)
    : ' - ';
  const className = classNames(classNameFromProps, styles.pitayaAnalysisCard);
  return (
    <PitayaFlex className={className}>
      <PitayaFlex
        flexDirection={FlexDirection.COLUMN}
        className="total-summary"
      >
        <div className="title">
          <span className="titleText">{title}</span>
          <PitayaIconBtn type="questionMark" tooltipText={tooltip} />
        </div>
        <span className="numberOfCard">{formatTotalValue}</span>
        <span>
          <span className="compareText">與指定區間比較</span>{' '}
          <span
            className={`compareValue ${compareRatioClass}`}
          >{`${compareRatio}%`}</span>
        </span>
        <PitayaDoughnutPlot
          yData={[smallCard1.value || 0, smallCard2.value || 0]}
          legend={[`EC ${card1Ratio}%`, `POS ${card2Ratio}%`]}
          options={{ legend: { position: 'bottom' } }}
        />
      </PitayaFlex>
      <PitayaFlex
        flexDirection={FlexDirection.COLUMN}
        className="small-card-wrap"
      >
        {smallCard.map((item, index) => (
          <PitayaAnalysisSmallCard
            key={index}
            title={item.title}
            value={item.value || 0}
            pastValue={item.pastValue}
          />
        ))}
      </PitayaFlex>
    </PitayaFlex>
  );
};

export default PitayaAnalysisCard;
