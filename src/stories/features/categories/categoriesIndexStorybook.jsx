import React from 'react';
import CategoriesIndex from '@src/features/categories/components/CategoriesIndex.tsx';
import { action } from '@storybook/addon-actions';

const handleEdit = action('onEdit');
const handleDelete = action('onDelete');
const handleMove = action('onMove');
const handleTreeChange = action('onTreeChange');

const nestData = [
  { title: 'main', handle: 'mail_handle', id: 'main' },
  {
    title: 'value2',
    handle: 'content2',
    expanded: true,
    id: 'btn2',
    children: [
      {
        title: 'value3',
        handle: 'content3',
        expanded: true,
        id: 'btn3',
        children: [
          {
            title: 'children_value1',
            handle: 'children_content1',
            id: 'children_btn1',
          },
        ],
      },
    ],
  },
];

export default class CatoriesIndexStorybook extends React.Component {
  render() {
    return (
      <div style={{ background: '#F1F4F9' }}>
        <CategoriesIndex
          nestData={nestData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleMove={handleMove}
          handleTreeChange={handleTreeChange}
        />
      </div>
    );
  }
}
