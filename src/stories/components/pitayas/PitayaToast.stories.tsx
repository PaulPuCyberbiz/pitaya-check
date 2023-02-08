import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { ToastType, ToastMessage } from '@src/data/ToastMessage';
import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaToast from '@src/components/pitayas/PitayaToast';
import { Layout } from '@stories/Layout';
import PitayaButton from '@src/components/pitayas/PitayaButton';

export default {
  title: 'Pitaya / Toast',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaToast
    toastMessage={{
      type: ToastType;
      message: '更新成功';
      error?: object;
    }}
  />
);
  \`\`\``;

  const options = {
    ['成功']: ToastType.SUCCESS,
    ['警告']: ToastType.WARNING,
    ['錯誤']: ToastType.ERROR,
  };

  const type = select<ToastType>('通知類型', options, ToastType.SUCCESS);

  const message = text('成功訊息', '更新成功');

  const [toastMessage, setToastMessage] = useState<ToastMessage>();

  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>General</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
        <PitayaButton
          buttonState="secondary"
          onClick={() => setToastMessage({ type, message })}
        >
          Show toast
        </PitayaButton>
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaToast toastMessage={toastMessage} />
      </PitayaGroup>
    </Layout>
  );
};

export const NodeMessage = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaToast
    toastMessage={{
      type: ToastType;
      message: (
        <ul>
          <li>項目1</li>
          <li>項目2</li>
        </ul>
      );
      error?: object;
    }}
  />
);
  \`\`\``;

  const options = {
    ['成功']: ToastType.SUCCESS,
    ['警告']: ToastType.WARNING,
    ['錯誤']: ToastType.ERROR,
  };

  const type = select<ToastType>('通知類型', options, ToastType.SUCCESS);

  const message = (
    <ul>
      <li>項目1</li>
      <li>項目2</li>
    </ul>
  );

  const [toastMessage, setToastMessage] = useState<ToastMessage>();

  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>General</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
        <PitayaButton
          buttonState="secondary"
          onClick={() => setToastMessage({ type, message })}
        >
          Show toast
        </PitayaButton>
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaToast toastMessage={toastMessage} />
      </PitayaGroup>
    </Layout>
  );
};
