import React from 'react';

import PitayaGroup from '@src/components/pitayas/PitayaGroup.tsx';
import PitayaCheckOptions from '@src/components/pitayas/PitayaCheckOptions';

export default class CheckOptionsStorybook extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      options: [
        {
          label: '全選',
          value: 'all',
        },
        {
          label: '取消全選',
          value: 'dismiss',
        },
      ],
    };
  }

  render() {
    const { checked, options } = this.state;
    return (
      <div className="container pt-5">
        <div className="col-12">
          <h1> Pitaya Checkbox </h1>
          <div className="row m-0">
            <PitayaGroup>
              <PitayaCheckOptions
                checked={checked}
                label="已選擇"
                options={options}
                onSelect={value => {
                  this.setState({ checked: value.value === 'all' });
                }}
                onCheck={() => {
                  this.setState({ checked: !checked });
                }}
              />
            </PitayaGroup>
          </div>
        </div>
      </div>
    );
  }
}
