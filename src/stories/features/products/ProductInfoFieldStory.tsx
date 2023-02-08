import React, { useState } from 'react';
import { ProductInfoField } from '@src/features/products/components/ProductInfoField';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import moment from 'moment';
import { Product } from '@src/features/products/domain/models/Product';
import { decorate } from '@storybook/addon-actions';

const ProductInfoFieldStory = () => {
  const productInfo: Product = {
    title: '某商品名稱',
    handle: '某商品名稱',
    slogan: 'slogan',
    brief: 'brief',
    published: false,
    sellFrom: moment(),
    sellTo: moment(),
  };
  const language = '繁體';
  const url = 'http://testnaomi.testcyb.info/products/';

  const [currentProductInfo, setCurrentProductInfo] = useState(productInfo);
  const changeProductInfoDeco = decorate([
    args => [`change value to ${args[0]}`],
  ]);

  const onProductInfoChange = (o: object) => {
    const info = { ...currentProductInfo, ...o };
    setCurrentProductInfo(info);
    changeProductInfoDeco.action('onProductInfoChange')(JSON.stringify(o));
  };

  return (
    <PitayaLayout>
      <ProductInfoField
        language={language}
        currentProductInfo={currentProductInfo}
        url={url}
        showLanguageSelector={true}
        onProductInfoChange={onProductInfoChange}
      />
    </PitayaLayout>
  );
};

export default ProductInfoFieldStory;
