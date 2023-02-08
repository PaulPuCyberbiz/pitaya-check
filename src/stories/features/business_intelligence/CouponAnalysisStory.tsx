import React, { useState } from 'react';
import CouponAnalysis from '@src/features/business_intelligence/promo_effect/components/coupons/CouponAnalysis';
import PitayaLayout from '@src/components/pitayas/PitayaLayout.tsx';
import { CouponType } from '@src/features/business_intelligence/promo_effect/domain/models/Coupon';
import { OptionType } from '@src/types/BaseTypes';
import moment, { Moment } from 'moment';
import { DateRange } from '@src/components/pitayas/PitayaDateRangePicker';
import { decorate } from '@storybook/addon-actions';

const couponOptions = [
  {
    label: '優惠券代碼',
    value: '1',
  },
  {
    label: '生日優惠券',
    value: '2',
  },
  {
    label: '註冊優惠券',
    value: '3',
  },
];

const allNumberCardsData = [
  {
    id: 1,
    data: [
      {
        name: '折扣金額',
        numberOfCard: 78909,
      },
      {
        name: '平均百分比',
        numberOfCard: 45,
      },
      {
        name: '總營收金額',
        numberOfCard: 2345678,
      },
      {
        name: '使用數量',
        numberOfCard: 2345678,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: <span>2345678</span>,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        name: '折扣金額',
        numberOfCard: 88909,
      },
      {
        name: '平均百分比',
        numberOfCard: 73,
      },
      {
        name: '總營收金額',
        numberOfCard: 3345678,
      },
      {
        name: '使用數量',
        numberOfCard: 3345678,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: 3345678,
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        name: '折扣金額',
        numberOfCard: 20333,
      },
      {
        name: '平均百分比',
        numberOfCard: 68,
      },
      {
        name: '總營收金額',
        numberOfCard: 4345678,
      },
      {
        name: '使用數量',
        numberOfCard: 5345678,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: 6345678,
      },
    ],
  },
];

const chartOptionsData = [
  {
    label: '使用狀況分析',
    value: '1',
  },
  {
    label: '優惠券營收分析',
    value: '2',
  },
];

const chartsData = [
  {
    id: '1',
    legend: ['區間使用數', '累積發放數', '剩餘未使用數', '使用上限'],
    xLabel: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
      [43, 52, 22, 55, 74, 42],
      [23, 82, 42, 75, 34, 52],
      [143, 32, 222, 35, 154, 72],
      [53, 222, 62, 125, 24, 132],
    ],
    xTick: '上半年',
    yTick: '數量',
  },
  {
    id: '2',
    legend: ['區間使用數', '累積發放數', '剩餘未使用數', '使用上限'],
    xLabel: ['7月', '8月', '9月', '10月', '11月', '12月'],
    yData: [
      [13, 82, 42, 125, 54, 122],
      [73, 22, 122, 85, 254, 62],
      [23, 292, 52, 245, 34, 242],
      [143, 32, 222, 95, 174, 62],
    ],
    xTick: '下半年',
    yTick: '數量',
  },
];

const CouponAnalysisStory = () => {
  const [currentOptionData, setCurrentOptionData] = useState(
    allNumberCardsData[0].data,
  );
  const [selectedCouponType, setSelectedCouponType] = useState(
    couponOptions[0],
  );
  const [selectedChartNavigation, setSelectedChartNavigation] = useState(
    chartOptionsData[0],
  );
  const [dateRangeStart, setDateRangeStart] = useState<Moment | null>(
    moment().subtract(1, 'months'),
  );
  const [dateRangeEnd, setDateRangeEnd] = useState<Moment | null>(moment());

  const onCouponOptionChange = (option: CouponType) => {
    const newCurrentData = allNumberCardsData.find(
      item => item.id === Number(option.value),
    );
    setSelectedCouponType(option);
    if (newCurrentData) {
      setCurrentOptionData(newCurrentData.data);
    }
  };
  const chartDataFactory = (data: any) => {
    return {
      legend: data.legend,
      xLabel: data.xLabel,
      yData: data.yData,
      xTick: data.xTick,
      yTick: data.yTick,
    };
  };
  const [currentChartData, setCurrentChartData] = useState(
    chartDataFactory(chartsData[0]),
  );
  const onChartNavigationClick = (val: OptionType) => {
    const newChartNavigation = chartOptionsData.find(
      item => item.value === val.value,
    );
    if (newChartNavigation) {
      setSelectedChartNavigation(newChartNavigation);
    }
    const newChartData = chartsData.find(item => item.id === val.value);
    setCurrentChartData(chartDataFactory(newChartData));
  };

  const onDatesChangeDeco = decorate([
    args => [`New date range: ${args[0]} ~ ${args[1]}`],
  ]);
  const onDatesChange = (r: DateRange) => {
    setDateRangeStart(r.startDate);
    setDateRangeEnd(r.endDate);
    onDatesChangeDeco.action('onDatesChange')(r.startDate, r.endDate);
  };
  return (
    <PitayaLayout>
      <CouponAnalysis
        couponTypes={couponOptions}
        chartNavigationData={chartOptionsData}
        numberCardsData={currentOptionData}
        selectedCouponType={selectedCouponType}
        selectedChartNavigation={selectedChartNavigation}
        chartData={currentChartData}
        dateRangeStart={dateRangeStart}
        dateRangeEnd={dateRangeEnd}
        onDatesChange={r => onDatesChange(r)}
        onCouponTypeChange={onCouponOptionChange}
        onChartNavigationClick={val => onChartNavigationClick(val)}
      />
    </PitayaLayout>
  );
};

export default CouponAnalysisStory;
