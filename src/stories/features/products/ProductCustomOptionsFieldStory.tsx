import React, { useState } from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import ProductCustomOptionsField from '@src/features/products/components/ProductCustomOptionsField';
import { ProductCustomOption } from '@src/features/products/domain/models/ProductCustomOption';
import { useTranslation } from 'react-i18next';
import { decorate } from '@storybook/addon-actions';

const ProductCustomOptionsFieldStory = () => {
  const { t } = useTranslation('Product');

  const productCustomOptions: ProductCustomOption[] = [
    {
      id: 1,
      productId: 1,
      name: '尺寸',
    },
    {
      id: 2,
      productId: 1,
      name: '顏色',
    },
    {
      id: 5,
      productId: 1,
      name: '形狀',
    },
  ];

  const [customOptions, setCustomOptions] =
    useState<ProductCustomOption[]>(productCustomOptions);
  const createCustomOptionDeco = decorate([args => [`option: ${args[0]}`]]);
  const deleteCustomOptionDeco = decorate([args => [`id: ${args[0]}`]]);
  const onCustomOptionChangeDeco = decorate([
    args => [`id: ${args[0]}, option: ${args[1]}`],
  ]);
  const onSave = decorate([args => [`options: ${JSON.stringify(args[0])}`]]);

  const createCustomOption = () => {
    const newId = Math.max(...customOptions.map(item => item.id), 0) + 1;
    const result = Object.assign([], customOptions);
    result.push({ id: newId, name: '' } as ProductCustomOption);
    setCustomOptions(result);
    createCustomOptionDeco.action('createCustomOption')('new option');
  };

  const deleteCustomOption = (id: number) => {
    const result = customOptions.filter(item => item.id !== id);
    setCustomOptions(result);
    deleteCustomOptionDeco.action('deleteCustomOption')(id);
  };

  const onCustomOptionChange = (id: number, option: string) => {
    const result = Object.assign([] as ProductCustomOption[], customOptions);
    const index = customOptions.findIndex(item => item.id === id);
    result[index].name = option;
    setCustomOptions(result);
    onCustomOptionChangeDeco.action('onCustomOptionChange')(id, option);
  };

  return (
    <PitayaLayout>
      <ProductCustomOptionsField
        // isCollapsible={true}
        titleLabel={t('ProductCustomOptionsField_title')}
        addOptionBtnLabel={t('ProductCustomOptionsField_add_custom_option')}
        optionInputTipLabel={t('ProductCustomOptionsField_input_tip')}
        language="繁體中文"
        customOptions={customOptions}
        createCustomOption={createCustomOption}
        deleteCustomOption={deleteCustomOption}
        onCustomOptionChange={onCustomOptionChange}
        onSave={p => onSave.action('onSave')(p)}
      />
    </PitayaLayout>
  );
};

export default ProductCustomOptionsFieldStory;
