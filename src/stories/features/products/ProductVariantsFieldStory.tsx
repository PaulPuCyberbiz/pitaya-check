import React, { useState } from 'react';
import ProductVariantsField from '@src/features/products/components/ProductVariantsField';
import { ProductOption } from '@src/features/products/domain/models/ProductOption';
import { decorate } from '@storybook/addon-actions';
import { ProductVariant } from '@src/features/products/domain/models/ProductVariant';
import { InventoryPolicy } from '@src/features/products/domain/models/InventoryPolicy';

const ProductVariantsFieldStory = () => {
  const productVariants: ProductVariant[] = [
    {
      id: 1,
      options: [],
      price: 0,
      compareAtPrice: 0,
      cost: 0,
      maxUsableBonus: 0,
      qc: '',
      inventoryQuantity: 0,
      safetyInventoryQuantity: 0,
      inventoryPolicy: InventoryPolicy.Deny,
      inventoryManagement: null,
      meas: 0,
      weight: 0,
      sku: 0,
      title: '超大件 / 時尚黑色',
    },
    {
      id: 2,
      options: [],
      price: 0,
      compareAtPrice: 0,
      cost: 0,
      maxUsableBonus: 0,
      qc: '',
      inventoryQuantity: 0,
      safetyInventoryQuantity: 0,
      inventoryPolicy: InventoryPolicy.Deny,
      inventoryManagement: null,
      meas: 0,
      weight: 0,
      sku: 0,
      title: '小小件 / 舒服米白色',
    },
  ];

  const productOptions: ProductOption[] = [
    {
      id: 1,
      name: '大小',
      types: ['big', 'small'],
      position: 1,
    },
    {
      id: 2,
      name: '顏色',
      types: ['blue', 'pink'],
      position: 2,
    },
  ];

  const [allProductVariants, setAllProductVariants] = useState(productVariants);

  const changeVariantDeco = decorate([args => [`change value to ${args[0]}`]]);
  const changePositionDeco = decorate([
    args => [`change position from ${args[0]} to ${args[1]}`],
  ]);
  const delVariantDeco = decorate([args => [`del variant[${args[0]}]`]]);
  const addVariantDeco = decorate([args => [`add variant id ${args[0]}`]]);
  const inventoryManagementDeco = decorate([
    args => [`inventory management id ${args[0]}`],
  ]);

  const onProductVariantChange = (pid: number, o: object) => {
    const array = [...allProductVariants];
    array[pid] = { ...array[pid], ...o };
    setAllProductVariants(array);
    changeVariantDeco.action('onProductVariantChange')(JSON.stringify(o));
  };

  const onVariantPositionChange = (oldIndex: number, newIndex: number) => {
    changePositionDeco.action('onVariantPositionChange')(oldIndex, newIndex);
  };

  const onDelVariant = (pid: number) => {
    const array = allProductVariants.filter((e, index) => index !== pid);
    setAllProductVariants(array);
    delVariantDeco.action('onDelVariant')(pid);
  };

  const addVariant = () => {
    const newVariant = JSON.parse(JSON.stringify(productVariants[0]));
    const newId = Math.max(...allProductVariants.map(item => item.id), 0) + 1;
    newVariant.id = newId;
    const array = [...allProductVariants];
    array.push(newVariant);
    setAllProductVariants(array);
    addVariantDeco.action('addVariant')(newId);
  };

  const onInventoryManagementChange = (pid: number) => {
    inventoryManagementDeco.action('inventoryManagement')(pid);
  };

  return (
    <ProductVariantsField
      productVariants={allProductVariants}
      productOptions={productOptions}
      onProductVariant={onProductVariantChange}
      onVariantPositionChange={onVariantPositionChange}
      onDelVariant={onDelVariant}
      onAddVariant={addVariant}
      onInventoryManagementChange={onInventoryManagementChange}
    />
  );
};

export default ProductVariantsFieldStory;
