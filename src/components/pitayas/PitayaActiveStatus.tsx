import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaActiveStatus.scss';
import { useTranslation } from 'react-i18next';
interface PitayaActiveStatusProps {
  isActivated: boolean;
}

const PitayaActiveStatus: React.FC<PitayaActiveStatusProps> = props => {
  const { t } = useTranslation('Pitaya');
  const { isActivated } = props;
  return (
    <div
      className={`${styles.pitayaActiveStatus} ${isActivated ? 'active' : ''}`}
    >
      {isActivated
        ? t('PitayaActiveStatus_active')
        : t('PitayaActiveStatus_inactive')}
    </div>
  );
};

export default PitayaActiveStatus;
