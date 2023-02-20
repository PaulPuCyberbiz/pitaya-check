import React from 'react';
import { Trans } from 'react-i18next';
// @ts-ignore
import ErrorWarning from '@src/assets/img/error_warning.png';
// @ts-ignore
import styles from '@src/assets/stylesheets/pitayas/PitayaFail.module.scss';

const PitayaFail = ({
  i18nKey = 'PitayaFail_connection_failed_message',
}: {
  i18nKey?: string;
}) => {
  return (
    <div className={styles.pitayaFail}>
      <div className="error-message">
        <img src={ErrorWarning} />
        <Trans i18nKey={`Pitaya:${i18nKey}`}>
          <h2 />
          <h3 />
        </Trans>
      </div>
    </div>
  );
};

export default PitayaFail;
