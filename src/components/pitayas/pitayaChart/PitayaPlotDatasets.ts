import { Nullable } from '@src/types/BaseTypes';
import { ChartDataFormat } from '@src/components/pitayas/pitayaChart/PitayaChartProps';

export enum PlotType {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie',
  HorizontalBar = 'horizontalBar',
}

export interface HorPlotDatasetsParams {
  legend?: string[];
  xData: number[];
  type: PlotType;
}
export interface PlotDatasetsParams {
  legend?: string[];
  xData?: number[][] | number[] | string[][] | string[];
  yData: Array<Array<Nullable<number>>>;
  yDataFormats?: ChartDataFormat[];
  displayYAxis2?: boolean;
  type: PlotType;
}

export interface PlotDataPoint {
  x?: Nullable<number | number[]>;
  y: Nullable<number>;
}

type BorderCapStyleType = 'butt' | 'round' | 'square';
type BorderJoinStyleType = 'bevel' | 'round' | 'miter';
export interface PitayaPlotDatasets {
  label?: string;
  fill?: boolean;
  lineTension?: number;
  backgroundColor?: string | string[];
  borderColor?: string;
  borderWidth?: number;
  borderCapStyle?: BorderCapStyleType;
  borderDash?: number[];
  borderDashOffset?: number;
  borderJoinStyle?: BorderJoinStyleType;
  pointBorderColor?: string;
  pointBackgroundColor?: string;
  pointBorderWidth?: number;
  pointHoverRadius?: number;
  pointHoverBackgroundColor?: string;
  pointHoverBorderColor?: string;
  pointHoverBorderWidth?: number;
  pointRadius?: number;
  pointHitRadius?: number;
  data?: PlotDataPoint[] | number[];
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hidden?: boolean;
  yAxisID?: string;
}

export interface PitayaPlotData {
  labels: string[] | undefined;
  datasets: PitayaPlotDatasets[];
}
