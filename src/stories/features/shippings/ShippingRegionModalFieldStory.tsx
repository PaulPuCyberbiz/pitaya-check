import React, { useState } from 'react';
import ShippingRegionModalField from '@src/features/shippings/component/edit/ShippingRegionModalField';
import { Node } from '@src/components/pitayas/PitayaTree';
import { CheckStatus } from '@src/components/pitayas/types/CheckStatus';

const ShippingRegionModalFieldStory = () => {
  const initialNodes = [
    {
      key: '台灣',
      label: '台灣',
      checked: CheckStatus.HALF_CHECKED,
      children: [
        {
          key: '台灣本島',
          label: '台灣本島',
          checked: CheckStatus.HALF_CHECKED,
          children: [
            {
              key: '基隆市',
              label: '基隆市',
              checked: CheckStatus.CHECKED,
            },
            {
              key: '台北市',
              label: '台北市',
              checked: CheckStatus.NONE,
            },
            {
              key: '新北市',
              label: '新北市',
              checked: CheckStatus.CHECKED,
            },
            {
              key: '宜蘭縣',
              label: '宜蘭縣',
              checked: CheckStatus.NONE,
            },
            {
              key: '新竹市',
              label: '新竹市',
              checked: CheckStatus.CHECKED,
            },
          ],
        },
        {
          key: '台灣離島',
          label: '台灣離島',
          checked: CheckStatus.HALF_CHECKED,
          children: [
            {
              key: '金門縣',
              label: '金門縣',
              checked: CheckStatus.CHECKED,
            },
            {
              key: '連江縣',
              label: '連江縣',
              checked: CheckStatus.NONE,
            },
            {
              key: '澎湖縣',
              label: '澎湖縣',
              checked: CheckStatus.CHECKED,
            },
            {
              key: '南海諸島',
              label: '南海諸島',
              checked: CheckStatus.NONE,
            },
          ],
        },
      ],
    },
    {
      key: '亞洲',
      label: '亞洲',
      checked: CheckStatus.HALF_CHECKED,
      children: [
        {
          key: '東南亞',
          label: '東南亞',
          checked: CheckStatus.HALF_CHECKED,
          children: [
            {
              key: '日本',
              label: '日本',
              checked: CheckStatus.HALF_CHECKED,
              children: [
                {
                  key: '千葉',
                  label: '千葉',
                  checked: CheckStatus.HALF_CHECKED,
                },
                {
                  key: '東京',
                  label: '東京',
                  checked: CheckStatus.CHECKED,
                },
              ],
            },
            {
              key: '菲律賓',
              label: '菲律賓',
              checked: CheckStatus.NONE,
            },
            {
              key: '越南',
              label: '越南',
              checked: CheckStatus.CHECKED,
            },
          ],
        },
        {
          key: '南亞',
          label: '南亞',
          checked: CheckStatus.HALF_CHECKED,
          children: [
            {
              key: '印度',
              label: '印度',
              checked: CheckStatus.CHECKED,
            },
            {
              key: '巴基斯坦',
              label: '巴基斯坦',
              checked: CheckStatus.NONE,
            },
          ],
        },
      ],
    },
  ];

  const [showModal, setShowModal] = useState(true);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);

  const cancel = (show: boolean) => setShowModal(show);

  return (
    <ShippingRegionModalField
      show={showModal}
      cancel={cancel}
      nodes={nodes}
      onChangeNodes={setNodes}
      onSaveNodes={() => console.log('save!!')}
    />
  );
};

export default ShippingRegionModalFieldStory;
