import React from 'react';

import ProductOptionsFieldStory from '@stories/features/products/ProductOptionsFieldStory';
import ProductCustomOptionsFieldStory from '@stories/features/products/ProductCustomOptionsFieldStory';
import ProductDescriptionsFieldStory from '@stories/features/products/ProductDescriptionsFieldStory';
import ProductInfoFieldStory from '@stories/features/products/ProductInfoFieldStory';
import ProductAdvancedSettingFieldStory from '@stories/features/products/ProductAdvancedSettingFieldStory';
import ProductRelatedCollectionFieldStory from '@stories/features/products/ProductRelatedCollectionFieldStory';
import ProductBindShippingFieldStory from '@stories/features/products/ProductBindShippingFieldStory';
import ProductPhotosUploadFieldStory from '@stories/features/products/ProductPhotosUploadFieldStory';
import ProductVariantsFieldStory from '@stories/features/products/ProductVariantsFieldStory';
import ProductTableStory from '@stories/features/products/ProductTableStory';

export default {
  title: 'Product',
};

export const ProductOptionsField = () => <ProductOptionsFieldStory />;
export const ProductCustomOptionsField = () => (
  <ProductCustomOptionsFieldStory />
);
export const ProductDescriptionsField = () => <ProductDescriptionsFieldStory />;
export const ProductInfoField = () => <ProductInfoFieldStory />;
export const ProductAdvancedSettingField = () => (
  <ProductAdvancedSettingFieldStory />
);
export const ProductRelatedCollectionField = () => (
  <ProductRelatedCollectionFieldStory />
);
export const ProductBindShippingField = () => <ProductBindShippingFieldStory />;
export const ProductPhotoUploadField = () => <ProductPhotosUploadFieldStory />;
export const ProductVariantsField = () => <ProductVariantsFieldStory />;
export const ProductTable = () => <ProductTableStory />;
