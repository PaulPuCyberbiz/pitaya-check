import React from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import ProductDescriptionsField from '@src/features/products/components/ProductDescriptionsField';
import { ProductDescription } from '@src/features/products/domain/models/ProductDescriptions';
import { decorate } from '@storybook/addon-actions';

const ProductDescriptionsFieldStory = () => {
  const language = '繁體中文';
  const descriptions: ProductDescription[] = [
    {
      id: 1,
      settingName: '商品介紹',
      bodyHtml: '<h1>hello</h1>',
    },
    {
      id: 2,
      settingName: '規格說明',
      bodyHtml: '',
    },
    {
      id: 3,
      settingName: '運送方式',
      bodyHtml: '',
    },
  ];

  const onSave = decorate([
    args => [`description: ${JSON.stringify(args[0])}`],
  ]);

  return (
    <PitayaLayout>
      <ProductDescriptionsField
        language={language}
        descriptions={descriptions}
        onSave={d => onSave.action('onSave')(d)}
      />
    </PitayaLayout>
  );
};

export default ProductDescriptionsFieldStory;
