import React, { useState } from 'react';
import LinkListsEdit from '@src/features/link_lists/edit/components/LinkListsEdit';
import { BrowserRouter } from 'react-router-dom';
import { decorate, action } from '@storybook/addon-actions';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';

// const linkListsEdit: TreeLink[] = [
//   {
//     id: 1,
//     subjectHandle: '/',
//     linkListId: 1,
//     title: '首頁',
//     linkType: 'frontpage',
//     url: '/',
//     position: 0,
//   },
//   {
//     id: 2,
//     subjectHandle: 'main_nav',
//     linkListId: 1,
//     title: '主選單',
//     linkType: 'link_list',
//     url: '/link_list',
//     position: 2,
//     children: [
//       {
//         id: 1,
//         subjectHandle: '/',
//         linkListId: 1,
//         title: '首頁',
//         linkType: 'frontpage',
//         url: '/',
//         position: 0,
//       },
//       {
//         id: 2,
//         subjectHandle: '/collection/all',
//         linkListId: 1,
//         title: '全部商品',
//         linkType: 'collection',
//         url: '/collection/all',
//         position: 0,
//       }
//     ]
//   },
// ];

const LinkListsEditStory = () => {
  const [title, setTitle] = useState('');
  const onTitleChang = (s: string) => {
    setTitle(s);
    decorate([args => [args[0]]]).action('title changing')(s);
  };
  return (
    <PitayaLayout>
      <BrowserRouter>
        <LinkListsEdit
          listName={title}
          showDeleteButton={true}
          onTitleChange={s => onTitleChang(s)}
          onSave={action('save link list')}
          onDeleteLinkList={action('delete edited link list')}
          back={action('back previous page')}
        />
      </BrowserRouter>
    </PitayaLayout>
  );
};

export default LinkListsEditStory;
