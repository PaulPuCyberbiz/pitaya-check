import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { getPixelValue, getEmValue } from '@src/helpers';

type CompProps = {
  maxWidth?: number;
  maxHeight?: number;
  thumbColor?: string;
  trackColor?: string;
  scrollbarWidth?: number; // in em, not working in Firefox
};

const ScrollWrapper = styled.div<CompProps>`
  max-width: ${({ maxWidth }) => getPixelValue(maxWidth)};
  max-height: ${({ maxHeight }) => getPixelValue(maxHeight)};
  overflow: auto;

  // Overriding scrollbar to solve Mac's hiding behavior

  // Chrome, Edge, Safari
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: ${({ scrollbarWidth = 0.4 }) => getEmValue(scrollbarWidth)};
    height: ${({ scrollbarWidth = 0.4 }) => getEmValue(scrollbarWidth)};
    background-color: ${({ trackColor = 'none' }) => trackColor};
  }
  // Firefox
  scrollbar-width: thin;
  scrollbar-color: ${({ trackColor = 'transparent' }) =>
    `transparent ${trackColor}`};

  &:hover {
    // Chrome, Edge, Safari
    &::-webkit-scrollbar:vertical {
      width: ${({ scrollbarWidth = 0.4 }) => getEmValue(scrollbarWidth)};
    }
    &::-webkit-scrollbar:horizontal {
      height: ${({ scrollbarWidth = 0.4 }) => getEmValue(scrollbarWidth)};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ thumbColor = 'rgba(0, 0, 0, 0.5)' }) =>
        thumbColor};
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ trackColor = 'none' }) => trackColor};
    }
    // Firefox
    scrollbar-width: thin;
    scrollbar-color: ${({
      thumbColor = 'rgba(0, 0, 0, 0.5)',
      trackColor = 'transparent',
    }) => `${thumbColor} ${trackColor}`};
  }
`;

export type PitayaScrollbarShownWrapperProps = StyledComponentProps<
  'div',
  any,
  CompProps,
  never
>;

export const PitayaScrollbarShownWrapper = (
  props: PitayaScrollbarShownWrapperProps,
) => {
  const { maxWidth, maxHeight, thumbColor, trackColor, children, ...others } =
    props;
  return (
    <ScrollWrapper
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      thumbColor={thumbColor}
      trackColor={trackColor}
      {...others}
    >
      {children}
    </ScrollWrapper>
  );
};
