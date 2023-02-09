import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import ReactMarkdown from 'react-markdown';
import { withKnobs } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';

import { Nullable } from '@src/types/BaseTypes';
import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaDateTimePicker from '@src/components/pitayas/PitayaDateTimePicker';
import PitayaDisableableDatePicker from '@src/components/pitayas/PitayaDisableableDatePicker';
import { Layout } from '@stories/Layout';
import {
  PitayaDateRangePicker,
  DateRange,
} from '@src/components/pitayas/PitayaDateRangePicker';
import PitayaFlex, { FlexJustify } from '@src/components/pitayas/PitayaFlex';

export default {
  title: 'Pitaya / DateTimePicker',
  decorators: [withKnobs],
};

export const 預設 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaDateTimePicker
    label="DateTime Picker"
    placeholderText="Please select a date"
    selectedDate={date}
    onChange={setDate}
  />
);
  \`\`\``;

  const [date, setDate] = useState<Nullable<Moment>>();

  const onChange = (m: Nullable<Moment>) => {
    setDate(m);
    decorate([args => [args[0]]]).action('change date')(m);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>預設</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <h4>Large</h4>
        <PitayaDateTimePicker
          label="DateTime Picker"
          placeholderText="Please select a date"
          selectedDate={date}
          onChange={onChange}
          datePickerSize="large"
        />
        <h4>Medium</h4>
        <PitayaDateTimePicker
          label="DateTime Picker"
          placeholderText="Please select a date"
          selectedDate={date}
          onChange={onChange}
          datePickerSize="medium"
        />
        <h4>Small</h4>
        <PitayaDateTimePicker
          label="DateTime Picker"
          placeholderText="Please select a date"
          selectedDate={date}
          onChange={onChange}
          datePickerSize="small"
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 只選擇日期 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaDateTimePicker
    label="DateTime Picker"
    placeholderText="Please select a date"
    selectedDate={date}
    showTimeSelect={false}
    onChange={setDate}
  />
);
  \`\`\``;

  const [date, setDate] = useState<Nullable<Moment>>();

  const onChange = (m: Nullable<Moment>) => {
    setDate(m);
    decorate([args => [args[0]]]).action('change date')(m);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>只選擇日期</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaDateTimePicker
          label="DateTime Picker"
          placeholderText="Please select a date"
          selectedDate={date}
          showTimeSelect={false}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 關閉選擇器 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaDateTimePicker
    label="DateTime Picker"
    placeholderText="Please select a date"
    selectedDate={date}
    disabled={true}
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>關閉選擇器</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaDateTimePicker
          label="DateTime Picker"
          placeholderText="Please select a date"
          selectedDate={moment()}
          disabled={true}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 可開關的日期選擇器 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaDisableableDatePicker
    label="DateTime Picker"
    placeholderText="Please select a date"
    selectedDate={date}
    disabled={true}
    onChange={onChange}
    onDisabled={onDisabled}
  />
);
  \`\`\``;

  const [date, setDate] = useState<Nullable<Moment>>();
  const [disabled, setDisabled] = useState(false);

  const onChange = (m: Nullable<Moment>) => {
    setDate(m);
    decorate([args => [args[0]]]).action('change date')(m);
  };

  const onDisabled = (b: boolean) => {
    setDisabled(b);
    decorate([args => [args[0]]]).action('toggle disable')(b);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>關閉選擇器</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaDisableableDatePicker
          label="DateTime Picker"
          placeholderText="Please select a date"
          selectedDate={date}
          disabled={disabled}
          onChange={onChange}
          onDisabled={onDisabled}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 日期範圍_分開選擇 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaDateTimePicker
    placeholderText="Please select a date"
    selectedDate={startDate}
    startDate={startDate}
    endDate={endDate}
    maxDate={endDate}
    showTimeSelect={false}
    selectsStart={true}
    onChange={onStartDateChange}
  />
  <PitayaDateTimePicker
    placeholderText="Please select a date"
    selectedDate={endDate}
    startDate={startDate}
    endDate={endDate}
    minDate={startDate}
    showTimeSelect={false}
    selectsEnd={true}
    onChange={onEndDateChange}
  />
);
  \`\`\``;

  const [startDate, setStartDate] = useState<Nullable<Moment>>();

  const onStartDateChange = (m: Nullable<Moment>) => {
    setStartDate(m);
    decorate([args => [args[0]]]).action('change date')(m);
  };

  const [endDate, setEndDate] = useState<Nullable<Moment>>();

  const onEndDateChange = (m: Nullable<Moment>) => {
    setEndDate(m);
    decorate([args => [args[0]]]).action('change date')(m);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>關閉選擇器</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <label>Date Range Picker</label>
        <PitayaFlex>
          <PitayaDateTimePicker
            placeholderText="Please select a date"
            selectedDate={startDate}
            startDate={startDate}
            endDate={endDate}
            maxDate={endDate}
            showTimeSelect={false}
            selectsStart={true}
            onChange={onStartDateChange}
          />
          <PitayaDateTimePicker
            placeholderText="Please select a date"
            selectedDate={endDate}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            showTimeSelect={false}
            selectsEnd={true}
            onChange={onEndDateChange}
          />
        </PitayaFlex>
      </PitayaRoundBox>
    </Layout>
  );
};

export const 日期區間_合併選擇 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaDateRangePicker
    startDate={startDate}
    endDate={endDate}
    onDatesChange={onChange}
  />
);
  \`\`\``;

  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);

  const onChange = (r: DateRange) => {
    const { startDate: s, endDate: e } = r;
    setStartDate(s);
    setEndDate(e);
    decorate([args => [args[0].startDate, args[0].endDate]]).action(
      'change date range',
    )(r);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>關閉選擇器</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
          <h2>日期選擇器</h2>
          <PitayaDateRangePicker
            startDate={startDate}
            endDate={endDate}
            onDatesChange={onChange}
          />
        </PitayaFlex>
      </PitayaRoundBox>
    </Layout>
  );
};
