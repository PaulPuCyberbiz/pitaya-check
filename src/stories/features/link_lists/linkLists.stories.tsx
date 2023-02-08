import React from 'react';
import LinkListsStory from '@stories/features/link_lists/LinkListsStory';
import LinkListsTableRowStory from '@stories/features/link_lists/LinkListsTableRowStory';
import LinkListsEditStory from '@stories/features/link_lists/LinkListsEditStory';
import { LinksEditTableStory } from '@stories/features/link_lists/LinksEditTableStory';
import LinkListsModelStory from '@stories/features/link_lists/LinkListsModelStory';

export default {
  title: 'Link Lists',
};

export const LinkListsIndex = () => <LinkListsStory />;
export const LinkListsIndexTableRow = () => <LinkListsTableRowStory />;
export const LinkListsEdit = () => <LinkListsEditStory />;
export const LinksEditTable = () => <LinksEditTableStory />;
export const LinkListsModel = () => <LinkListsModelStory />;
