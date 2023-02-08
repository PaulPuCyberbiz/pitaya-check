import React from 'react';
import PitayaFormModal from '@src/components/pitayas/PitayaFormModal.tsx';
import PitayaButton from '@src/components/pitayas/PitayaButton.tsx';

export default class formStorybook extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-5">Pitaya Loading</h1>
        <PitayaFormModal
          show={true}
          buttons={[
            <PitayaButton
              key={1}
              onClick={() => {
                console.log('按鈕1');
              }}
              value="按鈕1"
              buttonState="cancel"
            />,
            <PitayaButton
              key={2}
              onClick={() => {
                console.log('按鈕2');
              }}
              value="按鈕2"
            />,
          ]}
          onClose={() => {
            console.log('close');
          }}
        >
          <h1>這是一個跳顯示窗</h1>
        </PitayaFormModal>
      </div>
    );
  }
}
