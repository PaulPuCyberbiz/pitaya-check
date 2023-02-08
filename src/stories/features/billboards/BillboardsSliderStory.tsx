import React from 'react';
import BillboardsSlider from '@src/features/billboards/components/BillboardsSlider';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { Billboard } from '@src/features/billboards/domain/models/Billboard';

const billboardData: Billboard[] = [
  {
    id: 1,
    imageUrl:
      'http://cdn.testcyb.info/s/files/staging/76/theme/3057/assets/img/main_slider_item_1_lg.jpg?1604376844',
    linkUrl: 'https://anime.bang-dream.com/1st',
  },
  {
    id: 2,
    imageUrl:
      'http://cdn.testcyb.info/s/files/staging/76/theme/3057/assets/img/main_slider_item_2_lg.jpg?1604376850',
    linkUrl: 'https://anime.bang-dream.com/popiradi',
  },
  {
    id: 3,
    imageUrl:
      'http://cdn.testcyb.info/s/files/staging/76/theme/3057/assets/img/main_slider_item_3_lg.jpg?1604376856',
    linkUrl: 'https://anime.bang-dream.com/afst',
  },
  {
    id: 4,
    imageUrl:
      'https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/c12ca9ca-3b5b-447e-8a10-fba4a9f91a5d.jpg',
    linkUrl: 'https://anime.bang-dream.com',
  },
  {
    id: 5,
    imageUrl:
      'https://bang-dream.bushimo.jp/collabo/doremi/assets/images/common/special/header.jpg',
    linkUrl: 'https://bang-dream.bushimo.jp/collabo/doremi/',
  },
];

const BillboardsSliderStory = () => {
  return (
    <PitayaLayout>
      <BillboardsSlider billboards={billboardData} />
    </PitayaLayout>
  );
};

export default BillboardsSliderStory;
