import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs, number } from '@storybook/addon-knobs';

import CodeBlock from '@src/components/CodeBlock';
import PitayaProgressBar from '@src/components/pitayas/PitayaProgressBar';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Layout } from '@stories/Layout';

export default {
  title: 'Pitaya / ProgressBar',
  decorators: [withKnobs],
};

const ratioOpt = {
  step: 0.05,
  max: 1,
  min: 0,
};

export const General = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaProgressBar ratio={${number('ratio', 0.5, ratioOpt)}} />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Default color</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaProgressBar ratio={number('ratio', 0.5, ratioOpt)} />
      </PitayaGroup>
    </Layout>
  );
};

export const Warning = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaProgressBar ratio={${number(
    'ratio',
    0.5,
    ratioOpt,
  )}} warningRatio={0.5} />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Warning color (set threshold)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaProgressBar
          ratio={number('ratio', 0.5, ratioOpt)}
          warningRatio={0.5}
        />
      </PitayaGroup>
    </Layout>
  );
};

export const Danger = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaProgressBar ratio={${number(
    'ratio',
    0.5,
    ratioOpt,
  )}} warningRatio={0.75} />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Danger color (set threshold)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaProgressBar
          ratio={number('ratio', 0.5, ratioOpt)}
          dangerRatio={0.75}
        />
      </PitayaGroup>
    </Layout>
  );
};

export const Combined = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaProgressBar
    ratio={${number('ratio', 0.5, ratioOpt)}}
    warningRatio={0.5}
    dangerRatio={0.75}
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Danger and Warning threshold combined</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaProgressBar
          ratio={number('ratio', 0.5, ratioOpt)}
          warningRatio={0.5}
          dangerRatio={0.75}
        />
      </PitayaGroup>
    </Layout>
  );
};

export const Reversed = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaProgressBar
    ratio={${number('ratio', 0.5, ratioOpt)}}
    warningRatio={0.5}
    dangerRatio={0.25}
    reverse={true}
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Reverse the threshold (lower is danger)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaProgressBar
          ratio={number('ratio', 0.5, {
            step: 0.05,
            max: 1,
            min: 0,
          })}
          warningRatio={0.5}
          dangerRatio={0.25}
          reverse={true}
        />
      </PitayaGroup>
    </Layout>
  );
};

export const WithText = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaProgressBar
    ratio={${number('ratio', 0.5, ratioOpt)}}
    warningRatio={0.5}
    dangerRatio={0.25}
    reverse={true}
    hoverText="Ratio is ${number('ratio', 0.5, ratioOpt)}"
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5  col-md-12">
        <h3>Show text on hover</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaProgressBar
          ratio={number('ratio', 0.5, ratioOpt)}
          warningRatio={0.5}
          dangerRatio={0.25}
          reverse={true}
          hoverText={`Ratio is ${number('ratio', 0.5, ratioOpt)}`}
        />
      </PitayaGroup>
    </Layout>
  );
};
