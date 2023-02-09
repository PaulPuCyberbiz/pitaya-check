import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { withKnobs, text } from '@storybook/addon-knobs';
import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaCollapse from '@src/components/pitayas/PitayaCollapse';
import { Layout } from '@stories/Layout';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import PitayaExpansionPanel from '@src/components/pitayas/PitayaExpansionPanel';
import { decorate } from '@storybook/addon-actions';

export default {
  title: 'Pitaya / Collapse',
  decorators: [withKnobs],
};

export const 預設 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaCollapse
    isOpen={true}
  >
    ...
  </PitayaCollapse>
);
  \`\`\``;

  const [toggled, setToggle] = useState(false);
  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>預設</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaButton onClick={() => setToggle(!toggled)}>Toggle</PitayaButton>
        <PitayaCollapse isOpen={toggled}>
          <PitayaRoundBox style={{ background: '#eeeeee', marginTop: '20px' }}>
            <h1>一站式新零售解決方案</h1>
            <h1>第一步做對 開店更方便</h1>
            <p>數位轉型品牌官網+智能POS+智慧倉儲</p>
          </PitayaRoundBox>
        </PitayaCollapse>
      </PitayaRoundBox>
    </Layout>
  );
};

export const 展開區塊 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaExpansionPanel
    title="商店風格自由定"
  >
    ...
  </PitayaCollapse>
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>展開區塊</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaExpansionPanel title={text('標題', '商店風格自由定')}>
          <p>
            採用RWD響應式網頁設計，電腦、平板、手機一次對應，並提供多個版型，點選即可套用，
            各類型的商店都能找到適合的版型，輕鬆擁有專業的網站外觀！不喜歡既有版型嗎？
            沒關係，我們是全台唯一開放CSS和HTML編輯的開店平台，您可以自己修改網站外觀，也歡迎來電討論客製化設計方案。
          </p>
        </PitayaExpansionPanel>
      </PitayaGroup>
    </Layout>
  );
};

export const 自訂展開Callback = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaExpansionPanel
    title="商店風格自由定"
    toggled={toggled}
    onToggle={() => { ... }}
  >
    ...
  </PitayaCollapse>
);
  \`\`\``;

  const [toggled, setToggled] = useState(false);

  const onToggle = () => {
    setToggled(!toggled);
    decorate([]).action('toggle panel')(!toggled);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>自訂展開 callback</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-6 col-md-12">
        <PitayaExpansionPanel
          title={text('標題', '商店風格自由定')}
          toggled={toggled}
          onToggle={onToggle}
        >
          <p>
            採用RWD響應式網頁設計，電腦、平板、手機一次對應，並提供多個版型，點選即可套用，
            各類型的商店都能找到適合的版型，輕鬆擁有專業的網站外觀！不喜歡既有版型嗎？
            沒關係，我們是全台唯一開放CSS和HTML編輯的開店平台，您可以自己修改網站外觀，也歡迎來電討論客製化設計方案。
          </p>
        </PitayaExpansionPanel>
      </PitayaGroup>
    </Layout>
  );
};
