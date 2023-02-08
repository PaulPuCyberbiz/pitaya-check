import React from 'react';

import PitayaFileInput from '@src/components/pitayas/PitayaFileInput.tsx';

export default class FileInputStorybook extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }

  render() {
    return (
      <div className="pt-5 px-5">
        <PitayaFileInput
          label="類別ICON"
          previousFile={this.state.file}
          file={this.state.file}
          onChange={file => {
            console.log('類別ICON upload image');
            this.setState({
              file: file,
            });
          }}
        />
      </div>
    );
  }
}
