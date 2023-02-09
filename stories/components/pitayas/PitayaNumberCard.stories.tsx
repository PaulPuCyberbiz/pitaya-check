import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs } from '@storybook/addon-knobs';

import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Layout } from '@stories/Layout';
import PitayaNumberCard from '@src/components/pitayas/PitayaNumberCard';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';

export default {
  title: 'Pitaya / Number Card',
  decorators: [withKnobs],
};

export const 金額 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaNumberCard
    title="總營收金額"
    tooltipText="我是\n總營收金額"
    className="item-card"
    numberOfCard='2345678'
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>Number Card</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-5 col-md-12">
        <PitayaRoundBox>
          <h1>金額</h1>
          <PitayaNumberCard
            title="總營收金額"
            tooltipText="我是\n總營收金額"
            className="item-card"
            numberOfCard="2345678"
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

export const 百分比 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaNumberCard
    title="平均百分比"
    tooltipText="我是平均百分比"
    className="item-card"
    numberOfCard="45"
    type={NumberType.PERCENTAGE}
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>Number Card</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-5 col-md-12">
        <PitayaRoundBox>
          <h1>百分比</h1>
          <PitayaNumberCard
            title="平均百分比"
            tooltipText="我是平均百分比"
            className="item-card"
            numberOfCard="45"
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

export const 一般 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaNumberCard
    title="使用數量"
    tooltipText="我是使用數量"
    className="item-card"
    numberOfCard="24567"
    type={NumberType.NORMAL}
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>Number Card</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-5 col-md-12">
        <PitayaRoundBox>
          <h1>一般</h1>
          <PitayaNumberCard
            title="使用數量"
            tooltipText="我是使用數量"
            className="item-card"
            numberOfCard="24567"
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};
