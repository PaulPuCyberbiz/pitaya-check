import React from 'react';
import PitayaInput, {
  PitayaInputProps,
} from '@src/components/pitayas/PitayaInput';
import styles from '@src/assets/stylesheets/pitayas/PitayaSearch.scss';
import { Icon } from '@src/components/pitayas/pitayaIcons/Icon';

export type PitayaSearchProps = PitayaInputProps;

const PitayaSearch = (props: PitayaSearchProps) => {
  const { className: classNameFromProps, ...restProps } = props;
  const className = [classNameFromProps, styles.pitayaSearch]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <PitayaInput {...restProps} />
      <Icon type="search" />
    </div>
  );
};
export default PitayaSearch;
