import React, { useState } from 'react';
// import { ModelLinkType } from '@src/features/link_lists/model/domain/models/modelType';
import { OptionType } from '@src/types/BaseTypes';
import { decorate } from '@storybook/addon-actions';
import LinkModal from '@src/features/link_lists/links/components/LinkModal';

export enum LinkType {
  BLOG = 'blog',
  STOCK = 'sock',
  Link = 'link',
}

export type LinkTypeOption = OptionType & {
  value: LinkType;
};

type ModelLinkType = {
  linkOption: LinkType;
  subjectOptions?: OptionType[];
};

const LinkListsModelStory = () => {
  const blogSubjectOptions: OptionType[] = [
    { label: '旅遊', value: 'travel' },
    { label: '商業', value: 'business' },
  ];

  const stockSubjectOptions: OptionType[] = [
    { label: '台股', value: 'taiwanStock' },
    { label: '納茲達克', value: 'NASDAQ' },
  ];

  const linkOptions: LinkTypeOption[] = [
    { label: '部落格', value: LinkType.BLOG },
    { label: '股市', value: LinkType.STOCK },
    { label: '外部連結', value: LinkType.Link },
  ];

  const modelData: ModelLinkType[] = [
    { linkOption: linkOptions[0].value, subjectOptions: blogSubjectOptions },
    { linkOption: linkOptions[1].value, subjectOptions: stockSubjectOptions },
    { linkOption: linkOptions[2].value },
  ];
  const [linkTitle, setLinkTitle] = useState('');
  const [website, setWebsite] = useState('');
  const [linkType, setLinkType] = useState();
  const [subjectOptions, setSubjectOptions] = useState();
  const [subjectOption, setSubjectOption] = useState();

  const onLinkTypeChange = (o: LinkTypeOption) => {
    setLinkType(o);
    const chooseModel = modelData.find(element => {
      return element.linkOption === o.value;
    });
    if (chooseModel) {
      if (chooseModel.linkOption !== LinkType.Link) {
        setSubjectOptions(chooseModel.subjectOptions);
        setSubjectOption(chooseModel.subjectOptions[0]);
      }
      changeLinkListDeco.action('change LinkType')(o);
    } else {
      throw new Error('invalid type');
    }
  };

  const onSubjectOptionsChange = (o: OptionType) => {
    setSubjectOption(o);
    changeLinkListDeco.action('change SubjectOptions')(o);
  };

  const onConfirm = () => {
    if (linkType.value === LinkType.Link) {
      submitLinkTypeDeco.action('submit')(linkTitle, linkType, website);
    } else {
      submitOtherTypeDeco.action('submit')(linkTitle, linkType, subjectOption);
    }
  };

  const onCancel = () => {
    cancelLinkListDeco.action('Cancel')();
  };

  const changeLinkListDeco = decorate([args => [`change to ${args[0].value}`]]);
  const submitOtherTypeDeco = decorate([
    args => [
      ` linkTitle: ${args[0]}, linkType: ${args[1].value}, subjectOption: ${args[2].value}`,
    ],
  ]);
  const submitLinkTypeDeco = decorate([
    args => [
      ` linkTitle: ${args[0]}, linkType: ${args[1].value}, website: ${args[2]}`,
    ],
  ]);
  const cancelLinkListDeco = decorate([args => [` cancel `]]);

  const onTitleChangeAction = decorate([args => [`${args[0]}`]]).action(
    'change title',
  );
  const onTitleChange = (s: string) => {
    onTitleChangeAction(s);
    setLinkTitle(s);
  };

  return (
    <LinkModal
      show={true}
      linkTitle={linkTitle}
      linkTypes={linkOptions}
      linkType={linkType}
      website={website}
      subjectOptions={subjectOptions}
      subjectOption={subjectOption}
      onTitleChange={onTitleChange}
      onWebsiteChange={setWebsite}
      onLinkTypeChange={onLinkTypeChange}
      onSubjectOptionsChange={onSubjectOptionsChange}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default LinkListsModelStory;
