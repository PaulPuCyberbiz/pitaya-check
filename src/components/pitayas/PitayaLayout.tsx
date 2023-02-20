import React from 'react';
// import styles from '../../assets/stylesheets/pitayas/PitayaLayout.module.scss';
// import './pitayaLayout.module.scss'
import styles from '@src/assets/stylesheets/pitayas/PitayaLayout.module.scss'

export type PitayaLayoutProps = React.HTMLAttributes<HTMLElement>;

const PitayaLayout: React.FC<PitayaLayoutProps> = (
  props: PitayaLayoutProps,
) => {
  console.log({styles})
  const { className, ...rest } = props;
  const bundleName = `${styles.pitayaLayout} ${className ? className : ''}`;
  return (
    <div id={props.id} className={bundleName}  {...rest}>
      {props.children}
    </div>
  );
};

export default PitayaLayout;
