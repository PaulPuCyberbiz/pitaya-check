import React from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import Explanation from '@src/features/billboards/components/Explanation.tsx';

const ExplanationStory = () => {
  return (
    <PitayaLayout>
      <Explanation docUrl="asdf" filmUrl="fds" />
    </PitayaLayout>
  );
};

export default ExplanationStory;
