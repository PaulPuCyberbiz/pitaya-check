import React, { useState } from 'react';
import PitayaConfirm from '@src/components/pitayas/PitayaConfirm';

const ConfirmStorybook = () => {
  const yes = () => console.log('yes clicked!');
  const no = () => console.log('no clicked!');
  const [show, setShow] = useState(true);

  return (
    <div className="pt-5 px-5">
      <h1 className="mb-5">Pitaya Loading</h1>
      <PitayaConfirm
        show={show}
        message="Are you sure?"
        yes={yes}
        no={no}
        close={() => setShow(false)}
      />
    </div>
  );
};

export default ConfirmStorybook;
