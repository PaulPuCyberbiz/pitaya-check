import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import moment, { Moment } from 'moment';
import { DateRangePicker } from 'react-dates';
import { locale } from '@src/locale/i18n';
import classNames from 'classnames';
/* tslint:disable */
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
/* tslint:enable */

import styles from '@src/assets/stylesheets/pitayas/PitayaDateRangePicker.module.scss';
import { useTranslation } from 'react-i18next';

type MomentObj = Moment | null;

export type DateRange = {
  startDate: MomentObj;
  endDate: MomentObj;
};

export type FocusInput = 'startDate' | 'endDate' | null;

type OmitProps =
  | 'startDate'
  | 'startDateId'
  | 'endDate'
  | 'endDateId'
  | 'onDatesChange'
  | 'focusedInput'
  | 'onFocusChange'
  | 'onClose';

export type PitayaDateRangePickerProps = Omit<
  React.ComponentProps<DateRangePicker>,
  OmitProps
> & {
  className?: string;
  startDate: MomentObj;
  startDateId?: string;
  endDate: MomentObj;
  endDateId?: string;
  minDate?: MomentObj;
  onDatesChange: (r: DateRange) => void;
  onClose?: (r: DateRange) => void;
};

const validateSelectingDate = (focusedInput: FocusInput) => {
  switch (focusedInput) {
    case 'startDate':
      return 'selecting-start-date';
    case 'endDate':
      return 'selecting-end-date';
    default:
      return '';
  }
};

const Day = ({ date: currentDate }: { date: Moment }) => {
  const date = currentDate.date();
  const firstDateOfMonth = currentDate.clone().startOf('month');
  const lastDateOfMonth = currentDate.clone().endOf('month');

  const className = [
    'day-content',
    currentDate.day() === 0 && 'first-day-of-week',
    currentDate.day() === 6 && 'last-day-of-week',
    currentDate.date() === firstDateOfMonth.date() && 'first-day-of-month',
    currentDate.date() === lastDateOfMonth.date() && 'last-day-of-month',
  ]
    .filter(Boolean)
    .join(' ');
  return <span className={className} data-day={date} />;
};

const customProps: Partial<React.ComponentProps<DateRangePicker>> = {
  // DateRangePickerInput
  customArrowIcon: '~',
  displayFormat: 'YYYY-MM-DD',
  noBorder: true,
  // DayPicker
  verticalSpacing: 0,
  hideKeyboardShortcutsPanel: true,

  // Month
  firstDayOfWeek: 0,
  isOutsideRange: () => false,
  navPrev: <div className="nav-icon prev-icon" />,
  navNext: <div className="nav-icon next-icon" />,
  transitionDuration: 100,

  // Day
  daySize: 40,
  renderDayContents: d => <Day date={d as Moment} />,
};

export const PitayaDateRangePicker = (props: PitayaDateRangePickerProps) => {
  const {
    className: givenName,
    startDateId: sId,
    endDateId: eId,
    startDate,
    endDate,
    onDatesChange,
    minDate,
    onClose,
    ...rest
  } = props;

  moment.locale(locale);

  const { t } = useTranslation('Pitaya');
  const startDateIdRender = uuid() || 'PitayaStartDate';
  const endDateIdRender = uuid() || 'PitayaEndDate';

  const [startDateId, setStartDateId] = useState(startDateIdRender);
  if (sId) {
    setStartDateId(sId);
  }

  const [endDateId, setEndDateId] = useState(endDateIdRender);
  if (eId) {
    setEndDateId(eId);
  }

  const [focusedInput, setFocusedInput] = useState<FocusInput>(null);

  const currentDateClass = validateSelectingDate(focusedInput);
  const className = classNames(
    styles['pitaya-date-range-picker'],
    givenName,
    currentDateClass,
  );

  startDate?.locale(locale.toLowerCase());

  return (
    <div className={className}>
      <DateRangePicker
        {...customProps}
        startDatePlaceholderText={t('PitayaDateRangePicker_placeholder')}
        endDatePlaceholderText={t('PitayaDateRangePicker_placeholder')}
        startDate={startDate as any}
        endDate={endDate as any}
        startDateId={startDateId}
        endDateId={endDateId}
        onDatesChange={onDatesChange as any}
        minDate={minDate as any}
        focusedInput={focusedInput}
        onFocusChange={setFocusedInput}
        onClose={onClose as any}
        {...rest}
      />
    </div>
  );
};
