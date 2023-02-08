import React, { useState } from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import Comp from '@src/features/language_selector/LanguageSelector';
import { decorate } from '@storybook/addon-actions';
import { LanguageOption } from '@src/reducers/shopLocalizationReducer';

export default {
  title: 'Language Selector',
};

export const LanguageSelector = () => {
  const options: LanguageOption[] = [
    { label: '中文', value: 'zh-tw' },
    { label: '英文', value: 'en' },
  ];
  const [value, setValue] = useState(options[0]);

  const changeLanguageDeco = decorate([
    args => [`change language to ${args[0].value}`],
  ]);

  const onChange = (o: LanguageOption) => {
    setValue(o);
    changeLanguageDeco.action('change language')(o);
  };

  return (
    <PitayaLayout>
      <Comp
        languages={options}
        currentLanguage={value}
        setCurrentLanguage={onChange}
      />
    </PitayaLayout>
  );
};
