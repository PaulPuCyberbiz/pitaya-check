import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaHint.module.scss';
import PitayaRoundBox from './PitayaRoundBox';
import PitayaGroup from './PitayaGroup';

type PitayaHintProps = {
  className?: string;
  children: JSX.Element;
};

const PitayaHint = (props: PitayaHintProps) => {
  const className = props.className ? props.className : '';
  const { children } = props;
  return (
    <div className={`${styles['pitaya-hint']} ${className}`}>
      <div className="pitaya-hint-icon">
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
          <title>Mask</title>
          <desc>Created with Sketch.</desc>
          <g
            id="Symbols"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="other-Icon/information"
              transform="translate(-1.000000, -1.000000)"
              fill="#000000"
            >
              <g id="Mask" transform="translate(1.000000, 1.000000)">
                <path
                  d="M8,14.8999 C4.195,14.8999 1.1,11.8049 1.1,7.9999 C1.1,4.1949 4.195,1.0999
                    8,1.0999 C11.805,1.0999 14.9,4.1949 14.9,7.9999 C14.9,11.8049 11.805,14.8999
                    8,14.8999 M8,-0.0001 C3.581,-0.0001 0,3.5809 0,7.9999 C0,12.4189 3.581,15.9999
                    8,15.9999 C12.419,15.9999 16,12.4189 16,7.9999 C16,3.5809 12.419,-0.0001 8,-0.0001"
                  id="Fill-1"
                />
                <path
                  d="M8,2.7939 C6.335,2.7939 4.981,4.1479 4.981,5.8129 C4.981,6.1169 5.227,6.3629
                    5.531,6.3629 C5.834,6.3629 6.081,6.1169 6.081,5.8129 C6.081,4.7549 6.942,3.8939
                    8,3.8939 C9.058,3.8939 9.919,4.7549 9.919,5.8129 C9.919,6.8709 9.058,7.7319 8,7.7319
                    C7.696,7.7319 7.45,7.9779 7.45,8.2819 L7.45,10.0219 C7.45,10.3259 7.696,10.5719
                    8,10.5719 C8.304,10.5719 8.55,10.3259 8.55,10.0219 L8.55,8.7819 C9.953,8.5229
                    11.019,7.2899 11.019,5.8129 C11.019,4.1479 9.665,2.7939 8,2.7939"
                  id="Fill-4"
                />
                <path
                  d="M8.0112,11.5449 C7.4962,11.5449 7.0652,11.9659 7.0652,12.4689 C7.0652,12.9719
                    7.4962,13.3929 8.0112,13.3929 C8.5072,13.3929 8.9572,12.9719 8.9332,12.4909
                    C8.9572,11.9619 8.5292,11.5449 8.0112,11.5449"
                  id="Fill-6"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <PitayaGroup className="pitaya-hint-content">
        <PitayaRoundBox>{children}</PitayaRoundBox>
      </PitayaGroup>
    </div>
  );
};

export default PitayaHint;
