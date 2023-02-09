import React from 'react';
import PitayaActionSelector from '@src/components/pitayas/PitayaActionSelector';
import { CheckStatus } from '@src/components/pitayas/types/CheckStatus';
import { OptionType } from '@src/types/BaseTypes';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaFlex from '@src/components/pitayas/PitayaFlex';

const options: OptionType[] = [
  {
    value: '選取全部',
    label: '選取全部',
  },
  {
    label: '取消全部',
    value: '取消全部',
  },
];

const onToggleSelectedPageItems = () => {
  // tslint:disable-next-line:no-console
  console.log('toggle select all');
};

const onSelectSelectAll = (optionType: OptionType) => {
  // tslint:disable-next-line:no-console
  console.log(optionType);
};

const PitayaActionSelectorStorybook = () => {
  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaFlex>
        <PitayaGroup>
          <h3>全選</h3>
          <PitayaActionSelector
            selectedNumber={10}
            selectOptions={options}
            onToggleSelectedPageItems={onToggleSelectedPageItems}
            onSelectSelectAll={onSelectSelectAll}
            checkStatus={CheckStatus.CHECKED}
          />
        </PitayaGroup>
        <PitayaGroup>
          <h3>選幾個</h3>
          <PitayaActionSelector
            selectedNumber={3}
            selectOptions={options}
            onToggleSelectedPageItems={onToggleSelectedPageItems}
            onSelectSelectAll={onSelectSelectAll}
            checkStatus={CheckStatus.HALF_CHECKED}
          />
        </PitayaGroup>
        <PitayaGroup>
          <h3>沒有選取</h3>
          <PitayaActionSelector
            selectedNumber={0}
            selectOptions={options}
            onToggleSelectedPageItems={onToggleSelectedPageItems}
            onSelectSelectAll={onSelectSelectAll}
            checkStatus={CheckStatus.NONE}
          />
        </PitayaGroup>
      </PitayaFlex>
    </PitayaLayout>
  );
};

export default PitayaActionSelectorStorybook;
