import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import PitayaPreviewModal, {
  PreviewType,
} from '@src/components/pitayas/PitayaPreviewModal';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@src/components/CodeBlock';

export default {
  title: 'Pitaya / PreviewModal',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
const [show, setShow] = useState(false);
<PitayaButton buttonState="secondary" onClick={() => setShow(true)} value="預覽" />
<PitayaPreviewModal
  show={show}
  setShow={setShow}
  acceptTypes={[PreviewType.desktop, PreviewType.mobile]}
>
  <iframe src="https://getbootstrap.com/" width="100%" height="100%" />
</PitayaPreviewModal>
\`\`\``;

  const [show, setShow] = useState(false);

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaButton
        buttonState="secondary"
        onClick={() => setShow(true)}
        value="預覽"
      />
      <PitayaPreviewModal
        show={show}
        setShow={setShow}
        acceptTypes={[
          PreviewType.desktop,
          PreviewType.tablet,
          PreviewType.mobile,
        ]}
      >
        <iframe src="https://getbootstrap.com/" width="100%" height="95%" />
      </PitayaPreviewModal>
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
