import React from 'react';
import PitayaBreadcrumb from '@src/components/pitayas/PitayaBreadcrumb.tsx';

export default class breadcrumbStorybook extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-4"> Pitaya Breadcrumb </h1>
        <PitayaBreadcrumb
          items={[{ label: 'test', link: '/test' }, { label: 'test' }]}
        />
      </div>
    );
  }
}
