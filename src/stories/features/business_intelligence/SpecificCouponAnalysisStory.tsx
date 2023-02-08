import React, { useState } from 'react';
import SpecificCouponAnalysis from '@src/features/business_intelligence/promo_effect/components/coupons/SpecificCouponAnalysis';
import PitayaLayout from '@src/components/pitayas/PitayaLayout.tsx';
import {
  CouponType,
  Coupon,
} from '@src/features/business_intelligence/promo_effect/domain/models/Coupon';
import { OptionType } from '@src/types/BaseTypes';
import { decorate } from '@storybook/addon-actions';
import { DateRange } from '@src/components/pitayas/PitayaDateRangePicker';
import moment, { Moment } from 'moment';

const couponOptions: CouponType[] = [
  {
    label: '消費贈優惠券',
    value: '1',
  },
  {
    label: '遊戲優惠券',
    value: '2',
  },
  {
    label: '其他優惠券',
    value: '3',
  },
];
const buyBonusSubjectOptions: Coupon[] = [
  { label: '公仔', value: 'doll' },
  { label: '衣服', value: 'clothes' },
  { label: '褲子', value: 'pants' },
  { label: '文具', value: 'stationery' },
];

const gamesSubjectOptions: Coupon[] = [
  { label: '抽獎', value: 'draw' },
  { label: '五折', value: 'fity_persent_off' },
];
const couponNamesData = [
  {
    couponTypeId: couponOptions[0].value,
    subjectOptions: buyBonusSubjectOptions,
  },
  { couponTypeId: couponOptions[1].value, subjectOptions: gamesSubjectOptions },
  { couponTypeId: couponOptions[2].value, subjectOptions: [] },
];
const allNumberCardsData = [
  {
    id: 'doll',
    data: [
      {
        name: '折扣金額',
        numberOfCard: 78909,
      },
      {
        name: '平均折扣比',
        numberOfCard: 34,
      },
      {
        name: '“優惠券名稱”營收金額名字很長很長的樣子',
        numberOfCard: 123000,
      },
      {
        name: '目標客群營收總額',
        numberOfCard: 123000,
      },
      {
        name: '使用數量',
        numberOfCard: 2345678,
      },
      {
        name: '使用率',
        numberOfCard: 2,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: 2345678,
      },
      {
        name: '目標客群人數',
        numberOfCard: 2345678,
      },
    ],
  },
  {
    id: 'clothes',
    data: [
      {
        name: '折扣金額',
        numberOfCard: 4509,
      },
      {
        name: '平均折扣比',
        numberOfCard: 54,
      },
      {
        name: '“優惠券名稱”營收金額名字很長很長的樣子',
        numberOfCard: 234000,
      },
      {
        name: '目標客群營收總額',
        numberOfCard: 42000,
      },
      {
        name: '使用數量',
        numberOfCard: 5345678,
      },
      {
        name: '使用率',
        numberOfCard: 2,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: 2943,
      },
      {
        name: '目標客群人數',
        numberOfCard: 2678,
      },
    ],
  },
  {
    id: 'pants',
    data: [
      {
        name: '折扣金額',
        numberOfCard: 64219,
      },
      {
        name: '平均折扣比',
        numberOfCard: 42,
      },
      {
        name: '“優惠券名稱”營收金額名字很長很長的樣子',
        numberOfCard: 940344,
      },
      {
        name: '目標客群營收總額',
        numberOfCard: 58934,
      },
      {
        name: '使用數量',
        numberOfCard: 435894,
      },
      {
        name: '使用率',
        numberOfCard: 30,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: 42902,
      },
      {
        name: '目標客群人數',
        numberOfCard: 329393,
      },
    ],
  },
  {
    id: 'stationery',
    data: [
      {
        name: '折扣金額',
        numberOfCard: 942331,
      },
      {
        name: '平均折扣比',
        numberOfCard: 83,
      },
      {
        name: '“優惠券名稱”營收金額名字很長很長的樣子',
        numberOfCard: 324232,
      },
      {
        name: '目標客群營收總額',
        numberOfCard: 9438,
      },
      {
        name: '使用數量',
        numberOfCard: 84237,
      },
      {
        name: '使用率',
        numberOfCard: 38,
      },
      {
        name: '平均使用週期（天）',
        numberOfCard: 32932,
      },
      {
        name: '目標客群人數',
        numberOfCard: 49942,
      },
    ],
  },
];
const chartNavigationData = [
  {
    label: '使用狀況分析',
    value: '1',
  },
  {
    label: '使用率分析',
    value: '2',
  },
  {
    label: '營收分析',
    value: '3',
  },
  {
    label: 'AOV分析',
    value: '4',
  },
];
const chartsData = [
  {
    id: '1',
    legend: ['使用數', '發放數', '剩餘未使用數'],
    xLabel: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
      [43, 52, 22, 55, 74, 42],
      [23, 82, 42, 75, 34, 52],
      [143, 32, 222, 35, 154, 72],
    ],
    xTick: '上半年',
    yTick: '數量',
  },
  {
    id: '2',
    legend: ['區間使用數', '累積發放數', '剩餘未使用數'],
    xLabel: ['7月', '8月', '9月', '10月', '11月', '12月'],
    yData: [
      [13, 82, 42, 125, 54, 122],
      [73, 22, 122, 85, 254, 62],
      [23, 292, 52, 245, 34, 242],
    ],
    xTick: '下半年',
    yTick: '數量',
  },
  {
    id: '3',
    legend: ['區間使用數', '累積發放數', '剩餘未使用數'],
    xLabel: ['7月', '8月', '9月', '10月', '11月', '12月'],
    yData: [
      [83, 42, 142, 25, 154, 52],
      [73, 432, 122, 325, 63, 262],
      [323, 192, 352, 145, 434, 242],
    ],
    xTick: '下半年',
    yTick: '數量',
  },
  {
    id: '4',
    legend: ['區間使用數', '累積發放數', '剩餘未使用數'],
    xLabel: ['7月', '8月', '9月', '10月', '11月', '12月'],
    yData: [
      [423, 522, 622, 225, 64, 322],
      [373, 172, 222, 55, 354, 92],
      [53, 192, 62, 345, 124, 442],
    ],
    xTick: '下半年',
    yTick: '數量',
  },
];

