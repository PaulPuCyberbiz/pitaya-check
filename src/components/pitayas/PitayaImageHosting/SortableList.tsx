import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { PitayaScrollbarShownWrapper } from '@src/components/pitayas/PitayaScrollbarShownWrapper';

type SortableListProps = {
  children?: React.ReactNode;
};

export const SortableList = SortableContainer(
  ({ children }: SortableListProps) => {
    return (
      <PitayaScrollbarShownWrapper className="sortable-container">
        {children}
      </PitayaScrollbarShownWrapper>
    );
  },
);
