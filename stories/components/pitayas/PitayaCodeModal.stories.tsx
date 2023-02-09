import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs } from '@storybook/addon-knobs';
import copy from 'copy-to-clipboard';

import CodeBlock from '@src/components/CodeBlock';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaCodeModal from '@src/components/pitayas/PitayaCodeModal';
import PitayaButton from '@src/components/pitayas/PitayaButton';

export default {
  title: 'Pitaya / CodeModal',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
import copy from 'copy-to-clipboard';

const [show, setShow] = useState(false);
const iframeCode = \`<frameset cols="100,*">
  <frame name="left" src="a.htm">
  <frame name="right" src="b.htm">
</frameset>\`;
const onCopy = (text: string) => {
  copy(text);
  alert('複製成功');
};

<PitayaButton buttonState="secondary" onClick={() => setShow(true)} value="iframe 語法" />
<PitayaCodeModal
  show={show}
  title="iframe 語法"
  code={iframeCode}
  onClose={() => setShow(false)}
  onCopy={onCopy}
/>
\`\`\``;
  const iframeCode = `<frameset cols="100,*">
  <frame name="left" src="a.htm">
  <frame name="right" src="b.htm">
</frameset>`;

  const [show, setShow] = useState(false);
  const onCopy = (text: string) => {
    copy(text);
    alert('複製成功');
  };
  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaButton
        buttonState="secondary"
        onClick={() => setShow(true)}
        value="iframe 語法"
      />
      <PitayaCodeModal
        show={show}
        title="iframe 語法"
        code={iframeCode}
        onClose={() => setShow(false)}
        onCopy={onCopy}
      />
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
