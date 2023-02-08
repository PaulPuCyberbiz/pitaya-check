import React, { useState } from 'react';
import { OptionType } from '@src/types/BaseTypes';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import ProductAdvancedSettingField from '@src/features/products/components/ProductAdvancedSettingField';
import { decorate } from '@storybook/addon-actions';

const ProductAdvancedSettingFieldStory = () => {
  const vendors: OptionType[] = [
    { label: 'Google', value: 'code_1' },
    { label: 'LINE', value: 'code_2' },
    { label: 'Apple', value: 'code_3' },
  ];

  const productTypes: OptionType[] = [
    { label: 'food', value: 'type_1' },
    { label: 'toy', value: 'type_2' },
  ];

  const channels: OptionType[] = [
    { label: 'tv', value: 'channel_1' },
    { label: 'web', value: 'channel_2' },
  ];

  const productTags: OptionType[] = [
    { label: 'Avocado', value: '1' },
    { label: 'Banana', value: '2' },
    { label: 'Coconut', value: '3' },
    { label: 'Dragon Fruit', value: '4' },
    { label: 'Eldberry', value: '5' },
  ];

  const samplePropduct = {
    vendor: vendors[0],
    productType: productTypes[1],
    channel: channels[0],
    tags: [productTags[1], productTags[3]],
    shownChannel: true,
  };

  const [vendor, setVendor] = useState<OptionType>(samplePropduct.vendor);
  const [productType, setProductType] = useState<OptionType>(
    samplePropduct.productType,
  );
  const [channel, setChannel] = useState<OptionType>(samplePropduct.channel);
  const [tags, setTags] = useState<OptionType[]>(samplePropduct.tags);

  const editOptions = decorate([() => ['go to edit options']]);
  const onVendorChangeDeco = decorate([
    args => [`vendor: ${JSON.stringify(args[0])}`],
  ]);
  const onProductTypeChangeDeco = decorate([
    args => [`productType: ${JSON.stringify(args[0])}`],
  ]);
  const onChannelChangeDeco = decorate([
    args => [`channel: ${JSON.stringify(args[0])}`],
  ]);
  const onTagsChangeDeco = decorate([
    args => [`tags: ${JSON.stringify(args[0])}`],
  ]);

  const onVendorChange = (o: OptionType) => {
    setVendor(o);
    onVendorChangeDeco.action('onVendorChange')(o);
  };

  const onProductTypeChange = (o: OptionType) => {
    setProductType(o);
    onProductTypeChangeDeco.action('onProductTypeChange')(o);
  };

  const onChannelChange = (o: OptionType) => {
    setChannel(o);
    onChannelChangeDeco.action('onChannelChange')(o);
  };

  const onTagsChange = (o: OptionType[]) => {
    setTags(o);
    onTagsChangeDeco.action('onTagsChange')(o);
  };

  return (
    <PitayaLayout>
      <ProductAdvancedSettingField
        vendor={vendor}
        productType={productType}
        channel={channel}
        tags={tags}
        vendors={vendors}
        productTypes={productTypes}
        channels={channels}
        productTags={productTags}
        shownChannel={samplePropduct.shownChannel}
        onVendorChange={onVendorChange}
        onProductTypeChange={onProductTypeChange}
        onChannelChange={onChannelChange}
        onTagsChange={onTagsChange}
        gotoEditPage={editOptions.action('edit options')}
      />
    </PitayaLayout>
  );
};

export default ProductAdvancedSettingFieldStory;
