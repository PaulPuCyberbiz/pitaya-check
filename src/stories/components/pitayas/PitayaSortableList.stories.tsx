import React, { useState } from 'react';
import PitayaSortableList from '@src/components/pitayas/PitayaSortableList';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaIconBtn from '@src/components/pitayas/PitayaIconBtn';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Layout } from '@stories/Layout';
import { reorder } from '@src/helpers/reorderHelper';
import { Story } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { nonNegativeIntegerPattern } from '@src/helpers';

export default {
  title: 'Pitaya / SortableList',
  component: PitayaSortableList,
  decorators: [withKnobs],
};

const defaultDatas = [
  {
    id: 1,
    position: 1,
    idiom: {
      fieldValue: 'Cut the ground from under feet',
      style: {
        color: 'red',
      },
    },
    meaning: `Meaning - When you cut the ground from under someone's feet, you do something which weakens their position.`,
    example:
      'When team India hit more than 350 runs in the ' +
      `ODI, they cut the ground from under the opponent's feet.`,
    edit: {
      fieldValue: <PitayaIconBtn type="edit" />,
      style: { flex: 0 },
    },
  },
  {
    id: 2,
    position: 2,
    idiom: 'Chase your tail',
    meaning: {
      fieldValue:
        'Spending a lot of time and energy doing a lot of things but actually achieving too little.',
      style: {
        fontWeight: 'bold',
      },
    },
    example: `He's been chasing his tail all week collecting data but the report is still not ready`,
    edit: {
      fieldValue: <PitayaIconBtn type="edit" />,
      style: { flex: 0 },
    },
  },
  {
    id: 3,
    position: 3,
    meaning: 'Means trying all the clever means to achieve something.',
    example:
      'It was really difficult to find the information even after applying the whole bag of tricks.',
    edit: {
      fieldValue: <PitayaIconBtn type="edit" />,
      style: { flex: 0 },
    },
  },
];

const columns = [
  {
    dataField: 'idiom',
    text: 'Idiom',
    className: 'idiom',
    width: '30%',
  },
  {
    dataField: 'meaning',
    text: 'Meaning',
    className: 'meaning',
  },
  {
    dataField: 'example',
    text: 'Example',
    className: 'example',
  },
  {
    dataField: 'edit',
    text: 'Icon',
    className: 'edit',
    style: { flex: 0 },
  },
];

const Template: Story = args => {
  const [datas, setDatas] = useState(defaultDatas);
  const onPositionChange = (oldPosition: number, newPosition: number) => {
    setDatas(reorder(datas, oldPosition - 1, newPosition - 1));
  };

  const props = {
    hideHeader: boolean('hideHeader', false),
    wrapCell: boolean('wrapCell', false),
    positionColumnText: text('positionColumnText', ''),
    positionTooltipText: text('positionTooltipText', 'tooltip文字'),
  };

  return (
    <Layout>
      <PitayaGroup className="col-lg-7">
        <PitayaRoundBox>
          <PitayaSortableList
            columns={columns}
            datas={datas}
            onPositionChange={onPositionChange}
            positionValidator={(newP: string) => {
              return nonNegativeIntegerPattern.test(newP);
            }}
            {...props}
            {...args}
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

export const 預設 = Template.bind({});
預設.args = {
  hidePosition: false,
  hideHandle: false,
};

export const 隱藏順序輸入框 = Template.bind({});
隱藏順序輸入框.args = {
  hidePosition: true,
  hideHandle: false,
};

export const 無法排序 = Template.bind({});
無法排序.args = {
  hidePosition: true,
  hideHandle: true,
};
