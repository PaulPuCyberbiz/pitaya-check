import React from 'react';
import ExplanationStory from '@stories/features/billboards/ExplanationStory';
import BillboardsSliderStory from '@stories/features/billboards/BillboardsSliderStory';

export default {
  title: 'Billboards',
};

export const Explanation = () => <ExplanationStory />;
export const Slider = () => <BillboardsSliderStory />;
