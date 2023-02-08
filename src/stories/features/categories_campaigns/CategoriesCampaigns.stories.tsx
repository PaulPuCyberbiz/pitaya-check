import React from 'react';
import CategoriesCampaignsIndex from '@stories/features/categories_campaigns/CategoriesCampaignsIndex';
import CategoriesCampaignsSetting from '@stories/features/categories_campaigns/CategoriesCampaignsSetting';
import SelectableCategoriesPage from '@stories/features/categories_campaigns/SelectableCategoriesPage';
import SelectablePosShops from '@stories/features/categories_campaigns/SelectablePosShops';

export default {
  title: 'Categories Campaigns',
};

export const 活動目錄 = () => <CategoriesCampaignsIndex />;
export const 活動設定頁 = () => <CategoriesCampaignsSetting />;
export const 商品進階分類設定頁 = () => <SelectableCategoriesPage />;
export const POS設定頁 = () => <SelectablePosShops />;
