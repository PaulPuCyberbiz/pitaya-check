import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import PitayaUploadModal from '@src/components/pitayas/PitayaUploadModal';
import { PitayaIconLabel } from '@src/components/pitayas/PitayaIconLabel';
import { convertToBytes, Unit } from '@src/helpers';

export default {
  title: 'Pitaya / UploadModal',
  decorators: [withKnobs],
};

export const General = () => {
  const [show, setShow] = useState(true);
  const modalDescription = (
    <>
      您可以
      <PitayaIconLabel
        style={{ display: 'inline-block', margin: '0 4px' }}
        type="download"
        text="下載Excel範例"
      />
      編輯後上傳您的商品。
      <br />
      上傳後會開始匯入排程，匯入完成將會寄信通知您，請耐心等候收到完成通知信，再重新整理您的商品列表。
      <div style={{ marginTop: '8px' }}>
        (Excel 表格行數不可超過 10000 行，若超過請分開表單上傳。)
      </div>
    </>
  );
  // tslint:disable-next-line:no-console
  const onAccept = (...args: any[]) => console.log('onAccept', args);
  // tslint:disable-next-line:no-console
  const onReject = (...args: any[]) => console.log('onReject', args);

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaButton
        buttonState="secondary"
        onClick={() => setShow(true)}
        value="顯示 Modal"
      />
      <PitayaUploadModal
        show={show}
        onClose={() => setShow(false)}
        modalTitle="匯入商品"
        modalDescription={modalDescription}
        maxSize={convertToBytes(1.5, Unit.MB)}
        onAccept={onAccept}
        onReject={onReject}
      />
    </PitayaLayout>
  );
};
