import React from 'react';
import { List } from 'immutable4';

import LinksEditTable from '@src/features/link_lists/links/components/LinksEditTable';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';

export const LinksEditTableStory = () => {
  const links = List([
    {
      title: '首頁',
      id: 1,
      url: '/',
      linkType: 'frontpage',
      subjecthandle: null,
      position: 1,
    },
    {
      title: '首頁商品',
      id: 430,
      url: '/collections/frontpage',
      linkType: 'custom_collection',
      subjecthandle: 'frontpage',
      position: 5,
    },
    {
      title: '紅配綠活動',
      id: 394,
      url: '/bundle_discounts/rg',
      linkType: 'bundle_discount',
      subjecthandle: '/bundle_discounts/rg',
      position: 2,
    },
    {
      title: '大分類一',
      id: 425,
      url: '/categories/大分類一',
      linkType: 'category',
      subjecthandle: '大分類一',
      position: 3,
    },
    {
      title: '連結列表-頁腳',
      id: 432,
      url: 'footer',
      linkType: 'linklist',
      subjecthandle: 'footer',
      position: 6,
      children: List(),
    },
  ]);

  return (
    <PitayaLayout>
      <LinksEditTable />
      <LinksEditTable links={links} />
    </PitayaLayout>
  );
};
