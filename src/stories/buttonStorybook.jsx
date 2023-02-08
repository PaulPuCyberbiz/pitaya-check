import React from 'react';

import PitayaGroup from '@src/components/pitayas/PitayaGroup.tsx';
import PitayaFlex from '@src/components/pitayas/PitayaFlex.tsx';
import PitayaButton from '@src/components/pitayas/PitayaButton.tsx';

export default class ButtonStorybook extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-4">Pitaya Button</h1>
        <PitayaButton value="按鈕項目" />
        <hr />
        <h1 className="my-4">Exmaple</h1>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>尺寸 (buttonSize: string)</h3>
            <p>共三種尺寸large, medium, small (尺寸預設為large)</p>
            <br />
            <h3>樣式 (buttonState: string)</h3>
            <p>
              共三種樣式primary, secondary, secondary-icon (尺寸預設為primary)
            </p>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaGroup>
              <PitayaFlex>
                <PitayaButton value="按鈕項目" />
                <PitayaButton buttonSize="medium" value="按鈕項目" />
                <PitayaButton buttonSize="small" value="按鈕項目" />
              </PitayaFlex>
            </PitayaGroup>
            <PitayaGroup>
              <PitayaFlex>
                <PitayaButton buttonState="secondary" value="按鈕項目" />
                <PitayaButton
                  buttonState="secondary"
                  buttonSize="medium"
                  value="按鈕項目"
                />
                <PitayaButton
                  buttonState="secondary"
                  buttonSize="small"
                  value="按鈕項目"
                />
              </PitayaFlex>
            </PitayaGroup>
            <PitayaGroup>
              <PitayaFlex>
                <PitayaButton buttonState="secondary-icon" value="按鈕項目" />
                <PitayaButton
                  buttonState="secondary-icon"
                  buttonSize="medium"
                  value="按鈕項目"
                />
                <PitayaButton
                  buttonState="secondary-icon"
                  buttonSize="small"
                  value="按鈕項目"
                />
              </PitayaFlex>
            </PitayaGroup>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>停用案件 (disabled): boolean)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaFlex flexDirection="flex-col">
              <PitayaButton value="按鈕項目" disabled={true} />
              <PitayaButton
                buttonState="secondary"
                value="按鈕項目"
                disabled={true}
              />
              <PitayaButton
                buttonState="secondary-icon"
                value="按鈕項目"
                disabled={true}
              />
            </PitayaFlex>
          </div>
        </div>
      </div>
    );
  }
}
