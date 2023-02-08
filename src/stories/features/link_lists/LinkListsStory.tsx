import React from 'react';
import LinkLists from '@src/features/link_lists/index/components/LinkLists';
import { LinkList } from '@src/features/link_lists/domain/models/LinkList';
import { decorate } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';

const linkLists: LinkList[] = [
  {
    id: 1,
    title: '主選單',
    handle: 'main_page',
    systemDefault: true,
    descTitle: '預設就有的選單',
    descContent: 'db內system_default欄位為true或是主題的選單yml內有此選單',
    descImgUrl:
      'https://cdn.cyberbiz.tw/assets/home/v3/index/1920x950_banner-5b678973b15b83faa3533eab0e6d7e42.jpg',
  },
  {
    title: '側邊選單',
    handle: 'sidebar',
    systemDefault: true,
    descTitle: '需要建立的選單',
    descContent: '現在的主題需要這個選單，但是db內沒有，要按建立選單建立',
    descImgUrl:
      'https://cdn.cyberbiz.tw/assets/home/v3/shop_seminar/1920x880-e137a86f99157440e7a6f2a7c9658b35.png',
  },
  {
    id: 2,
    title: '類別選單',
    handle: 'categroy_list',
    systemDefault: false,
    descTitle: '自己建立的選單',
    descContent: 'db內system_default欄位為false且主題的選單yml內沒有此選單',
    descImgUrl:
      'https://cdn.cyberbiz.tw/assets/home/v3/pos_seminar/1440x860_top-banner-9cdc864253999d178f324fbcadbdf337.jpg',
  },
];

const LinkListsTableStory = () => {
  const quickCreateLinkListDeco = decorate([
    args => [`create a link list with title: ${args[0]}`],
  ]);
  const deleteLinkListDeco = decorate([
    args => [`delete the link list which id = ${args[0]}`],
  ]);
  const createLinkListDeco = decorate([args => ['create a new link list']]);
  const changePageDeco = decorate([args => [`change page to page ${args[0]}`]]);
  return (
    <BrowserRouter>
      <LinkLists
        linkLists={linkLists}
        page={1}
        maxPage={10}
        onQuickCreate={quickCreateLinkListDeco.action(
          'create link list due to theme',
        )}
        onDelete={deleteLinkListDeco.action('delete link list')}
        onCreate={createLinkListDeco.action('create link list')}
        changePage={changePageDeco.action('change page')}
      />
    </BrowserRouter>
  );
};

export default LinkListsTableStory;