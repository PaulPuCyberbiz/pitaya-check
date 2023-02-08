import React, { useState } from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import ProductOptionsField from '@src/features/products/components/ProductOptionsField';
import { OptionType } from '@src/types/BaseTypes';
import { ProductOption } from '@src/features/products/domain/models/ProductOption';
import { decorate } from '@storybook/addon-actions';

const ProductOptionsFieldStory = () => {
  const sampleProductOptions: ProductOption[] = [
    {
      id: 1,
      name: '尺寸',
      types: ['超大件', '大大件', '小小件'],
    },
    {
      id: 2,
      name: '顏色',
      types: ['時尚黑色', '舒服米白色'],
    },
    {
      id: 4,
      name: '形狀',
      types: ['圓形', '方形'],
    },
  ];

  const shopOptions: OptionType[] = [
    { label: '尺寸', value: 'option_1' },
    { label: '顏色', value: 'option_2' },
    { label: '容量', value: 'option_3' },
    { label: '形狀', value: 'option_4' },
  ];

  const [productOptions, setProductOptions] =
    useState<ProductOption[]>(sampleProductOptions);
  const createProductOptionDeco = decorate([args => [`option: ${args[0]}`]]);
  const deleteOptionDeco = decorate([args => [`id: ${args[0]}`]]);
  const onOptionChangeDeco = decorate([
    args => [`id: ${args[0]}, type: ${args[1]}`],
  ]);
  const createTypeDeco = decorate([
    args => [`id: ${args[0]}, type: ${args[1]}`],
  ]);
  const deleteTypeDeco = decorate([
    args => [`id: ${args[0]}, type: ${args[1]}, typeIndex: ${args[2]}`],
  ]);
  const onTypeChangeDeco = decorate([
    args => [`id: ${args[0]}, type: ${args[1]}, typeIndex: ${args[2]}`],
  ]);
  // const onSave = decorate([args => [`options: ${JSON.stringify(args[0])}`]]);

  const createProductOption = () => {
    const newId =
      Math.max(...productOptions.map(item => item.id as number), 0) + 1;
    const result = Object.assign([], productOptions);
    result.push({ id: newId, types: [] as string[] } as ProductOption);
    setProductOptions(result);
    createProductOptionDeco.action('createProductOption')('new option');
  };

  const deleteProductOption = (id: number) => {
    const result = productOptions.filter(item => item.id !== id);
    setProductOptions(result);
    deleteOptionDeco.action('deleteOption')(id);
  };

  const onProductOptionChange = (id: number, type: string) => {
    const result = Object.assign([] as ProductOption[], productOptions);
    const index = productOptions.findIndex(item => item.id === id);
    result[index].name = type;
    setProductOptions(result);
    onOptionChangeDeco.action('onOptionChange')(id, type);
  };

  const createType = (id: number) => {
    const result = Object.assign([] as ProductOption[], productOptions);
    const index = productOptions.findIndex(item => item.id === id);
    (result[index].types as string[]).push('');
    setProductOptions(result);
    createTypeDeco.action('createType')(id, 'new type');
  };

  const deleteType = (id: number, type: string, typeIndex: number) => {
    const result = Object.assign([] as ProductOption[], productOptions);
    const index = productOptions.findIndex(item => item.id === id);
    (result[index].types as string[]).splice(typeIndex, 1);
    setProductOptions(result);
    deleteTypeDeco.action('deleteType')(id, type, typeIndex);
  };

  const onTypeChange = (id: number, type: string, typeIndex: number) => {
    const result = Object.assign([] as ProductOption[], productOptions);
    const index = productOptions.findIndex(item => item.id === id);
    (result[index].types as string[])[typeIndex] = type;
    setProductOptions(result);
    onTypeChangeDeco.action('onTypeChange')(id, type, typeIndex);
  };

  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <ProductOptionsField
          language="繁體中文"
          productOptions={productOptions}
          shopOptions={shopOptions}
          createProductOption={createProductOption}
          deleteProductOption={deleteProductOption}
          onProductOptionChange={onProductOptionChange}
          createType={createType}
          deleteType={deleteType}
          onTypeChange={onTypeChange}
          // onSave={(p) => onSave.action('onSave')(p)}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export default ProductOptionsFieldStory;
