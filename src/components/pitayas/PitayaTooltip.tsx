import { PitayaPortal } from '@src/components/pitayas/PitayaPortal';
import React from 'react';
import ReactTooltip, { Props as ReactTooltipProps } from 'react-tooltip';

export type PitayaTooltipProps = ReactTooltipProps & {
  withPortal?: boolean;
};

const PitayaTooltip = (props: PitayaTooltipProps) => {
  const { type = 'light', withPortal = 'true', ...otherProps } = props;

  return withPortal ? (
    <PitayaPortal>
      <ReactTooltip type={type} {...otherProps} />
    </PitayaPortal>
  ) : (
    <ReactTooltip type={type} {...otherProps} />
  );
};

export default PitayaTooltip;
