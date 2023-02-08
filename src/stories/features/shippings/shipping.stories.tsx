import React from 'react';

import ShippingIndexFieldStory from '@stories/features/shippings/ShippingIndexFieldStory';
import ShippingEditFieldStory from '@stories/features/shippings/ShippingEditFieldStory';
import ShippingRegionModalFieldStory from '@stories/features/shippings/ShippingRegionModalFieldStory';

export default {
  title: 'Shipping',
};

export const ShippingIndexField = () => <ShippingIndexFieldStory />;
export const ShippingEditField = () => <ShippingEditFieldStory />;
export const ShippingRegionModal = () => <ShippingRegionModalFieldStory />;
