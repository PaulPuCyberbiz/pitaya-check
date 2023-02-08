import React from 'react';
import CouponAnalysisStory from '@stories/features/business_intelligence/CouponAnalysisStory';
import SpecificCouponAnalysisStory from '@stories/features/business_intelligence/SpecificCouponAnalysisStory';

export default {
  title: 'Business Intelligence',
};

export const CouponAnalysis = () => <CouponAnalysisStory />;
export const SpecificCouponAnalysis = () => <SpecificCouponAnalysisStory />;
