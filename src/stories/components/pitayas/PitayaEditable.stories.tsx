import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ReactMarkdown from 'react-markdown';

import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaEditable from '@src/components/pitayas/PitayaEditable';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { Layout } from '@stories/Layout';

export default {
  title: 'Pitaya / Editable',
  decorators: [withKnobs],
};

export const Input = () => {
  const code1 = `\`\`\`ts
// types
interface PitayaEditableProps extends PitayaInputProps {
  onEditStart?: () => void;
  onEditComplete?: (value: string | number | undefined) => void;
}
  \`\`\``;

  const code2 = `\`\`\`jsx
const Comp = () => (
  <PitayaEditable
    inputSize="medium"
    value={value}
    onChange={(e) => { setValue(e.currentTarget.value); }}
  />
);
  \`\`\``;

  const [value, setValue] = useState('預設內容');

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>Input</h3>
        <ReactMarkdown source={code1} renderers={{ code: CodeBlock }} />
        <ReactMarkdown source={code2} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaEditable
          inputSize="medium"
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
        />
      </PitayaRoundBox>
    </Layout>
  );
};
