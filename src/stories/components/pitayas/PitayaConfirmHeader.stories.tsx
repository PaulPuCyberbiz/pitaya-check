import React from 'react';
import styled from 'styled-components';
import { text, withKnobs } from '@storybook/addon-knobs';

import PitayaConfirmHeader from '@src/components/pitayas/PitayaConfirmHeader';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { PitayaBulletLabel } from '@src/components/pitayas/PitayaBulletLabel';

export default {
  title: 'Pitaya / ConfirmHeader',
  decorators: [withKnobs],
};

const StyledLayout = styled(PitayaLayout)`
  height: 100vh;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 600;
`;

const SideMenu = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #aaa;
`;
const Content = styled(Box)`
  position: absolute;
  left: 250px;
  top: 60px;
  width: calc(100% - 250px);
  height: 100%;
  background-color: #eee;
`;

export const 預設樣式 = () => {
  return (
    <StyledLayout>
      <SideMenu>SideMenu</SideMenu>
      <PitayaConfirmHeader />
      <Content>Content</Content>
    </StyledLayout>
  );
};

export const 自訂按鈕文字 = () => {
  return (
    <StyledLayout>
      <SideMenu>SideMenu</SideMenu>
      <PitayaConfirmHeader
        confirmText={text('confirmText', '送出')}
        cancelText={text('cancelText', '重設')}
      />
      <Content>Content</Content>
    </StyledLayout>
  );
};

export const 自訂按鈕 = () => {
  return (
    <StyledLayout>
      <SideMenu>SideMenu</SideMenu>
      <PitayaConfirmHeader
        overrideButtons={(cancelButton, confirmButton) => (
          <>
            {confirmButton}
            &nbsp;/ 中間塞一些東西 /&nbsp;
            {cancelButton}
          </>
        )}
      />
      <Content>Content</Content>
    </StyledLayout>
  );
};