const SpecificCouponAnalysisStory = () => {
  const [currentOptionData, setCurrentOptionData] = useState(
    allNumberCardsData[0].data,
  );
  const [currentCouponsData, setCurrentCouponsData] = useState<Coupon[]>(
    buyBonusSubjectOptions,
  );
  const [selectedCouponType, setSelectedCouponType] = useState(
    couponOptions[0],
  );
  const [selectedCoupon, setSelectedCoupon] = useState(
    buyBonusSubjectOptions[0],
  );
  const [selectedChartNavigation, setSelectedChartNavigation] = useState(
    chartNavigationData[0],
  );

  const onCouponTypeChange = (o: CouponType) => {
    setSelectedCouponType(o);
    const chooseCouponName = couponNamesData.find(item => {
      return item.couponTypeId === o.value;
    });
    if (chooseCouponName) {
      setCurrentCouponsData(chooseCouponName.subjectOptions);
    }
  };

  const onCouponChange = (o: Coupon) => {
    setSelectedCoupon(o);
    const newCurrentSubjectOptionData = allNumberCardsData.find(item => {
      return item.id === o.value;
    });
    if (newCurrentSubjectOptionData) {
      setCurrentOptionData(newCurrentSubjectOptionData.data);
    }
  };

  const sleep = (ms: number) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });

  const searchCouponName = async (search: string, page: number) => {
    await sleep(1000);
    if (page > 3) {
      return {
        options: [],
      };
    }

    const per = 2;
    const start = (page - 1) * per;
    const end = start + per;

    let filteredOptions: OptionType[];
    if (!search) {
      filteredOptions = currentCouponsData;
    } else {
      const searchLower = search.toLowerCase();

      filteredOptions = currentCouponsData.filter(({ label }) =>
        label.toLowerCase().includes(searchLower),
      );
    }

    return {
      options: filteredOptions.slice(start, end),
    };
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
  const [dateRangeStart, setDateRangeStart] = useState<Moment | null>(
    moment().subtract(1, 'months'),
  );
  const [dateRangeEnd, setDateRangeEnd] = useState<Moment | null>(moment());

  const onChartNavigationClick = (val: OptionType) => {
    const newChartNavigation = chartNavigationData.find(
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
      <SpecificCouponAnalysis
        couponTypes={couponOptions}
        cacheUniq={selectedCouponType}
        numberCardsData={currentOptionData}
        selectedCouponType={selectedCouponType}
        selectedCoupon={selectedCoupon}
        chartNavigationData={chartNavigationData}
        selectedChartNavigation={selectedChartNavigation}
        chartData={currentChartData}
        dateRangeStart={dateRangeStart}
        dateRangeEnd={dateRangeEnd}
        onDatesChange={r => onDatesChange(r)}
        onCouponTypeChange={onCouponTypeChange}
        onCouponChange={onCouponChange}
        onChartNavigationClick={onChartNavigationClick}
        loadCoupons={searchCouponName}
      />
    </PitayaLayout>
  );
};

export default SpecificCouponAnalysisStory;
