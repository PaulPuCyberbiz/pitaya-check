import React from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaFlex, {
  FlexAlignItems,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';

export const Layout = ({ children }: React.PropsWithChildren<{}>) => (
  <PitayaLayout style={{ minHeight: '100vh' }}>
    <PitayaFlex
      className="mb-5"
      flexAlignItems={FlexAlignItems.START}
      flexJustify={FlexJustify.SPACE_BETWEEN}
    >
      {children}
    </PitayaFlex>
  </PitayaLayout>
);
