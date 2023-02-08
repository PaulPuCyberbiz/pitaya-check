import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaLayout.scss';

export type PitayaLayoutProps = React.HTMLAttributes<HTMLElement>;

const PitayaLayout: React.SFC<PitayaLayoutProps> = (
  props: PitayaLayoutProps,
) => {
  const { className, ...rest } = props;
  const bundleName = `${styles.pitayaLayout} ${className ? className : ''}`;
  return (
    <div id={props.id} className={bundleName} {...rest}>
      {props.children}
    </div>
  );
};

export default PitayaLayout;
