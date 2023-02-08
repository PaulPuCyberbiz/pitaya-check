import React from 'react';
import { action } from '@storybook/addon-actions';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import SelectablePosShopsPage from '@src/features/categories_campaigns/edit/components/SelectablePosShopsPage';

export default class SelectablePosShopsStorybook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [
        {
          label: '全選',
          value: 'all',
        },
        {
          label: '取消全選',
          value: 'dismiss',
        },
      ],
      posShopListLoading: false,
      posShops: data[0],
      posShopListPage: 1,
      posShopListMaxPage: data.length,
      posShopsTotalCount: 12,
      headerAddToCampaignTitle: '將店家加入活動',
      headerSelectedTitle: '家',
      posShopsInCampaign: dataInCampaign,
      categoriesCampaign: {
        isEcIncluded: false,
      },
    };
    this.loadPosShops = this.loadPosShops.bind(this);
    this.onAlsoHold = this.onAlsoHold.bind(this);
  }

  loadPosShops(page, keywords) {
    this.setState({ posShops: data[page - 1] });
    this.setState({ posShopListPage: page });
  }

  onAlsoHold(categoriesCampaign) {
    this.setState({ categoriesCampaign });
  }

  render() {
    return (
      <PitayaLayout>
        <SelectablePosShopsPage
          {...this.state}
          loadPosShops={this.loadPosShops}
          onAlsoHold={this.onAlsoHold}
        />
      </PitayaLayout>
    );
  }
}

const data = [
  [
    {
      id: 1,
      name: '台北',
    },
    {
      id: 2,
      name: '宜蘭',
    },
    {
      id: 3,
      name: '花蓮',
    },
    {
      id: 4,
      name: '台北2',
    },
    {
      id: 5,
      name: '宜蘭2',
    },
    {
      id: 6,
      name: '花蓮2',
    },
    {
      id: 7,
      name: '台北3',
    },
    {
      id: 8,
      name: '宜蘭3',
    },
    {
      id: 9,
      name: '花蓮3',
    },
    {
      id: 10,
      name: '台北4',
    },
  ],
  [
    {
      id: 11,
      name: '宜蘭4',
    },
    {
      id: 12,
      name: '花蓮5',
    },
  ],
];

const dataInCampaign = [];
