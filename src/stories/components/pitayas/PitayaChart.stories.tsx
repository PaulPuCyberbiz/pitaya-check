import React from 'react';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaPlot from '@src/components/pitayas/pitayaChart/PitayaPlot';
import PitayaBarPlot from '@src/components/pitayas/pitayaChart/PitayaBarPlot';
import PitayaPiePlot from '@src/components/pitayas/pitayaChart/PitayaPiePlot';
import PitayaHorizontalBarPlot from '@src/components/pitayas/pitayaChart/PitayaHorizontalBarPlot';
import { withKnobs } from '@storybook/addon-knobs';
import { lineAreaTemplate } from '@src/components/pitayas/pitayaChart/Template';

export default {
  title: 'Pitaya / Chart',
  decorators: [withKnobs],
};

const legend = ['1~1000', '1001~2000', '2001~3000'];
const xLabel = [
  '2017-02',
  '2017-04',
  '2017-06',
  '2017-08',
  '2017-10',
  '2017-12',
  '2018-02',
];
const xData = [2, 4, 5, 6, 7, 12, 33];

const yData = [
  [100, 50, 380, 60, 500, 155, 256],
  [50, 178, 40, 173, 25, 270, 60],
  [168, 55, 173, 30, 282, 88, 380],
];

export const Plot = () => {
  return (
    <PitayaLayout>
      <h3> Pitaya Plot </h3>
      <PitayaRoundBox>
        <h1>折線圖</h1>
        <br />
        <PitayaPlot
          legend={legend}
          xLabel={xLabel}
          xData={xData}
          yData={yData}
          xTick={'日期'}
          yTicks={['訂單數']}
          template={lineAreaTemplate}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

const twoDXData = [
  [20, 30, 40, 60, 80, 105, 126],
  [30, 38, 50, 73, 95, 120, 160],
  [43, 80, 63, 83, 115, 130, 150],
];

export const Plot2DXData = () => {
  return (
    <PitayaLayout>
      <h3> Pitaya Plot 2D xData</h3>
      <PitayaRoundBox>
        <h1>折線圖</h1>
        <br />
        <PitayaPlot
          legend={legend}
          xLabel={xLabel}
          xData={twoDXData}
          yData={yData}
          xTick={'日期'}
          yTicks={['訂單數']}
          template={lineAreaTemplate}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const BarPlot = () => {
  return (
    <PitayaLayout>
      <h3> Pitaya Bar Plot </h3>
      <PitayaRoundBox>
        <h1>長條圖</h1>
        <br />
        <PitayaBarPlot
          legend={legend}
          xLabel={xLabel}
          yData={yData}
          xTick={'日期'}
          yTicks={['訂單數']}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const HorizontalBarPlot = () => {
  const legend = ['銷售數量'];
  const xLabel = [
    '產品1',
    '產品2',
    '產品3',
    '產品4',
    '產品5',
    '產品6',
    '產品7',
    '產品8',
    '產品9',
    '產品10',
  ];
  const yData = [[1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]];
  return (
    <PitayaLayout>
      <h3> Pitaya Horizontal Bar Plot </h3>
      <PitayaRoundBox>
        <h1>橫條圖</h1>
        <br />
        <PitayaHorizontalBarPlot
          legend={legend}
          xLabel={xLabel}
          yData={yData}
          xTick={'銷量'}
          yTicks={['產品名稱']}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const PiePlot = () => {
  const pieYData = [100, 50, 380];
  return (
    <PitayaLayout>
      <h3> Pitaya Pie Plot </h3>
      <PitayaRoundBox>
        <h1>圓餅圖</h1>
        <br />
        <PitayaPiePlot legend={legend} yData={pieYData} />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};
