import React, { useState } from 'react';
import OptionsModal from '@src/features/products/components/OptionsModal';
import { ProductOption } from '@src/features/products/domain/models/ProductOption';
import { ShopOption } from '@src/features/products/domain/models/ShopOptions';
import { decorate } from '@storybook/addon-actions';

const OptionsModalStory = () => {
  const language = '繁體';
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
  ];

  // // custom options field
  const originalShopOptions: ShopOption[] = [
    { label: '尺寸', value: 'option_1' },
    { label: '顏色', value: 'option_2' },
    { label: '容量', value: 'option_3' },
    { label: '形狀', value: 'option_4' },
  ];

  const [shopOptions, setShopOptions] =
    useState<ShopOption[]>(originalShopOptions);
  const [showModal, setShowModal] = useState<boolean>(true);
  const customShopOptions = Array.from(shopOptions);
  const onUpdateCustomOptionsDeco = decorate([
    args => [`new Shop Options: ${JSON.stringify(args[0])}`],
  ]);
  const newShopOptionDeco = decorate([
    args => [`create new Shop Option: ${args[0]}`],
  ]);
  const onCloseDeco = decorate([args => [`close modal`]]);
  const onSaveDeco = decorate([
    args => [`on save: ${JSON.stringify(args[0])}`],
  ]);

  const onUpdateCustomOptions = (newShopOptions: ShopOption[]) => {
    setShopOptions(newShopOptions);
    onUpdateCustomOptionsDeco.action('onUpdateCustomOptions')(newShopOptions);
  };

  const onCreateShopOption = (newShopOption: ShopOption) => {
    newShopOptionDeco.action('newShopOptionDeco')(newShopOption);
  };

  const onClose = () => {
    onCloseDeco.action('onCloseDeco')();
    // setShowModal(!showModal);
  };

  const onSave = (newProductOptions: ProductOption[]) => {
    onSaveDeco.action('onSave')(newProductOptions);
  };

  return (
    <OptionsModal
      language={language}
      showModal={showModal}
      productOptions={sampleProductOptions}
      shopOptions={shopOptions}
      customShopOptions={customShopOptions}
      onUpdateCustomOptions={onUpdateCustomOptions}
      onCreateShopOption={onCreateShopOption}
      onClose={onClose}
      onSave={onSave}
    />
  );
};

export default OptionsModalStory;
