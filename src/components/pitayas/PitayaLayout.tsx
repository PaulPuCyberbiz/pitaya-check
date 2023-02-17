import React from 'react';
// import styles from '../../assets/stylesheets/pitayas/PitayaLayout.scss';

export type PitayaLayoutProps = React.HTMLAttributes<HTMLElement>;

const PitayaLayout: React.FC<PitayaLayoutProps> = (
  props: PitayaLayoutProps,
) => {
  const { className, ...rest } = props;
  // const bundleName = `${styles.pitayaLayout} ${className ? className : ''}`;
  return (
    <div id={props.id}  {...rest}>
      {props.children}
    </div>
  );
};

export default PitayaLayout;
