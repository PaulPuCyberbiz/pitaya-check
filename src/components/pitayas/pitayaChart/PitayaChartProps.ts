import { PitayaPlotDatasets } from '@src/components/pitayas/pitayaChart/PitayaPlotDatasets';
import { Nullable } from '@src/types/BaseTypes';

export interface PitayaChartProps {
  legend?: string[];
  xLabel: string[];
  xData?: number[][] | number[] | string[][] | string[];
  yData: Array<Array<Nullable<number>>>;
  xTick?: string;
  yTicks?: string[];
  xDataFormat?: ChartDataFormat;
  yDataFormats?: ChartDataFormat[];
  yDataDefaultEnabled?: boolean[];
  template?: PitayaPlotDatasets;
  options?: Record<string, unknown>;
}

export enum ChartDataFormat {
  Normal = 'NORMAL',
  Percentage = 'PERCENTAGE',
}
