import React, { useState } from 'react';
import ProductTable from '@src/features/products/components/ProductTable';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { Product } from '@src/features/products/domain/models/Product';

const ProductTableStory = () => {
  const products: Product[] = [
    {
      id: 1,
      title: '商品名稱',
      handle: 'handle1',
      tags: [
        { label: '標籤1', value: 'label1' },
        { label: '標籤2', value: 'label2' },
      ],
      variants: [
        {
          id: 101,
          title: '超大件 / 時尚黑色',
          inventoryQuantity: 2,
          sold: 12,
        },
      ],
      published: true,
      photo: 'media/asfbsrgerg',
    },
    {
      id: 2,
      title: '商品名稱2',
      handle: 'handle2',
      tags: [
        { label: '標籤1', value: 'label1' },
        { label: '標籤2', value: 'label2' },
        { label: '標籤3', value: 'label3' },
      ],
      variants: [
        {
          id: 102,
          title: '超大件 / 時尚黑色',
          inventoryQuantity: 2,
          sold: 22,
        },
        {
          id: 103,
          title: '超大件 / 舒服米白色',
          inventoryQuantity: 1,
          sold: 30,
        },
      ],
      published: false,
      photo: 'media/asfbsrgerg',
    },
  ];
  const [productSelectedList, setProductSelectedList] = useState<number[]>([]);
  const goToProductPage = (handle: string) => {
    console.log(handle);
  };
  const onDelete = (id: number) => {
    console.log(id);
  };
  const onProductSelect = (id: number) => {
    const newList = productSelectedList.includes(id)
      ? productSelectedList.filter(selectedId => selectedId !== id)
      : productSelectedList.concat(id);

    setProductSelectedList([...newList]);
  };
  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <ProductTable
          products={products}
          selectedItems={productSelectedList}
          goToProductPage={goToProductPage}
          onDelete={onDelete}
          onSelect={onProductSelect}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export default ProductTableStory;
