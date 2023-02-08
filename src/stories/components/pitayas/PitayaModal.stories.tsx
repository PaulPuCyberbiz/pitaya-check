import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs } from '@storybook/addon-knobs';

import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Layout } from '@stories/Layout';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import PitayaModal from '@src/components/pitayas/PitayaModal';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';

export default {
  title: 'Pitaya / Modal',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaModal
    show={show}
    onClose={() => onClose()}
  >
  </PitayaModal>
);
  \`\`\``;

  const [show, setShow] = useState(false);

  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>General</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
        <PitayaButton buttonState="secondary" onClick={() => setShow(true)}>
          Show Modal
        </PitayaButton>
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaModal show={show} onClose={() => setShow(false)}>
          <PitayaLayout>彈出視窗</PitayaLayout>
        </PitayaModal>
      </PitayaGroup>
    </Layout>
  );
};
