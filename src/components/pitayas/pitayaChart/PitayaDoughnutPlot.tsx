import React from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Doughnut } from 'react-chartjs-2';
import { PitayaChartProps } from '@src/components/pitayas/pitayaChart/PitayaChartProps';
import { PitayaChartFactory } from './PitayaChartFactory';

type PitayaDoughnutPlotDrops = Pick<PitayaChartProps, 'legend'> & {
  yData: number[];
  options?: Record<string, unknown>;
};

const PitayaDoughnutPlot = (props: PitayaDoughnutPlotDrops) => {
  const { legend, yData, options } = props;

  const data = PitayaChartFactory.createDoughnutPlotData(yData, legend);

  return (
    <PitayaGroup className="pitayaBarPlot">
      <Doughnut data={data} options={options} />
    </PitayaGroup>
  );
};

export default PitayaDoughnutPlot;
