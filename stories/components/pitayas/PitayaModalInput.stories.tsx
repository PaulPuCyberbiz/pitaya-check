import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  withKnobs,
  text,
  boolean,
  select,
  radios,
} from '@storybook/addon-knobs';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaModalInput from '@src/components/pitayas/PitayaModalInput';
import PitayaButton from '@src/components/pitayas/PitayaButton';

export default {
  title: 'Pitaya / ModalInput',
  decorators: [withKnobs],
};

export const General = () => {
  const { t } = useTranslation('Pitaya');
  const [value, setValue] = useState(0);
  const props = {
    id: text('id', ''),
    autoFocus: boolean('autoFocus', false),
    className: text('className', ''),
    defaultValue: text('defaultValue', ''),
    disabled: boolean('disabled', false),
    invalid: boolean('invalid', false),
    invalidContent: text('invalidContent', ''),
    inputDirection: radios(
      'inputDirection',
      { ltr: 'ltr', rtl: 'rtl' },
      'ltr',
      'inputDirection',
    ),
    inputSize: radios(
      'inputSize',
      { large: 'large', medium: 'medium', small: 'small' },
      'large',
      'inputSize',
    ),
    isShowDelBtn: boolean('isShowDelBtn', false),
    languageLabel: text('languageLabel', ''),
    inputType: select(
      'inputType',
      {
        'button': 'button',
        'checkbox': 'checkbox',
        'color': 'color',
        'date': 'date',
        'datetime-local': 'datetime-local',
        'email': 'email',
        'file': 'file',
        'hidden': 'hidden',
        'image': 'image',
        'month': 'month',
        'number': 'number',
        'password': 'password',
        'radio': 'radio',
        'range': 'range',
        'reset': 'reset',
        'search': 'search',
        'submit': 'submit',
        'tel': 'tel',
        'text': 'text',
        'time': 'time',
        'url': 'url',
        'week': 'week',
        'datetime': 'datetime',
      },
      'text',
      'inputType',
    ),
    name: text('name', ''),
    noticeContent: text('noticeContent', ''),
    placeholder: text('placeholder', ''),
    warningContent: text('warningContent', ''),
    value: text('value', ''),
    requiredText: text('requiredText', ''),
    readOnly: boolean('readOnly', false),
    spellCheck: boolean('spellCheck', false),
    inputClassName: text('inputClassName', ''),
    modalClassName: text('modalClassName', ''),
    closeOnBackDrop: boolean('closeOnBackDrop', false),
    yesText: text('yesText', t('PitayaConfirm_confirm')),
    noText: text('noText', t('PitayaConfirm_cancel')),
    yesBtnDisabled: boolean('yesBtnDisabled', false),
  };
  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaRoundBox>
        <PitayaModalInput {...props} yes={() => {}} no={() => {}} value={value}>
          <PitayaButton onClick={() => setValue(perv => perv + 1)}>
            Value + 1
          </PitayaButton>
        </PitayaModalInput>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};
