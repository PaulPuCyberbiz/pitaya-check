import React from 'react';

import PitayaFlex from '@src/components/pitayas/PitayaFlex';
import PitayaRadios from '@src/components/pitayas/PitayaRadios';
import PitayaDateTimePicker, {
  PitayaDateTimePickerProps,
} from '@src/components/pitayas/PitayaDateTimePicker';
import styles from '@src/assets/stylesheets/pitayas/PitayaDateTimePicker.module.scss';
import { useTranslation } from 'react-i18next';
export interface PitayaDisableableDatePickerProps
  extends PitayaDateTimePickerProps {
  disabled: boolean;
  onDisabled: (b: boolean) => void;
  readOnly?: boolean;
  specifyLabel?: string;
}

const PitayaDisableableDatePicker = (
  props: PitayaDisableableDatePickerProps,
) => {
  const { t } = useTranslation('Pitaya');
  const {
    disabled,
    onDisabled,
    specifyLabel,
    readOnly = false,
    ...rest
  } = props;

  const selectedOption = disabled ? 'disabled' : 'editable';

  const radioOptions = [
    {
      label: specifyLabel
        ? specifyLabel
        : t('PitayaDisableableDatePicker_limit'),
      value: 'editable',
      disabled: readOnly,
    },
    {
      label: t('PitayaDisableableDatePicker_unlimit'),
      value: 'disabled',
      disabled: readOnly,
    },
  ];

  return (
    <div className={`${styles.pitayaDateTimePicker}${' ' + selectedOption}`}>
      <PitayaRadios
        checkboxes={radioOptions}
        selected={selectedOption}
        onChange={v => onDisabled(v === 'disabled')}
      />
      <PitayaFlex>
        <div className={`pitayaDateTimePicker__datepicker ${selectedOption}`}>
          <PitayaDateTimePicker disabled={disabled || readOnly} {...rest} />
        </div>
      </PitayaFlex>
    </div>
  );
};

export default PitayaDisableableDatePicker;
