import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaRadioInput from '@src/components/pitayas/PitayaRadioInput';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaFlex, { FlexDirection } from '@src/components/pitayas/PitayaFlex';
import PitayaRadios from '@src/components/pitayas/PitayaRadios';

export default {
  title: 'Pitaya / RadioInput',
  decorators: [withKnobs],
};

export const General = () => {
  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaRoundBox>
        <PitayaFlex>
          <PitayaRadioInput name="test" id="test-01" />
          <label htmlFor="test-01">測試 01</label>
          <PitayaRadioInput name="test" id="test-02" />
          <label htmlFor="test-02">測試 02</label>
          <PitayaRadioInput name="test" id="test-03" />
          <label htmlFor="test-03">測試 03</label>
          <PitayaRadioInput name="test" id="test-04" disabled={true} />
          <label htmlFor="test-04">停用測試 04</label>
        </PitayaFlex>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const Radios = () => {
  const [selected, setSelected] = useState('value1');
  const radios = [
    { value: 'value1', label: '選項1' },
    { value: 'value2', label: '選項2' },
  ];
  return (
    <PitayaLayout>
      <h3>Pitaya Radios</h3>
      <p>將RadioInput組成一包，可一次塞入所有文字選項</p>
      <PitayaRoundBox>
        <PitayaRadios
          checkboxes={radios}
          flexDirection={FlexDirection.ROW}
          selected={selected}
          onChange={value => setSelected(value)}
          name={'radioGroup'}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};
