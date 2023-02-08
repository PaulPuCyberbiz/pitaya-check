import React from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { PlotType } from '@src/components/pitayas/pitayaChart/PitayaPlotDatasets';
import { PitayaChartFactory } from '@src/components/pitayas/pitayaChart/PitayaChartFactory';
import { Bar } from 'react-chartjs-2';
import { PitayaChartProps } from '@src/components/pitayas/pitayaChart/PitayaChartProps';
import { generalSettings } from '@src/components/pitayas/pitayaChart/Template';

const PitayaBarPlot = (props: PitayaChartProps) => {
  const {
    legend,
    xLabel,
    xData,
    yData,
    xTick,
    yTicks,
    options,
    template = generalSettings,
  } = props;

  const data = PitayaChartFactory.createPlotData(
    xLabel,
    {
      legend,
      xData,
      yData,
      type: PlotType.Bar,
    },
    template,
  );

  const plotOptions = PitayaChartFactory.createPlotOptions({
    xTick,
    yTicks,
    options,
  });
  return (
    <PitayaGroup className="pitayaBarPlot">
      <Bar data={data} options={plotOptions} />
    </PitayaGroup>
  );
};

export default PitayaBarPlot;
