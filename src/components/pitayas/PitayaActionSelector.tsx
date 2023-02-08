import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { OptionType } from '@src/types/BaseTypes';

import PitayaFlex from '@src/components/pitayas/PitayaFlex';
import PitayaCheckOptions from '@src/components/pitayas/PitayaCheckOptions';
import styles from '@src/assets/stylesheets/pitayas/PitayaActionSelector.scss';
import { CheckStatus } from '@src/components/pitayas/types/CheckStatus';

export interface PitayaActionSelectorProps extends WithTranslation {
  selectedNumber: number;
  selectOptions?: OptionType[];
  checkStatus: CheckStatus;
  onSelectAll?: (option: OptionType) => void;
  onToggleSelectedPageItems: () => void;
}

export default withTranslation('Pitaya')((props: PitayaActionSelectorProps) => {
  const {
    t,
    selectedNumber,
    onToggleSelectedPageItems,
    selectOptions: options = [],
    onSelectAll,
    checkStatus,
  } = props;

  return (
    <PitayaFlex className={styles.pitayaActionSelector}>
      <PitayaCheckOptions
        checked={checkStatus === CheckStatus.CHECKED}
        halfChecked={checkStatus === CheckStatus.HALF_CHECKED}
        label={t('PitayaActionSelector_select_items', { selectedNumber })}
        options={options}
        onSelect={onSelectAll as (option: OptionType) => void}
        onCheck={onToggleSelectedPageItems}
      />
    </PitayaFlex>
  );
});
