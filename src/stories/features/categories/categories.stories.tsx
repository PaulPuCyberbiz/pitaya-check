import React from 'react';
import CategoriesIndexStorybook from '@stories/features/categories/categoriesIndexStorybook';
import CategoriesFormModalStorybook from '@stories/features/categories/categoriesFormModalStorybook';

export default {
  title: 'Categories',
};

export const CategoriesIndex = () => <CategoriesIndexStorybook />;
export const CategoriesFormModal = () => <CategoriesFormModalStorybook />;
