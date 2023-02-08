import React from 'react';

import { MemoryRouter } from 'react-router';

import FlexStory from '@stories/components/FlexStory';
import PitayaFail from '@src/components/pitayas/PitayaFail.tsx';
import BreadcrumbStorybook from '@stories/breadcrumbStorybook';
import FormModalStorybook from '@stories/formStorybook';
import ButtonStorybook from '@stories/buttonStorybook';
import CheckboxStorybook from '@stories/checkboxStorybook';
import TextareaStorybook from '@stories/textareaStorybook';
import SwitchStorybook from '@stories/switchStorybook';
import SelectStorybook from '@stories/selectStorybook';
import TabsStorybook from '@stories/tabsStorybook';
import FileInputStorybook from '@stories/fileInputStorybook';
import PaginationStorybook from '@stories/paginationStorybook';
import CheckOptionsStorybook from '@stories/checkOptionsStorybook';
import ConfirmStorybook from '@stories/ConfirmStorybook';
import PitayaTooltipStory from '@stories/components/PitayaTooltipStory';
import PitayaActionSelectorStory from '@stories/components/pitayas/PitayaActionSelectorStorybook';
import NestableStorybook from '@stories/nestableStorybook';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEye,
  faEyeSlash,
  faEdit,
  faTrashAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import i18n from '@src/locale/i18n';

library.add(faEye, faEyeSlash, faEdit, faTrashAlt, faPlus);

export default {
  title: 'Pitaya',

  decorators: [
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
  ],
};

export const PitayaFlex = () => <FlexStory />;
export const PitayaBreadcrumb = () => <BreadcrumbStorybook />;
export const PitayaButton = () => <ButtonStorybook />;
export const PitayaCheckbox = () => <CheckboxStorybook />;
export const PitayaTextarea = () => <TextareaStorybook />;
export const PitayaSelect = () => <SelectStorybook />;
export const _PitayaFail = () => <PitayaFail connectStatus />;
export const PitayaFormModal = () => <FormModalStorybook />;

PitayaFormModal.story = {
  name: 'Pitaya FormModal',
};

export const PitayaSwitchButton = () => <SwitchStorybook />;
export const PitayaTabsButton = () => <TabsStorybook />;
export const PitayaNestable = () => <NestableStorybook />;
export const PitayaFileInput = () => <FileInputStorybook />;

PitayaFileInput.story = {
  name: 'Pitaya FileInput',
};

export const PitayaPagination = () => <PaginationStorybook />;

PitayaPagination.story = {
  name: 'pitaya Pagination',
};

export const PitayaCheckOptions = () => <CheckOptionsStorybook />;

PitayaCheckOptions.story = {
  name: 'pitaya CheckOptions',
};

export const PitayaConfirm = () => <ConfirmStorybook />;

PitayaConfirm.story = {
  name: 'pitaya Confirm',
};

export const PitayaTooltip = () => <PitayaTooltipStory />;
export const PitayaActionSelector = () => <PitayaActionSelectorStory />;

PitayaActionSelector.story = {
  name: 'Pitaya ActionSelector',
};

window.i18n = i18n;
