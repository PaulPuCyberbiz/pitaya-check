import _ from 'lodash';
import {
  PlotDatasetsParams,
  PitayaPlotDatasets,
  PlotDataPoint,
  PlotType,
  PitayaPlotData,
} from '@src/components/pitayas/pitayaChart/PitayaPlotDatasets';
import {
  pitayaChartColors,
  pitayaChartOpacityColors,
  pitayaDoughnutChartColorsHex,
} from '@src/components/pitayas/pitayaChart/PitayaChartColors';
import { Nullable } from '@src/types/BaseTypes';
import { ChartDataFormat } from '@src/components/pitayas/pitayaChart/PitayaChartProps';

const yAxisIDNormal = '';
const yAxisIDPercentage = 'yPercentage';

export class PitayaChartFactory {
  static createPlotData(
    xLabel: string[],
    datasetsParams: PlotDatasetsParams,
    template: PitayaPlotDatasets,
    yDataDefaultEnabled?: boolean[],
  ): PitayaPlotData {
    return {
      labels: xLabel,
      datasets: this.createPlotDatasets(
        datasetsParams,
        template,
        yDataDefaultEnabled,
      ),
    };
  }

  static yDataSet(
    yData: Array<Array<Nullable<number>>>,
    formats: ChartDataFormat[],
    displayYAxis2?: boolean,
  ): Array<Array<Nullable<number>>> {
    const yDataAdjusted: Array<Array<Nullable<number>>> = [];

    if (displayYAxis2) {
      formats.map((format, index) => {
        switch (format) {
          case ChartDataFormat.Percentage:
            yDataAdjusted.push(
              yData[index].map(val =>
                val ? Number((val * 100).toFixed(2)) : val,
              ),
            );
            break;
          case ChartDataFormat.Normal:
          default:
            yDataAdjusted.push(
              yData[index].map(val => (val ? Number(val.toFixed(2)) : val)),
            );
            break;
        }
      });
    } else {
      switch (formats[0]) {
        case ChartDataFormat.Percentage:
          return yData.map(item =>
            item.map(val => (val ? Number((val * 100).toFixed(2)) : val)),
          );
        case ChartDataFormat.Normal:
        default:
          return yData.map(item =>
            item.map(val => (val ? Number(val.toFixed(2)) : val)),
          );
      }
    }

    return yDataAdjusted;
  }

  static createPlotDatasets(
    DatasetsParams: PlotDatasetsParams,
    template: PitayaPlotDatasets,
    yDataDefaultEnabled?: boolean[],
  ): PitayaPlotDatasets[] {
    const {
      legend,
      xData = [],
      yData,
      yDataFormats = [ChartDataFormat.Normal],
      displayYAxis2,
      type,
    } = DatasetsParams;
    const is2D = Array.isArray(xData?.[0]);

    const yDataAdjusted = this.yDataSet(yData, yDataFormats, displayYAxis2);
    const result: PitayaPlotDatasets[] = yDataAdjusted.map((item, index) => {
      const x = (is2D ? xData[index] : xData) as number[];

      if (x.length > 0 && x.length !== item.length) {
        throw new Error('xData 與 yData 長度不符');
      }

      const yAxisID =
        yDataFormats.length > 1
          ? yDataFormats[index] === ChartDataFormat.Normal
            ? yAxisIDNormal
            : yAxisIDPercentage
          : yAxisIDNormal;

      const commonData: PitayaPlotDatasets = {
        ...template,
        label: legend ? legend[index] : String(index + 1),
        backgroundColor: pitayaChartColors[index],
        borderColor: pitayaChartColors[index],
        data: this.createPlotDataArray(type, item, x),
        hidden:
          yDataDefaultEnabled && yDataDefaultEnabled.length > 1
            ? !yDataDefaultEnabled[index]
            : false,
        yAxisID,
      };

      return type === PlotType.Line
        ? {
            ...commonData,
            backgroundColor: pitayaChartOpacityColors[index],
            pointBorderColor: pitayaChartColors[index],
          }
        : commonData;
    });
    return result;
  }

  static createPlotDataArray(
    type: string,
    yArray: Array<Nullable<number>>,
    xArray: number[],
  ): PlotDataPoint[] {
    return _.zipWith(yArray, xArray, (y, x) => {
      return type !== PlotType.HorizontalBar ? { x, y } : { x: y, y: x };
    });
  }

  static createPlotOptions(params: {
    legend?: string[];
    xTick?: string;
    yTicks?: string[];
    options?: Record<string, unknown>;
  }) {
    const { legend, xTick, yTicks = [''], options } = params;

    return {
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
            scaleLabel: {
              display: true,
              labelString: yTicks[0],
            },
          },
        ],
      },
      ...options,
    };
  }

  static createPiePlotData(
    legend: string[] | undefined,
    yData: number[],
  ): PitayaPlotData {
    return {
      labels: legend,
      datasets: [
        {
          data: yData,
          backgroundColor: pitayaChartColors,
        },
      ],
    };
  }
  static createDoughnutPlotData(
    yData: number[],
    legend?: string[],
  ): PitayaPlotData {
    return {
      labels: legend,
      datasets: [
        {
          data: yData,
          backgroundColor: pitayaDoughnutChartColorsHex,
        },
      ],
    };
  }
}
