import { PitayaPlotDatasets } from '@src/components/pitayas/pitayaChart/PitayaPlotDatasets';

export const generalSettings: PitayaPlotDatasets = {
  borderWidth: 1,
};

export const lineChartTemplate: PitayaPlotDatasets = {
  ...generalSettings,
  fill: false,
  lineTension: 0.5,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  borderWidth: 2.5,
  pointBackgroundColor: '#fff',
  pointBorderWidth: 6,
  pointHoverRadius: 6,
  pointHoverBackgroundColor: '#3C5587',
  pointHoverBorderColor: '#DEDEE0',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
};

export const lineAreaTemplate: PitayaPlotDatasets = {
  ...lineChartTemplate,
  fill: true,
};
