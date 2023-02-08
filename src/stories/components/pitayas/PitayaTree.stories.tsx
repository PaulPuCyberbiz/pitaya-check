import React, { useState } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { CheckStatus } from '@src/components/pitayas/types/CheckStatus';
import PitayaTree, { Node } from '@src/components/pitayas/PitayaTree';

export default {
  title: 'Pitaya / Tree',
  decorators: [withKnobs],
};

export const 預設 = () => {
  const nodes = [
    {
      key: 'mars',
      label: 'Mars',
      checked: CheckStatus.HALF_CHECKED,
      children: [
        {
          key: 'phobos',
          label: 'Phobos',
          checked: CheckStatus.HALF_CHECKED,
          children: [
            {
              key: 'zack',
              label: 'Zack',
              checked: CheckStatus.HALF_CHECKED,
              children: [
                {
                  key: 'tai',
                  label: 'Tai',
                  checked: CheckStatus.NONE,
                },
                {
                  key: 'johnson',
                  label: 'Johnson',
                  checked: CheckStatus.NONE,
                },
                {
                  key: 'johnny',
                  label: 'Johnny',
                  checked: CheckStatus.NONE,
                },
                {
                  key: 'gin',
                  label: 'Gin',
                  checked: CheckStatus.CHECKED,
                },
              ],
            },
            {
              key: 'coco',
              label: 'Coco',
              checked: CheckStatus.CHECKED,
              children: [
                {
                  key: 'allen',
                  label: 'Allen',
                  checked: CheckStatus.CHECKED,
                },
              ],
            },
          ],
        },
        { key: 'phobos_2', label: 'phobos_2', checked: CheckStatus.CHECKED },
      ],
    },
    {
      key: 'yee',
      label: 'YEE',
      checked: CheckStatus.CHECKED,
      children: [
        {
          key: 'hank',
          label: 'Hank',
          checked: CheckStatus.CHECKED,
        },
      ],
    },
  ];

  const [treeNodes, setTreeNodes] = useState<Node[]>(nodes);

  return (
    <PitayaRoundBox>
      <h3>預設</h3>
      <PitayaTree nodes={treeNodes} onCheck={setTreeNodes} />
    </PitayaRoundBox>
  );
};
