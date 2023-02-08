import React from 'react';

import PitayaTabs from '@src/components/pitayas/PitayaTabs.tsx';

export default class BtnStorybook extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-5 px-5">
        <h1> Pitaya Switch Buttons </h1>
        <div className="col-12 bg-light px-5 pt-4 pb-5 mb-5">
          <PitayaTabs
            title="Test"
            links={[
              {
                name: 'tab很長長長長長',
                link: '/',
              },
              {
                name: 'Tab2',
                link: '/tab2',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
