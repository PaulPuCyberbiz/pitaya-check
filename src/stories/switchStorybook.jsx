import React from 'react';

import PitayaGroup from '@src/components/pitayas/PitayaGroup.tsx';
import PitayaFlex from '@src/components/pitayas/PitayaFlex.tsx';
import PitayaSwitch from '@src/components/pitayas/PitayaSwitch.tsx';

export default class BtnStorybook extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-5 px-5">
        <h1> Pitaya Switch Buttons </h1>
        <div className="col-12 bg-light px-5 pt-4 mb-5">
          <PitayaFlex>
            <PitayaGroup className="mr-5" title="ON">
              <PitayaSwitch
                id="temp"
                checked={true}
                onChange={() => {}}
                text="test"
              />
            </PitayaGroup>
            <PitayaGroup className="mr-5" title="OFF">
              <PitayaSwitch
                id="temp2"
                checked={false}
                onChange={() => {}}
                text="test2"
              />
            </PitayaGroup>
          </PitayaFlex>
        </div>
      </div>
    );
  }
}
