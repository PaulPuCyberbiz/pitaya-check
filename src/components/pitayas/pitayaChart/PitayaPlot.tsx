import React from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Line } from 'react-chartjs-2';
import { PitayaChartFactory } from '@src/components/pitayas/pitayaChart/PitayaChartFactory';
import { PlotType } from '@src/components/pitayas/pitayaChart/PitayaPlotDatasets';
import {
  ChartDataFormat,
  PitayaChartProps,
} from '@src/components/pitayas/pitayaChart/PitayaChartProps';
import { generalSettings } from '@src/components/pitayas/pitayaChart/Template';

const yAxisIDNormal = '';
const yAxisIDPercentage = 'yPercentage';

const PitayaPlot = (props: PitayaChartProps) => {
  const {
    legend,
    xLabel,
    xData,
    yData,
    xTick,
    yTicks = ['', ''],
    yDataFormats = [ChartDataFormat.Normal],
    yDataDefaultEnabled = [true],
    template = generalSettings,
    options,
  } = props;

  const displayYAxis2 = yDataFormats.length > 1;

  const data = PitayaChartFactory.createPlotData(
    xLabel,
    {
      legend,
      xData,
      yData,
      yDataFormats,
      displayYAxis2,
      type: PlotType.Line,
    },
    template,
    yDataDefaultEnabled,
  );

  const customOptions = {
    legend: {
      display: legend?.length ? true : false,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: xTick,
          },
        },
      ],
      yAxes: [
        {
          id: yAxisIDNormal,
          position: 'left' as const,
          scaleLabel: {
            display: true,
            labelString: yTicks[0],
          },
        },
        {
          id: yAxisIDPercentage,
          position: 'right' as const,
          scaleLabel: {
            display: true,
            labelString: yTicks[1],
          },
          display: displayYAxis2,
        },
      ],
    },
    ...options,
  };

  const plotOptions = PitayaChartFactory.createPlotOptions({
    legend,
    xTick,
    yTicks,
    options: customOptions,
  });

  return (
    <PitayaGroup className="pitayaPlot">
      <Line data={data} options={plotOptions} />
    </PitayaGroup>
  );
};

export default PitayaPlot;
