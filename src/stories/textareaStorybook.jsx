import React from 'react';

import PitayaTextarea from '@src/components/pitayas/PitayaTextarea.tsx';

export default class TextareaStorybook extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-4">Pitaya Textarea</h1>
        <PitayaTextarea label="預設標題" placeholder="範例文字" />
        <hr />
        <h1 className="my-4">Exmaple</h1>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>可調整高度(resizable: boolean)</h3>
            <p>預設為 false</p>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea placeholder="範例文字" resizable={true} />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>預設文字 (value: string)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea placeholder="範例文字" value="輸入完成" />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>停用文字區塊 (value: string)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea placeholder="範例文字" disabled={true} />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>文字區塊標題 (label: string)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea placeholder="範例文字" label="預設標題" />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>警示文字 (warningContent: string)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea placeholder="範例文字" warningContent="警告警告" />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>提示文字 (noticeContent: string)</h3>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea placeholder="範例文字" noticeContent="警告警告" />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <h3>錯誤訊息 (invalid: boolean, invalidContent: string)</h3>
            <p>若 invalid 為 true 時，須提供 invalidContent</p>
            <p>若輸入錯誤，錯誤訊息將會覆蓋警示文字</p>
          </div>
          <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
            <PitayaTextarea
              placeholder="範例文字"
              invalid={true}
              invalidContent="輸入錯誤"
            />
          </div>
        </div>
      </div>
    );
  }
}
