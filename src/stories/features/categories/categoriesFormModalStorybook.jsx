import React from 'react';
import CategoriesFormModal from '@src/features/categories/components/CategoriesFormModal.tsx';

const formType = 'collection';
const showSelect = true;
const getAddEditModal = true;
const options = [
  {
    value: '1',
    label: '新增類別',
  },
  {
    value: '2',
    label: '新增群組',
  },
];
const collectionOptions = {
  type: [
    {
      value: '1',
      label: '智慧群組',
    },
  ],
  titles: [
    {
      value: '1',
      label: 'test1',
    },
    {
      value: '2',
      label: 'test2',
    },
  ],
};

export default class CatoriesIndexStorybook extends React.Component {
  render() {
    return (
      <div style={{ background: '#F1F4F9' }}>
        <CategoriesFormModal
          formType={formType}
          showSelect={showSelect}
          selectOptions={options}
          getAddEditModal={getAddEditModal}
          collection={collectionOptions}
        />
      </div>
    );
  }
}
