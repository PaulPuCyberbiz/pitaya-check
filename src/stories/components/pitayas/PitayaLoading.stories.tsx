import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';

import CodeBlock from '@src/components/CodeBlock';
import PitayaLoading from '@src/components/pitayas/PitayaLoading';
import PitayaQueueLoading from '@src/components/pitayas/PitayaQueueLoading';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Layout } from '@stories/Layout';

export default {
  title: 'Pitaya / Loading',
  decorators: [withKnobs],
};

const Div = styled.div`
  height: 300px;
  .pitaya-loading {
    position: absolute;
  }
`;

export const General = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaLoading
    show={true}
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>General</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <Div>
          <PitayaLoading show={true} />
        </Div>
      </PitayaGroup>
    </Layout>
  );
};

export const WithText = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaLoading
    show={true}
    msg="商品載入中請稍候..."
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>With Text</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <Div>
          <PitayaLoading
            show={true}
            msg={text('Loading訊息', '商品載入中請稍候...')}
          />
        </Div>
      </PitayaGroup>
    </Layout>
  );
};

export const PartialLoading = () => {
  const Div2 = styled.div`
    height: 300px;
    width: 500px;
    background-color: rgba(255, 255, 0, 0.5);
  `;
  const code = `\`\`\`jsx
  const Comp = () => (
    <PitayaQueueLoading isLoading={isLoading}>
      <Div2>your loading block</Div2>
    </PitayaQueueLoading>
  );
    \`\`\``;
  const isLoading = true; // set to false after some api success
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Partial Loading</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaQueueLoading isLoading={isLoading}>
        <Div2> your loading block </Div2>
      </PitayaQueueLoading>
    </Layout>
  );
};
