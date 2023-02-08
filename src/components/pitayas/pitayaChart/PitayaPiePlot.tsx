import React from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Pie } from 'react-chartjs-2';
import { PitayaChartProps } from '@src/components/pitayas/pitayaChart/PitayaChartProps';
import { PitayaChartFactory } from './PitayaChartFactory';

type PitayaPiePlotDrops = Pick<PitayaChartProps, 'legend'> & {
  yData: number[];
};

const PitayaPiePlot = (props: PitayaPiePlotDrops) => {
  const { legend, yData } = props;

  const data = PitayaChartFactory.createPiePlotData(legend, yData);

  return (
    <PitayaGroup className="pitayaBarPlot">
      <Pie data={data} />
    </PitayaGroup>
  );
};

export default PitayaPiePlot;
