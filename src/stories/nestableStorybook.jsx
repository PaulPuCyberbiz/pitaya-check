import React from 'react';

import PitayaNestable from '@src/components/pitayas/PitayaNestable.tsx';

var nestData = [
  {
    id: 1,
    title: 'one',
    expanded: true,
    children: [
      {
        id: 2,
        title: 'two',
        children: [
          {
            id: 3,
            title: 'three',
          },
        ],
      },
      {
        id: 4,
        title: 'four',
        expanded: true,
        children: [
          {
            id: 5,
            title: 'five',
          },
          {
            id: 6,
            title: 'six',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'seven',
    children: [
      {
        id: 8,
        title: 'eight',
      },
    ],
  },
];
export default class NestableStorybook extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state) {
      return { nestData };
    }
    return null;
  }

  onChange(nestData) {
    this.setState({ nestData });
  }

  render() {
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-4">Pitaya Nestable</h1>
        <PitayaNestable
          nestData={this.state.nestData}
          onChange={value => {
            this.onChange(value);
          }}
          onMove={value => {
            console.log(value);
          }}
          endOfNode={['新增項目']}
          onClick={value => console.log(value)}
        />
      </div>
    );
  }
}
