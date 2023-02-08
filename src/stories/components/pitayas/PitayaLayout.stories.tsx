import React from 'react';
import styled from 'styled-components';
import { text, withKnobs } from '@storybook/addon-knobs';
import PitayaLayoutComp from '@src/components/pitayas/PitayaLayout';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaInput from '@src/components/pitayas/PitayaInput';
import SplitLayoutComp from '@src/components/SplitLayout';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@src/components/CodeBlock';

export default {
  title: 'Pitaya / Layout',
  decorators: [withKnobs],
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
`;

const NavBar = styled(Box)`
  position: fixed;
  top: 0;
  min-height: 60px;
  width: 100%;
  background-color: #ffffff;
  color: #34425a;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const SideMenu = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  margin-top: 60px;
  height: 100%;
  background-color: #34425a;
  color: #889cbf;
`;
const Content = styled(Box)`
  margin-top: 60px;
  padding-left: 250px;
  height: 100%;
  background-color: #eee;
`;

const StyledMarkdown = styled(ReactMarkdown)`
  transform: scale(0.5);
`;

export const PitayaLayout = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaLayout>
    {children}
  </PitayaLayout>
);
  \`\`\``;
  return (
    <>
      <NavBar>導覽列</NavBar>
      <SideMenu>選單</SideMenu>
      <Content>
        <PitayaLayoutComp style={{ width: '100%', height: '100%' }}>
          {`PitayaLayout: 可以自動套用一些後台style guide的樣式`}
          <StyledMarkdown source={code} renderers={{ code: CodeBlock }} />
          <p>{`加入 background-color: #f2f6fc`}</p>
          <p>{`加入 padding: 25px 50px;`}</p>
          <h1>{'<h1> 頁面標題'}</h1>
          <PitayaRoundBox>
            <h2>{'<h2> 區塊標題'}</h2>
            <br />
            <p>
              {
                '<p> 一些描述描述描述描述描述描述描述一些描述描述描述描述描述描述描述'
              }
            </p>
            <br />
            <label>label: 當欄位沒有提供文字時可以用</label>
            <PitayaInput placeholder={'請輸入文字'} />
            <p>
              <a href="https://www.cyberbiz.io/">{'<a> 連結文字文字'}</a>
            </p>
          </PitayaRoundBox>
        </PitayaLayoutComp>
      </Content>
    </>
  );
};

export const SplitLayout = () => {
  const code = `\`\`\`jsx
<SplitLayout>
  <SplitLayout.Left>
    <PitayaRoundBox />
    <PitayaRoundBox />
    <PitayaRoundBox />
  </SplitLayout.Left>
  <SplitLayout.Right sticky={true}>
    <PitayaRoundBox />
  </SplitLayout.Right>
</SplitLayout>
  \`\`\``;
  return (
    <>
      <NavBar>導覽列</NavBar>
      <SideMenu>選單</SideMenu>
      <Content>
        <PitayaLayoutComp style={{ width: '100%' }}>
          {`SplitLayout: 切成左右兩個區塊`}
          <StyledMarkdown source={code} renderers={{ code: CodeBlock }} />
          <p>1. 兩邊等比例縮放</p>
          <p>2. 右邊最寬350px</p>
          <p>{'3. SplitLayout.Right 可以設定sticky={true}'}</p>
          <SplitLayoutComp>
            <SplitLayoutComp.Left>
              <PitayaRoundBox>
                <br />
                <br />
                <br />
                <br />
                <br />
              </PitayaRoundBox>
              <PitayaRoundBox>
                <br />
                <br />
                <br />
                <br />
                <br />
              </PitayaRoundBox>
              <PitayaRoundBox>
                <br />
                <br />
                <br />
                <br />
                <br />
              </PitayaRoundBox>
            </SplitLayoutComp.Left>
            <SplitLayoutComp.Right sticky={true}>
              <PitayaRoundBox>
                <p style={{ width: '100%', height: '300px' }}></p>
              </PitayaRoundBox>
            </SplitLayoutComp.Right>
          </SplitLayoutComp>
        </PitayaLayoutComp>
      </Content>
    </>
  );
};
