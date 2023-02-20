import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import moment, { Moment } from 'moment';
import _ from 'lodash';
// tslint:disable-next-line:no-submodule-imports
import 'react-datepicker/dist/react-datepicker.css';
import styles from '@src/assets/stylesheets/pitayas/PitayaDateTimePicker.module.scss';
import { Size, sizeClassName } from '@src/components/pitayas/PitayaStatus';

import { withTranslation, WithTranslation } from 'react-i18next';
import i18n from '@src/locale/i18n';

interface DatePickerCustomHeader {
  date: Date;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  changeYear(year: number): void;
  changeMonth(month: number): void;
  decreaseMonth(): void;
  increaseMonth(): void;
}
const customHeader = (t: any) => (props: DatePickerCustomHeader) => {
  const { date, decreaseMonth, increaseMonth } = props;
  const arrowLeft = (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="15px"
      viewBox="0 0 492 492"
    >
      <g>
        <path
          d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,
              7.848-19.124 c0-7.2-2.78-14.012-7.848-19.088L223.28,
              49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
              L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,
              7.844,19.096l177.412,177.412 c5.064,5.06,11.812,7.844,19.016,7.844c7.196,
              0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
              c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,
              27.288-12.78,27.288-27.6v-22.788 C492,219.198,479.172,207.418,464.344,207.418z"
        />
      </g>
    </svg>
  );
  const arrowRight = (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="15px"
      viewBox="0 0 492 492"
    >
      <g>
        <path
          d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,
              0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,
              19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,
              0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,
              388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,
              18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
              l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
        />
      </g>
    </svg>
  );
  return (
    <div className="react-datepicker__custom-header">
      <div className="prev-month btn-month" onClick={decreaseMonth}>
        {arrowLeft}
      </div>
      <p>{`${t('PitayaDateTimePicker_get_month', {
        month: date.toLocaleDateString(i18n.language, { month: 'long' }),
        year: `${date.getFullYear()}`,
      })}`}</p>
      <div className="next-month btn-month" onClick={increaseMonth}>
        {arrowRight}
      </div>
    </div>
  );
};

export type PitayaSelectedDate = Moment | null;

type DateProps =
  | 'startDate'
  | 'endDate'
  | 'minDate'
  | 'maxDate'
  | 'maxTime'
  | 'minTime';
type OmitProps = 'onChange' | DateProps;
export interface PitayaDateTimePickerProps
  extends Omit<ReactDatePickerProps, OmitProps> {
  className?: string;
  disabled?: boolean;
  label?: string;
  selectedDate?: PitayaSelectedDate;
  startDate?: PitayaSelectedDate;
  endDate?: PitayaSelectedDate;
  minDate?: PitayaSelectedDate;
  maxDate?: PitayaSelectedDate;
  invalid?: boolean;
  invalidContent?: string;
  minTime?: PitayaSelectedDate;
  maxTime?: PitayaSelectedDate;
  onChange?: (m: PitayaSelectedDate) => void;
  datePickerSize?: Size;
  specifyLabel?: string;
}

const dateProps: DateProps[] = [
  'startDate',
  'endDate',
  'minDate',
  'maxDate',
  'maxTime',
  'minTime',
];

const PitayaDateTimePicker = (
  props: PitayaDateTimePickerProps & WithTranslation,
) => {
  const {
    t,
    className,
    label,
    disabled,
    selectedDate,
    showTimeSelect = true,
    invalid,
    invalidContent,
    onChange,
    datePickerSize,
    ...rest
  } = props;
  const sizeName = sizeClassName(datePickerSize);
  const dateFormat = showTimeSelect ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd';
  const componentClassName = [
    styles.pitayaDateTimePicker,
    className,
    invalid && 'error',
  ]
    .filter(Boolean)
    .join(' ');
  const selected = selectedDate?.isValid() ? selectedDate.toDate() : null;
  const onChangeDate = (d: Date) => {
    const date = d === null ? d : moment(d);
    onChange?.(date);
  };

  const otherProps = _.omit(rest, dateProps);
  const dates = _.mapValues(_.pick(props, dateProps), date =>
    date?.isValid() ? date.toDate() : null,
  ) as Pick<ReactDatePickerProps, DateProps>;
  return (
    <div className={componentClassName}>
      {label && <p className="datepicker-name">{label}</p>}
      <span
        className={`pitayaDateTimePicker__datepicker ${
          disabled ? 'disabled' : 'editable'
        }`}
      >
        <DatePicker
          locale={i18n.language}
          className={sizeName}
          dateFormat={dateFormat}
          disabled={disabled}
          onChange={onChangeDate}
          peekNextMonth={true}
          renderCustomHeader={customHeader(t)}
          selected={selected}
          showTimeSelect={showTimeSelect}
          timeFormat={'HH:mm'}
          timeIntervals={15}
          formatWeekDay={day => t('PitayaDateTimePicker', { context: day })}
          popperProps={{
            positionFixed: true,
          }}
          popperModifiers={{
            preventOverflow: {
              boundariesElement: 'viewport',
            },
          }}
          {...dates}
          {...otherProps}
        />
        <svg
          className={sizeName}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          width="20px"
        >
          <g>
            <path
              fill="#5B7CE3"
              d="M13.8,0.8h-2.3V0.4c0-0.2-0.2-0.4-0.4-0.4h-2C8.9,0,8.7,0.2,8.7,
                  0.4v0.4H5.5V0.4C5.5,0.2,5.3,0,5.1,0h-2C2.9,0,2.7,0.2,2.7,
                  0.4v0.4H0.4C0.2,0.8,0,1,0,1.2V4v9.7c0,0.2,0.2,0.4,0.4,
                  0.4h13.3c0.2,0,0.4-0.2,0.4-0.4V4V1.2C14.2,0.9,14,0.8,13.8,
                  0.8z M10.7,0.7v1.2H9.5V1.1l0,0l0,0V0.7H10.7z M3.5,0.7h1.2v1.2H3.5V0.7z
                  M0.9,1.5h1.9v0.8c0,0.2,0.2,0.4,0.4,0.4h2c0.2,0,0.4-0.2,
                  0.4-0.4V1.5h3.2v0.8c0,0.2,0.2,0.4,0.4,0.4h2c0.2,0,0.4-0.2,
                  0.4-0.4V1.5h1.9v2H0.9V1.5zM13.4,13.2H0.9V4.3h12.5V13.2z"
            />
            <path
              fill="#5B7CE3"
              d="M3.2,11.9h7.9c0.2,0,0.4-0.2,0.4-0.4V6.4c0-0.2-0.2-0.4-0.4-0.4H3.2C3,
                  6,2.8,6.2,2.8,6.4v5.1C2.8,11.7,3,11.9,3.2,11.9z M3.5,9.4h3.2v1.8H3.5V9.4z
                  M7.5,11.1V9.3h3.2v1.8H7.5z M10.7,8.6H7.5V6.8h3.2V8.6z M6.8,6.8v1.8H3.6V6.8H6.8z"
            />
          </g>
        </svg>
      </span>
      <div>{invalid && <p className="alert_content">{invalidContent}</p>}</div>
    </div>
  );
};

export default withTranslation('Pitaya')(PitayaDateTimePicker);
