import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@src/components/CodeBlock';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaNavigationBar from '@src/components/pitayas/PitayaNavigationBar';
import { OptionType } from '@src/types/BaseTypes';

export default {
  title: 'Pitaya / NavigationBar',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
  const navOptions: OptionType[] = [
    { label: '使用狀況分析', value: '1' },
    { label: '使用率分析', value: '2' },
    { label: '營收分析', value: '3' },
    { label: 'AOV分析', value: '4' },
  ];

  <PitayaNavigationBar
    options={navOptions}
    selectedOption={navOptions[0]}
    onClick={(val) => console.log(val)}
  />
  \`\`\``;

  const navOptions: OptionType[] = [
    { label: '使用狀況分析', value: '1' },
    { label: '使用率分析', value: '2' },
    { label: '營收分析', value: '3' },
    { label: 'AOV分析', value: '4' },
  ];

  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <PitayaNavigationBar
          options={navOptions}
          selectedOption={navOptions[0]}
          onClick={val =>
            decorate([args => [`${JSON.stringify(args[0])}`]]).action(
              'change nav',
            )(val)
          }
        />
      </PitayaRoundBox>
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
