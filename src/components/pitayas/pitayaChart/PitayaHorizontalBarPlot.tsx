import React from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { PlotType } from '@src/components/pitayas/pitayaChart/PitayaPlotDatasets';
import { PitayaChartFactory } from '@src/components/pitayas/pitayaChart/PitayaChartFactory';
import { HorizontalBar } from 'react-chartjs-2';
import { PitayaChartProps } from '@src/components/pitayas/pitayaChart/PitayaChartProps';
import { generalSettings } from '@src/components/pitayas/pitayaChart/Template';

const PitayaHorizontalBarPlot = (props: PitayaChartProps) => {
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
      type: PlotType.HorizontalBar,
    },
    template,
  );

  const plotOptions = PitayaChartFactory.createPlotOptions({
    xTick,
    yTicks,
    options,
  });

  return (
    <PitayaGroup className="PitayaHorizontalBarPlot">
      <HorizontalBar data={data} options={plotOptions} />
    </PitayaGroup>
  );
};

export default PitayaHorizontalBarPlot;
