import React, { useState } from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import ProductRelatedCollectionField from '@src/features/products/components/ProductRelatedCollectionField';
import { OptionType } from '@src/types/BaseTypes';
import { decorate } from '@storybook/addon-actions';

const ProductRelatedCollectionFieldStory = () => {
  const relatedCustomCollections: OptionType[] = [
    {
      label: '獨家防曬粉餅',
      value: '1',
    },
    {
      label: '居家上衣',
      value: '2',
    },
  ];

  const [customCollections, setCustomCollections] = useState([] as any);
  const [smartCollections, setSmartCollections] = useState([] as any);

  const changeCollectionDeco = decorate([
    args => [`change collection to ${args[0].label}`],
  ]);

  function onCustomCollectionsChange(e: OptionType[]) {
    setCustomCollections(e);
    e && changeCollectionDeco.action('change collection')(e[e.length - 1]);
  }

  function onSmartCollectionsChange(e: OptionType[]) {
    setSmartCollections(e);
    e && changeCollectionDeco.action('change collection')(e[e.length - 1]);
  }

  return (
    <PitayaLayout>
      <ProductRelatedCollectionField
        relatedCustomCollections={relatedCustomCollections}
        relatedSmartCollections={relatedCustomCollections}
        onCustomCollectionsChange={onCustomCollectionsChange}
        customCollections={customCollections}
        onSmartCollectionsChange={onSmartCollectionsChange}
        smartCollections={smartCollections}
      />
    </PitayaLayout>
  );
};

export default ProductRelatedCollectionFieldStory;
