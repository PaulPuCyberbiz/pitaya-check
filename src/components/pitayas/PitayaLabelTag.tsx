import { v4 as uuid } from 'uuid';
import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import PitayaTooltip from '@src/components/pitayas/PitayaTooltip';
interface PitayaLabelTagProps extends HTMLProps<HTMLDivElement> {
  sources?: DataObjectType[];
  delimiter?: string;
  limitLength?: number;
}

interface DataObjectType {
  id?: number;
  name?: string;
}

export const LabelTag = styled.div`
  font-size: 12px;
  color: #8e99ad;
  background: #f2f6fc;
  padding: 2px 5px;
  margin: 0px 2px 4px 2px;
  display: inline-block;
`;

export const ToolTip = styled.div`
  display: inline-block;
  .place-bottom {
    width: 240px;
    padding: 8px;
  }
  > div:before {
    width: 240px;
  }
`;

const PitayaLabelTag = ({
  sources = [],
  delimiter = '、',
  limitLength = 5,
}: PitayaLabelTagProps): JSX.Element => {
  let toolTipStr = '';
  const toolTipId = uuid();
  if (sources.length > limitLength) {
    const strArr = sources.map(obj => obj.name);
    toolTipStr = String(strArr).split(',').join(delimiter);
  }
  return (
    <>
      <div>
        {sources.map(
          (obj, index) =>
            index < limitLength && (
              <LabelTag key={uuid()}>{`${obj.name}`}</LabelTag>
            ),
        )}
      </div>
      {sources.length > limitLength && (
        <ToolTip>
          <LabelTag data-for={toolTipId} data-tip={toolTipStr}>
            ...
          </LabelTag>
          <PitayaTooltip type={'dark'} id={toolTipId} place={'bottom'} />
        </ToolTip>
      )}
    </>
  );
};

export default PitayaLabelTag;
