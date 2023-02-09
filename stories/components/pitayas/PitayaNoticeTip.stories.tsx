import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaFlex, { FlexJustify } from '@src/components/pitayas/PitayaFlex';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import CodeBlock from '@src/components/CodeBlock';

import { Layout } from '@stories/Layout';
import PitayaNoticeTip from '@src/components/pitayas/PitayaNoticeTip';
import ReactMarkdown from 'react-markdown';

export default {
  title: 'Pitaya / Notice Tip',
  decorators: [withKnobs],
};

export const NoticeTip = () => {
  const code1 = `\`\`\`ts
// types
interface PitayaNoticeTipProps extends HTMLProps<HTMLDivElement> {
  type: Extract<IconType, 'warning'>;
  text: string;
  className?: string;
}
  \`\`\``;

  const code2 = `\`\`\`ts
const Comp = () => (
  <PitayaNoticeTip
    type="warning"
    text="重要的提示文字重要的提示文字重要的提示文字重要的提示文字"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3> Pitaya Notice Tip </h3>
        <ReactMarkdown source={code1} renderers={{ code: CodeBlock }} />
        <ReactMarkdown source={code2} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaFlex>
          <PitayaGroup>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaNoticeTip
                type="warning"
                text="重要的提示文字重要的提示文字重要的提示文字重要的提示文字"
              />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaNoticeTip
                type="warning"
                text="重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字重要的提示文字"
              />
            </PitayaFlex>
          </PitayaGroup>
        </PitayaFlex>
      </PitayaRoundBox>
    </Layout>
  );
};
