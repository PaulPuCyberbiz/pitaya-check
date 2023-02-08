import React, { useState } from 'react';
import CampaignsComponent from '@src/features/categories_campaigns/index/components/CampaignsComponent';
import CampaignBtnGroupComponent from '@src/features/categories_campaigns/index/components/CampaignBtnGroupComponent';

const CategoriesCampaignsIndex = props => {
  const fakeCampaign = {
    id: 1,
    title: 'hahaha',
    startDateTime: '2018/09/09 18:00',
    endDateTime: '2018/09/09 18:00',
    weight: 1,
    isPublished: true,
    posShops: [],
    categories: [],
    isEcIncluded: false,
    discountType: 'price',
    discountValue: 100,
    discountThreshold: 0,
  };
  const fakeBody = [
    [
      {
        className: 'title',
        body: 'hahaha',
      },
      {
        className: 'startAt',
        body: '2018/09/09 18:00',
      },
      {
        className: 'endAt',
        body: '2018/09/09 18:00',
      },
      {
        className: 'weight',
        body: '1',
      },
      {
        className: 'btn-group',
        body: (
          <CampaignBtnGroupComponent
            campaign={fakeCampaign}
            editHandler={() => {}}
            publishedHandler={() => {}}
            deleteHandler={() => {}}
          />
        ),
      },
    ],
  ];
  const [tableCampaigns, setTableCampaigns] = useState(fakeBody);
  const [selectedCampaign, setSelectedCampaign] = useState({});
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <CampaignsComponent
      tableCampaigns={tableCampaigns}
      selectedCampaign={selectedCampaign}
      showCreateModal={showCreateModal}
      showDeleteModal={showDeleteModal}
      saveCampaign={title => {}}
      deleteCampaign={id => {}}
      toggleCreateModal={showing => {}}
      toggleDeleteModal={showing => {}}
    />
  );
};

export default CategoriesCampaignsIndex;
