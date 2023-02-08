import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PitayaFlex, {
  FlexAlignItems,
  FlexDirection,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';
import styles from '@src/assets/stylesheets/pitayas/PitayaLoading.scss';
interface LoadingDialogProps {
  className?: string;
  show: boolean;
  msg?: ReactNode;
}

const PitayaLoading = (props: LoadingDialogProps) => {
  const { show, msg, className: classNameFromProps } = props;
  if (!show) {
    return null;
  }
  const className = [classNameFromProps, styles['pitaya-loading'], 'backdrop']
    .filter(Boolean)
    .join(' ');

  return (
    <PitayaFlex
      className={className}
      flexAlignItems={FlexAlignItems.CENTER}
      flexDirection={FlexDirection.COLUMN}
      flexJustify={FlexJustify.CENTER}
    >
      <PitayaFlex
        className={`loading-block ${msg ? 'msg' : ''}`}
        flexAlignItems={FlexAlignItems.CENTER}
        flexDirection={FlexDirection.COLUMN}
        flexJustify={FlexJustify.CENTER}
      >
        <FontAwesomeIcon icon={faSpinner} color="#fff" />
        {msg && <p>{msg}</p>}
      </PitayaFlex>
    </PitayaFlex>
  );
};

export default PitayaLoading;
