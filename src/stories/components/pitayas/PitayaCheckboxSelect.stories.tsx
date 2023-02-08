import React, { useState } from 'react';
import PitayaCheckboxSelect from '@src/components/pitayas/PitayaCheckboxSelect';
import { OptionType } from '@src/features/collection/types';
import { Layout } from '@stories/Layout';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';

export default {
  title: 'Pitaya / Checkbox Select',
};

const colourOptions = [
  { value: 'ocean1', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'forest1', label: 'Forest1' },
  { value: 'forest2', label: 'Forest2' },
  { value: 'forest3', label: 'Forest3' },
];

export const CheckboxSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const onChange = (selected: OptionType[]) => {
    setSelectedOptions(selected);
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>Pitaya Checkbox Select</h3>
        <PitayaCheckboxSelect
          label="Checkbox 多選"
          options={colourOptions}
          value={selectedOptions}
          placeholder="多選下拉選單"
          allSelectedLabel="所有選項已選取"
          isSearchable={true}
          onChange={onChange}
        />
      </PitayaGroup>
    </Layout>
  );
};
