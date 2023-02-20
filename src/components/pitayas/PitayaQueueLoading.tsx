import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PitayaFlex, {
  FlexDirection,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';
import styles from '@src/assets/stylesheets/pitayas/PitayaQueueLoading.module.scss';
import classNames from 'classnames';

interface PitayaQueueLoadingProps extends React.HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
}

const PitayaQueueLoading = (props: PitayaQueueLoadingProps) => {
  const { children, isLoading = false, ...rest } = props;

  const className = classNames(styles['pitaya-queue-loading']);
  return (
    <div className={className} {...rest}>
      {isLoading && (
        <PitayaFlex
          className="loading-block"
          flexDirection={FlexDirection.COLUMN}
          flexJustify={FlexJustify.CENTER}
        >
          <FontAwesomeIcon icon={faSpinner} color="#fff" />
        </PitayaFlex>
      )}
      {children}
    </div>
  );
};

export default PitayaQueueLoading;
