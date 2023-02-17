import React, { useState } from 'react';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { PitayaBulletLabel } from '@src/components/pitayas/PitayaBulletLabel';
import PitayaSwitch from '@src/components/pitayas/PitayaSwitch';
import PitayaFlex, { FlexAlignItems } from '@src/components/pitayas/PitayaFlex';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Pitaya / BulletLabel',
  decorators: [withKnobs],
};

export const 預設 = () => {
  const [stateOne, setStateOne] = useState(false);

  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <h1>預設Label</h1>
        <br />
        <PitayaFlex flexAlignItems={FlexAlignItems.CENTER}>
          <PitayaBulletLabel actived={stateOne} label="啟用狀態" />
          <PitayaSwitch
            checked={stateOne}
            onChange={() => setStateOne(!stateOne)}
          />
        </PitayaFlex>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const 自訂顏色與文字 = () => {
  const [active, setActive] = useState(false);

  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <h1>自訂顏色與文字</h1>
        <br />
        <PitayaFlex>
          <PitayaBulletLabel
            actived={active}
            label={text('預設標籤文字', '未同步')}
            activeLabel={text('啟用標籤文字', '已同步')}
            defaultColor={text('預設標籤顏色', '#aa0000')}
            activeColor={text('啟用標籤顏色', '#00aa00')}
          />
          <PitayaSwitch checked={active} onChange={() => setActive(!active)} />
        </PitayaFlex>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};
