import React from 'react';
import StatementsIndexField from '@src/features/statements/components/StatementsIndexField';
import { decorate } from '@storybook/addon-actions';

import { Moment } from 'moment';
import moment from 'moment';

export type Statement = {
  id: number;
  toPaid: number;
  yearMonth: Moment;
  period: number;
  isConfirmed: boolean;
  hasEinvoice: boolean;
};

const statements: Statement[] = [
  {
    id: 1,
    toPaid: 66666,
    yearMonth: moment('202007', 'YYYY-MM'),
    period: 1,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 2,
    toPaid: 77777,
    yearMonth: moment('202007', 'YYYY-MM'),
    period: 2,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 3,
    toPaid: 88888,
    yearMonth: moment('202008', 'YYYY-MM'),
    period: 1,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 4,
    toPaid: 77777,
    yearMonth: moment('202008', 'YYYY-MM'),
    period: 2,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 5,
    toPaid: 66666,
    yearMonth: moment('202009', 'YYYY-MM'),
    period: 1,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 6,
    toPaid: 66666,
    yearMonth: moment('202009', 'YYYY-MM'),
    period: 2,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 7,
    toPaid: 77777,
    yearMonth: moment('202010', 'YYYY-MM'),
    period: 1,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 8,
    toPaid: 88888,
    yearMonth: moment('202010', 'YYYY-MM'),
    period: 2,
    isConfirmed: true,
    hasEinvoice: false,
  },
  {
    id: 9,
    toPaid: 77777,
    yearMonth: moment('202011', 'YYYY-MM'),
    period: 1,
    isConfirmed: true,
    hasEinvoice: false,
  },
];

const onYearChange = (year: number) => {
  decorate([]).action('onYearChange')(`year: ${year}`);
};
const onMonthChange = (month: number) => {
  decorate([]).action('onMonthChange')(`month: ${month}`);
};
const onPeriodChange = (period: number) => {
  decorate([]).action('onPeriodChange')(`period: ${period}`);
};
const onSearch = () => {
  decorate([]).action('onSearch')('validate and search');
};
const onDownloadExcel = (id: number) => {
  decorate([]).action('onDownloadExcel')(`id: ${id}`);
};
const onPageChange = (page: number) => {
  decorate([]).action('onPageChange')(`fetch page: ${page}`);
};

const StatementsIndexFieldStroy = () => {
  return (
    <StatementsIndexField
      statements={statements}
      count={27}
      pages={3}
      currentPage={1}
      showSinleadFee={true}
      onYearChange={onYearChange}
      onMonthChange={onMonthChange}
      onPeriodChange={onPeriodChange}
      onSearch={onSearch}
      onDownloadExcel={onDownloadExcel}
      onPageChange={onPageChange}
    />
  );
};

export default StatementsIndexFieldStroy;
