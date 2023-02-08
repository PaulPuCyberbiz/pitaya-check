import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PitayaGroup from '@src/components/pitayas/PitayaGroup.tsx';
import PitayaFlex, {
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex.tsx';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { PitayaIconBtn } from '@src/components/pitayas/PitayaIconBtn.tsx';
import { PitayaIconLabel } from '@src/components/pitayas/PitayaIconLabel';

import { Layout } from '@stories/Layout';
import styled from 'styled-components';

export default {
  title: 'Pitaya / Icon',
  decorators: [withKnobs],
};

const Name = styled.h5`
  margin-right: 30px;
`;

export const IconButton = () => {
  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3> Pitaya Icon Button </h3>
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaFlex>
          <PitayaGroup className="mr-5">
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Published</Name>
              <PitayaIconBtn type="published" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Unpublished</Name>
              <PitayaIconBtn type="unpublished" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Delete</Name>
              <PitayaIconBtn type="delete" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Edit</Name>
              <PitayaIconBtn type="edit" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Go To Page</Name>
              <PitayaIconBtn type="goToPage" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Add</Name>
              <PitayaIconBtn type="add" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <Name>Question Mark</Name>
              <PitayaIconBtn type="questionMark" />
            </PitayaFlex>
          </PitayaGroup>
        </PitayaFlex>
      </PitayaRoundBox>
    </Layout>
  );
};

export const IconLabel = () => {
  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3> Pitaya Icon Label </h3>
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaFlex>
          <PitayaGroup className="mr-5">
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="published" text="啟用功能" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="unpublished" text="關閉功能" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="delete" text="刪除" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="goToPage" text="前往頁面" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="copy" text="複製" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="preview" text="預覽" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="download" text="下載" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="import" text="匯入" />
            </PitayaFlex>
            <PitayaFlex flexJustify={FlexJustify.SPACE_BETWEEN}>
              <PitayaIconLabel type="snippets" text="片段" />
            </PitayaFlex>
          </PitayaGroup>
        </PitayaFlex>
      </PitayaRoundBox>
    </Layout>
  );
};
