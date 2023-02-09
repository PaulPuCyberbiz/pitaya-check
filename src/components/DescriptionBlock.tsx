import React from 'react';
import styled from 'styled-components';
import PitayaRoundBox, {
  PitayaRoundBoxProps,
} from '@src/components/pitayas/PitayaRoundBox';

const DescriptionBlockContainer = styled(PitayaRoundBox)``;

const DescriptionBlock = (props: PitayaRoundBoxProps) => (
  <DescriptionBlockContainer {...props} />
);

DescriptionBlock.Title = styled.h2`
  && {
    font-size: 15px;
    font-weight: bold;
    line-height: 1;
    color: #3c5587;
    margin-bottom: 10px;
  }
`;

DescriptionBlock.Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: normal;
  color: #8e99ad;
`;

export default DescriptionBlock;
