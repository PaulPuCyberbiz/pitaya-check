import React, { useState } from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ReactMarkdown from 'react-markdown';

import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaInputNumber from '@src/components/pitayas/PitayaInputNumber';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { Layout } from '@stories/Layout';

export default {
  title: 'Pitaya / Number Input',
  decorators: [withKnobs],
};

export const 數字輸入 = () => {
  const code = `
\`\`\`ts
// Column type
interface PitayaInputNumberProps extends PitayaInputProps {
  value: number | undefined;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  minText?: string; // 低於最小值的警告文字
  maxText?: string; // 超過最大值的警告文字
  reducer?: (text: string) => [number, string]; // 文字轉換為數字的函式，預設轉換為正整數，可自訂
  onValidate?: (invalid: boolean) => void; // 驗證輸入時觸發
  ...rest: PitayaInputProps
}
\`\`\``;

  const [value, setValue] = useState(undefined as number | undefined);

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>數字輸入</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInputNumber
          value={value}
          setValue={setValue}
          min={number('最小值', 1)}
          max={number('最大值', 100)}
          minText={text('最小值警告文字', '不可小於 1')}
          maxText={text('最值警告文字', '不可大於 100')}
        />
      </PitayaRoundBox>
    </Layout>
  );
};
