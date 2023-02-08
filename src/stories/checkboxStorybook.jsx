import React from 'react';

import PitayaGroup from '@src/components/pitayas/PitayaGroup.tsx';
import PitayaFlex, {
  FlexDirection,
} from '@src/components/pitayas/PitayaFlex.tsx';
import PitayaCheckbox from '@src/components/pitayas/PitayaCheckbox.tsx';
import PitayaRadios from '@src/components/pitayas/PitayaRadios.tsx';

export default class CheckboxStorybook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkNormal: false,
      checkSelected: true,
      checkboxes1: true,
      checkboxes21: true,
      checkboxes22: false,
      radios: [
        {
          label: 'radio1',
          value: 'radio1',
        },
        {
          label: 'radio2',
          value: 'radio2',
        },
        {
          label: 'radio3',
          value: 'radio3',
        },
      ],
      radioSelected: 'radio1',
    };
  }
  handleChange = obj => {
    console.log(obj);
    this.setState({
      ...obj,
    });
  };
  handleRadiosChange = selected => {
    console.log(selected);
    this.setState({
      radioSelected: selected,
    });
  };
  render() {
    const {
      checkNormal,
      checkSelected,
      checkboxes1,
      checkboxes21,
      checkboxes22,
      radios,
      radioSelected,
    } = this.state;
    return (
      <div className="container pt-5">
        <div className="col-12">
          <h1> Pitaya Checkbox </h1>
          <div className="row m-0">
            <div className="mr-5">
              <p> Normal </p>
              <PitayaCheckbox
                label="label"
                checked={checkNormal}
                onChange={() => {
                  this.handleChange({ checkNormal: !checkNormal });
                }}
              />
            </div>
            <div className="mr-5">
              <p> Selected </p>
              <PitayaCheckbox
                inputId="checkSelected"
                label="label"
                checked={checkSelected}
                onChange={() => {
                  this.handleChange({ checkSelected: !checkSelected });
                }}
              />
            </div>
            <div>
              <p> disabled </p>
              <PitayaCheckbox
                label="label"
                disabled={true}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12">
          <h1> Pitaya Checkboxes</h1>
          <h3> - Row Major</h3>
          <PitayaGroup title="This is the title for a row major pitaya checkboxes">
            <PitayaFlex flexDirection={FlexDirection.ROW}>
              <PitayaCheckbox
                inputId="checkBoxes11"
                label="label11"
                checked={checkboxes1}
                onChange={() => {
                  this.handleChange({ checkboxes1: true });
                }}
              />
              <PitayaCheckbox
                inputId="checkBoxes12"
                label="label12"
                checked={!checkboxes1}
                onChange={() => {
                  this.handleChange({ checkboxes1: false });
                }}
              />
            </PitayaFlex>
          </PitayaGroup>
          <h3> - Column Major</h3>
          <PitayaGroup title="This is the title for a column major pitaya checkboxes">
            <PitayaFlex flexDirection={FlexDirection.COLUMN}>
              <PitayaCheckbox
                label="label21"
                checked={checkboxes21}
                onChange={() => {
                  this.handleChange({ checkboxes21: !checkboxes21 });
                }}
              />
              <PitayaCheckbox
                label="label22"
                checked={checkboxes22}
                onChange={() => {
                  this.handleChange({ checkboxes22: !checkboxes22 });
                }}
              />
            </PitayaFlex>
          </PitayaGroup>
        </div>
      </div>
    );
  }
}
