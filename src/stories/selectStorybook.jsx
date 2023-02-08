import React from 'react';

import PitayaGroup from '@src/components/pitayas/PitayaGroup.tsx';
import PitayaSelect from '@src/components/pitayas/PitayaSelect.tsx';
import PitayaCreatableSelect from '@src/components/pitayas/PitayaCreatableSelect.tsx';

export default class SelectStorybook extends React.Component {
  constructor() {
    super();
  }

  render() {
    const options = [
      {
        value: '1',
        label: 'Avocado',
      },
      {
        value: '2',
        label: 'Banana',
      },
      {
        value: '3',
        label: 'Coconut',
      },
      {
        value: '4',
        label: 'Dragon Fruit',
      },
      {
        value: '5',
        label: 'Eldberry',
      },
      {
        value: '6',
        label: 'Fig',
      },
      {
        value: '7',
        label: 'Grapes',
      },
      {
        value: '8',
        label: 'Honey Melon',
      },
    ];
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-4">Pitaya Select</h1>
        <PitayaSelect
          label="選單標題"
          placeholder="下拉選單"
          options={options}
          onChange={value => {
            console.log(value);
          }}
        />
        <hr />
        <h1 className="my-4">Exmaple</h1>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>尺寸 (selectSize: string)</h3>
            <p>共三種尺寸large, medium, small (尺寸預設為large)</p>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaGroup>
              <PitayaSelect
                label="large"
                placeholder="下拉選單"
                options={options}
              />
              <PitayaSelect
                label="medium"
                placeholder="下拉選單"
                options={options}
                selectSize="medium"
              />
              <PitayaSelect
                label="small"
                placeholder="下拉選單"
                options={options}
                selectSize="small"
              />
            </PitayaGroup>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>預設選項 (value: object)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaGroup>
              <PitayaSelect
                label="預設選項"
                placeholder="下拉選單"
                options={options}
                value={options[0]}
              />
            </PitayaGroup>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>多選下拉選單 (isMulti: true)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaGroup>
              <PitayaSelect
                label="預設選項"
                isMulti={true}
                options={options}
                placeholder="下拉選單"
                value={[
                  options[0],
                  options[1],
                  options[2],
                  options[3],
                  options[4],
                ]}
              />
            </PitayaGroup>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>停用 (disabled: boolean)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaGroup>
              <PitayaSelect
                label="停用選單"
                placeholder="下拉選單"
                options={options}
                disabled={true}
              />
            </PitayaGroup>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>可建立選項 (PitayaCreatableSelect, createLabel: string)</h3>
            <p>建立標籤時的顯示文字, 預設顯示為Create</p>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaGroup>
              <PitayaCreatableSelect
                label="預設選項"
                isMulti={true}
                createLabel="新增"
                isCreatable={true}
                options={options}
                placeholder="下拉選單"
                defaultValue={[options[0], options[1]]}
              />
            </PitayaGroup>
          </div>
        </div>
      </div>
    );
  }
}
