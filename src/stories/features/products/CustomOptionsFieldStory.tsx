import React, { useState } from 'react';
import CustomOptionsField from '@src/features/products/components/CustomOptionsField';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { OptionType } from '@src/types/BaseTypes';
import { decorate } from '@storybook/addon-actions';

const CustomOptionsFieldStory = () => {
  const shopOptions: OptionType[] = [
    {
      label: '鏡框風格',
      value: '1',
    },
    {
      label: '眼鏡度數',
      value: '2',
    },
  ];
  const [customOptions, setCustomOptions] = useState<OptionType[]>(shopOptions);

  const onCustomOptionChangeDeco = decorate([
    args => [`id: ${args[0]}, OptionName: ${args[1]}`],
  ]);
  const onUpdateDeco = decorate([
    args => [`options: ${JSON.stringify(args[0])}`],
  ]);

  const onCustomOptionChange = (id: string, optionName: string) => {
    const newCustomOptions = Object.assign([] as OptionType[], customOptions);
    const index = newCustomOptions.findIndex(item => item.value === id);
    newCustomOptions[index].label = optionName;
    setCustomOptions(newCustomOptions);
    onCustomOptionChangeDeco.action('onCustomOptionChange')(id, optionName);
  };

  const deleteCustomOption = (id: string) => {
    const result = customOptions.filter(item => item.value !== id);
    setCustomOptions(result);
  };

  const onUpdate = (s: OptionType[]) => {
    onUpdateDeco.action('onUpdate')(s);
  };
  return (
    <PitayaLayout>
      <CustomOptionsField
        customOptions={customOptions}
        onCustomShopOptionChange={onCustomOptionChange}
        deleteCustomOption={deleteCustomOption}
        onUpdateCustomOptions={onUpdate}
      />
    </PitayaLayout>
  );
};

export default CustomOptionsFieldStory;
