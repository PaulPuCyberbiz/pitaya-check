import React from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaTooltip from '@src/components/pitayas/PitayaTooltip';
import styled from 'styled-components';

const Text = styled.a`
  text-align: center;
  width: 55px;
  height: 55px;
  line-height: 55px;
  border-radius: 55px;
  display: block;
  margin: auto;
  cursor: pointer;
  color: #999;
  border: 1px solid #999;
  font-size: 13px;
`;

const PitayaTooltipStory = () => {
  return (
    <div className="pt-5 px-5">
      <h1> Pitaya Tooltip </h1>
      <div className="col-12 bg-light px-5 pb-5 pt-4 mb-5">
        <PitayaGroup>
          <Text data-tip={true} data-for="happyFace">
            {' '}
            d(`･∀･)b{' '}
          </Text>
          <PitayaTooltip id="happyFace" type="error">
            <span>Show happy face</span>
          </PitayaTooltip>

          <Text data-tip={true} data-for="sadFace">
            {' '}
            இдஇ{' '}
          </Text>
          <PitayaTooltip id="sadFace" type="warning" effect="solid">
            <span>Show sad face</span>
          </PitayaTooltip>

          <Text data-tip={true} data-for="global">
            {' '}
            σ`∀´)σ{' '}
          </Text>
          <Text data-tip={true} data-for="global">
            {' '}
            (〃∀〃){' '}
          </Text>
          <PitayaTooltip id="global" aria-haspopup="true" role="example">
            <p>This is a global react component tooltip</p>
            <p>You can put every thing here</p>
            <ul>
              <li>Word</li>
              <li>Chart</li>
              <li>Else</li>
            </ul>
          </PitayaTooltip>
        </PitayaGroup>
      </div>
    </div>
  );
};

export default PitayaTooltipStory;
