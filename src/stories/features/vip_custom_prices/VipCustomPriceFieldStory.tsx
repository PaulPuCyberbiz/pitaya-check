import React from 'react';
import VipCustomPriceField from '@src/features/vip_custom_prices/components/VipCustomPriceField';
import {
  CollectionColumn,
  ProductOrVariantRow,
} from '@src/features/vip_custom_prices/domain/models/VipCustomPrice';
import { decorate } from '@storybook/addon-actions';
import { OptionType } from '@src/types/BaseTypes';

const VipCustomPriceFieldStory = () => {
  const onNew = () => {
    decorate([]).action('onNew')('add new column');
  };
  const onSelectChange = (vipCollectionId: number, columnIdx: number) => {
    decorate([]).action('onSelectChange')(
      `vipCollectionId: ${vipCollectionId}, columnIdx: ${columnIdx}`,
    );
  };
  const onEdit = (productId: number, vipCollectionId: number) => {
    decorate([]).action('onEdit')(
      `productId: ${productId}, vipCollectionId: ${vipCollectionId}`,
    );
  };
  const onRemove = (
    productName: string,
    productId: number,
    vipCollectionId: number,
  ) => {
    decorate([]).action('onRemove')(
      `productName: ${productName}, productId: ${productId}, vipCollectionId: ${vipCollectionId}`,
    );
  };
  const onInputChange = (
    variantId: number,
    vipCollectionId: number,
    vipPrice: number,
  ) => {
    decorate([]).action('onInputChange')(
      `variantId: ${variantId}, vipCollectionId: ${vipCollectionId}, vipPrice: ${vipPrice}`,
    );
  };
  const onInputBlur = () => {
    decorate([]).action('onInputBlur');
  };

  const collectionCols: CollectionColumn[] = [
    { title: 'vip_collection_title1', id: 1 },
    { title: 'vip_collection_title2', id: 2 },
    { title: '', id: 3 },
    { title: '', id: 4 },
  ];

  const availOptions: OptionType[] = [
    { label: '請選擇群組', value: '-1' },
    { label: 'vip_collection_title3', value: '3' },
    { label: 'vip_collection_title4', value: '4' },
    { label: 'vip_collection_title5', value: '5' },
  ];

  const productOrVariantRows: ProductOrVariantRow[] = [
    {
      id: 1,
      title: 'FILA KIDS 可收納風衣外套-鮮粉 1JKU-4300-BP',
      vip_collection_title1_1: true,
      vip_collection_title2_2: false,
    },
    {
      id: 1,
      title: '黑色規格 / 小號規格',
      price: 88888,
      compareAtPrice: 88888,
      vip_collection_title1_1: 400,
    },
    {
      id: 2,
      title: '黑色規格名稱很長名稱很長 / 小號規龜龜龜龜龜',
      price: 88888,
      compareAtPrice: 88888,
    },
    {
      id: 3,
      title: '黑色規格名稱很長名稱很長 / 小號規',
      price: 88888,
      compareAtPrice: 88888,
      vip_collection_title1_1: 404,
    },
    {
      id: 2,
      title: 'FILA KIDS 可收納風衣外套-鮮粉 1JKU-4300-BP名稱很長名稱很長長長',
      vip_collection_title1_1: true,
      vip_collection_title2_2: false,
    },
    {
      id: 1,
      title: '黑 / S',
      price: 88888,
      compareAtPrice: null,
      vip_collection_title1_1: 400,
    },
    {
      id: 2,
      title: '黑 / M',
      price: 884,
      compareAtPrice: null,
      vip_collection_title1_1: 404,
    },
  ];

  return (
    <VipCustomPriceField
      breadcrumbItems={[]}
      collectionCols={collectionCols}
      availOptions={availOptions}
      productOrVariantRows={productOrVariantRows}
      onNew={onNew}
      onSelectChange={onSelectChange}
      onEdit={onEdit}
      onRemove={onRemove}
      onInputChange={onInputChange}
      onInputBlur={onInputBlur}
    />
  );
};

export default VipCustomPriceFieldStory;
