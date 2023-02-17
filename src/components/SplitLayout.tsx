import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PitayaFlex, {
  FlexAlignItems,
  PitayaFlexItem,
} from '@src/components/pitayas/PitayaFlex';
import classNames from 'classnames';

const StyledFlex = styled(PitayaFlex)`
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLeft = styled(PitayaFlexItem)`
  &&& {
    margin-right: 25px;
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

const StyledRight = styled(PitayaFlexItem)`
  max-width: 350px;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
  &.sticky {
    position: sticky;
    top: 85px;
  }
`;

type SplitLayoutProps = {
  children: ReactNode;
};

const SplitLayout = (props: SplitLayoutProps) => {
  const { children } = props;

  return (
    <StyledFlex flexAlignItems={FlexAlignItems.START}>{children}</StyledFlex>
  );
};

const Left = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLeft grow={2.2} basis={0}>
      {children}
    </StyledLeft>
  );
};

const Right = ({
  children,
  sticky,
}: {
  children: ReactNode;
  sticky?: boolean;
}) => {
  return (
    <StyledRight grow={1} basis={0} className={classNames({ sticky })}>
      {children}
    </StyledRight>
  );
};

SplitLayout.Left = Left;
SplitLayout.Right = Right;

export default SplitLayout;
