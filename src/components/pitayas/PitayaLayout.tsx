import React from 'react';
// import styles from '../../assets/stylesheets/pitayas/PitayaLayout.scss';
// import './pitayaLayout.scss'
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
    {/* <div className='pitayaLayout' id={props.id}  {...rest}> */}
      <h1>This is a title.</h1>
      {props.children}
    </div>
  );
};

export default PitayaLayout;
