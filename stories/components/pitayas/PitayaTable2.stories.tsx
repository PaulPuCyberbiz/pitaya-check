import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CodeBlock from '@src/components/CodeBlock';
import PitayaTable2, {
  DataField,
  Columns,
} from '@src/components/pitayas/PitayaTable2';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaIconBtn from '@src/components/pitayas/PitayaIconBtn';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { Layout } from '@stories/Layout';
import { OptionType } from '@src/types/BaseTypes';
import {
  PitayaAwesomeTable2,
  SelectedId,
} from '@src/components/pitayas/PitayaAwesomeTable2';

export default {
  title: 'Pitaya / Table2',
  decorators: [withKnobs],
};

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
    style: { minWidth: '90px' },
  },
];

const datas: DataField[] = [
  {
    id: 1,
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
    edit: <PitayaIconBtn type="edit" />,
  },
  {
    id: 2,
    idiom: 'Chase your tail',
    meaning: {
      fieldValue:
        'Spending a lot of time and energy doing a lot of things but actually achieving too little.',
      style: {
        fontWeight: 'bold',
      },
    },
    example: `He's been chasing his tail all week collecting data but the report is still not ready`,
    edit: <PitayaIconBtn type="edit" />,
  },
  {
    id: 3,
    meaning: 'Means trying all the clever means to achieve something.',
    example:
      'It was really difficult to find the information even after applying the whole bag of tricks.',
    edit: <PitayaIconBtn type="edit" />,
  },
];

export const 預設 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaTable2
    columns={columns}
    datas={datas}
  />
);
\`\`\`
\`\`\`ts
// Column type
interface Columns {
  dataField: string; // specify what field should be apply on this column
  text: string | JSX.Element;
}
// Data type
interface DataField {
  [key: string]: any;
  id: string | number;
}
\`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-4">
        <h3>預設表格</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-7">
        <PitayaRoundBox>
          <PitayaTable2 columns={columns} datas={datas} />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

export const 自動換行 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaTable2
    columns={columns}
    datas={datas}
    wrapCell={true}
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-4">
        <h3>自動換行</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-7">
        <PitayaRoundBox>
          <PitayaTable2 columns={columns} datas={datas} wrapCell={true} />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

export const 可選標題 = () => {
  const code = `\`\`\`jsx
const Comp = () => {
  const columns: Columns[] = [
    {
      dataField: 'gender',
      options: [
        {
          value: 'all',
          label: '性別'
        },
        {
          value: 'men',
          label: '男性'
        },
        {
          value: 'female',
          label: '女性'
        }
      ],
      onOptionChange: changeOption
    },
    {
      dataField: 'county',
      text: '縣市',
    },
  ];
  return (
    <PitayaTable2
      columns={columns}
      datas={datas}
      wrapCell={true}
    />
  )
};
  \`\`\``;

  const defaultDatas: DataField[] = [
    {
      id: 1,
      gender: '男性',
      county: '台北市',
    },
    {
      id: 2,
      gender: '女性',
      county: '台北市',
    },
    {
      id: 3,
      gender: '男性',
      county: '台中市',
    },
    {
      id: 4,
      gender: '女性',
      county: '台南市',
    },
  ];

  const menOnly: DataField[] = [
    {
      id: 1,
      gender: '男性',
      county: '台北市',
    },
    {
      id: 3,
      gender: '男性',
      county: '台中市',
    },
  ];

  const femaleOnly: DataField[] = [
    {
      id: 2,
      gender: '女性',
      county: '台北市',
    },
    {
      id: 4,
      gender: '女性',
      county: '台南市',
    },
  ];

  const [selectableDatas, setDatas] = useState(defaultDatas);

  const changeOption = (o: OptionType) => {
    switch (o.value) {
      case 'all':
        setDatas(defaultDatas);
        break;
      case 'men':
        setDatas(menOnly);
        break;
      case 'female':
        setDatas(femaleOnly);
        break;
    }
  };

  const selectableColumns: Columns[] = [
    {
      dataField: 'gender',
      options: [
        {
          value: 'all',
          label: '性別',
        },
        {
          value: 'men',
          label: '男性',
        },
        {
          value: 'female',
          label: '女性',
        },
      ],
      onOptionChange: changeOption,
    },
    {
      dataField: 'county',
      text: '縣市',
    },
  ];

  return (
    <Layout>
      <PitayaGroup className="col-lg-4">
        <h3>可選標題</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-7">
        <PitayaRoundBox>
          <PitayaTable2
            columns={selectableColumns}
            datas={selectableDatas}
            wrapCell={true}
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

export const 複選項目 = () => {
  const code = `\`\`\`jsx
const Comp = () => {
  const defaultColumns: Columns[] = [
    {
      dataField: 'gender',
      text: '性別',
    },
    {
      dataField: 'county',
      text: '縣市',
    },
    {
      dataField: 'age',
      text: '年齡',
    },
  ];
  const defaultDatas: DataField[] = [
    {
      id: 1,
      gender: '男性',
      county: '台北市',
      age: 22,
    },
    {
      id: 2,
      gender: '女性',
      county: '台北市',
      age: 18,
    },
    {
      id: 3,
      gender: '男性',
      county: '台中市',
      age: 30,
    },
    {
      id: 4,
      gender: '女性',
      county: '台南市',
      age: 29,
    },
  ];
  const hidableColumns = ['county', 'age'];
  return (
    <PitayaAwesomeTable2
      columns={defaultColumns}
      datas={defaultDatas}
      hidableColumns={hidableColumns}
      selectedIds={selectedIds}
      onCheck={onCheck}
    />
  )
};
  \`\`\``;

  const [selectedIds, setSelectedIds] = useState<SelectedId[]>([]);
  const onCheck = (id: SelectedId) => {
    setSelectedIds(preSelectedIds => {
      return preSelectedIds.includes(id)
        ? preSelectedIds.filter(preSelectedId => preSelectedId !== id)
        : [...preSelectedIds, id];
    });
  };
  const defaultColumns: Columns[] = [
    {
      dataField: 'gender',
      text: '性別',
    },
    {
      dataField: 'county',
      text: '縣市',
    },
    {
      dataField: 'age',
      text: '年齡',
    },
  ];
  const defaultDatas: DataField[] = [
    {
      id: 1,
      gender: '男性',
      county: '台北市',
      age: 22,
    },
    {
      id: 2,
      gender: '女性',
      county: '台北市',
      age: 18,
    },
    {
      id: 3,
      gender: '男性',
      county: '台中市',
      age: 30,
    },
    {
      id: 4,
      gender: '女性',
      county: '台南市',
      age: 29,
    },
  ];
  const hidableColumns = ['county', 'age'];

  return (
    <Layout>
      <PitayaGroup className="col-lg-4">
        <h3>複選項目</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-7">
        <PitayaRoundBox>
          <PitayaAwesomeTable2
            columns={defaultColumns}
            datas={defaultDatas}
            hidableColumns={hidableColumns}
            selectedIds={selectedIds}
            onCheck={onCheck}
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};

const columns2 = [
  {
    dataField: 'idiom',
    text: 'Idiom',
    className: 'idiom',
    style: { width: '200px' },
  },
  {
    dataField: 'example',
    text: 'Example',
    className: 'example',
    style: { width: '200px' },
  },
  {
    dataField: 'meaning',
    text: 'Meaning',
    className: 'meaning',
    style: { width: '200px' },
  },
  {
    dataField: 'edit',
    text: 'Icon',
    className: 'edit',
    style: { minWidth: '90px' },
  },
  {
    dataField: 'placeholder1',
    text: 'Placeholder',
    className: 'placeholder1',
    style: { minWidth: '120px' },
  },
  {
    dataField: 'placeholder2',
    text: 'Placeholder2',
    className: 'placeholder2',
    style: { minWidth: '120px' },
  },
  {
    dataField: 'placeholder3',
    text: 'Placeholder3',
    className: 'placeholder3',
    style: { minWidth: '120px' },
  },
];

const datas2Base = [
  {
    id: 1,
    fixed: true,
    idiom: {
      fieldValue: 'Main row',
      style: {
        height: '50px',
        backgroundColor: 'antiquewhite',
      },
      noWrap: true,
    },
    example: {
      fieldValue: 'Example test test',
      noWrap: true,
      style: {
        backgroundColor: 'antiquewhite',
      },
    },
    meaning: {
      fieldValue: `Meaning test test`,
      noWrap: true,
      style: {
        backgroundColor: 'antiquewhite',
      },
    },
    edit: {
      fieldValue: <PitayaIconBtn type="edit" />,
      style: {
        backgroundColor: 'antiquewhite',
      },
    },
    placeholder1: {
      fieldValue: 'placeholder',
      style: {
        backgroundColor: 'antiquewhite',
      },
    },
    placeholder2: {
      fieldValue: 'placeholder',
      style: {
        backgroundColor: 'antiquewhite',
      },
    },
    placeholder3: {
      fieldValue: 'placeholder',
      style: {
        backgroundColor: 'antiquewhite',
      },
    },
  },
  {
    id: 2,
    idiom: {
      fieldValue: 'Idiom test test',
      style: {
        color: 'red',
        height: '50px',
      },
      noWrap: true,
    },
    example: {
      fieldValue: 'Example test test',
      noWrap: true,
    },
    meaning: {
      fieldValue: `Meaning test test`,
      noWrap: true,
    },
    edit: <PitayaIconBtn type="edit" />,
  },
  {
    id: 3,
    idiom: {
      fieldValue: 'Idiom test test',
      style: {
        color: 'red',
        height: '50px',
      },
      noWrap: true,
    },
    example: {
      fieldValue: 'Example test test',
      noWrap: true,
    },
    meaning: {
      fieldValue: `Meaning test test`,
      noWrap: true,
    },
    edit: <PitayaIconBtn type="edit" />,
  },
];
const datas2: DataField[] = [...datas2Base];
for (let i = 0; i < 5; ++i) {
  datas2Base.forEach(data => {
    const newData = { ...data, id: data.id + 3 * (i + 1) };
    datas2.push(newData);
  });
}

export const 凍結窗格 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  const datas2 = [
    {
      id: 1,
      fixed: true,
      // ...
    },
    {
      id: 2,
      // ...
    },
    {
      id: 3,
      // ...
    },
  ];
  <PitayaTable2
    columns={columns2}
    datas={datas2}
    fixedColumns={['example', 'idiom']}
    fixedHeader={true}
    accumFixed={{ row: false, column: true }}
    style={{ maxHeight: '90vh' }}
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-4">
        <h3>凍結窗格</h3>
        <ul>
          <li>
            <b>fixedHeader</b>: 是否讓最上排header凍結，style需設定max-height
          </li>
          <li>
            <b>fixedColumns</b>:
            需要凍結column的keys（columns中的dataField），任意順序
          </li>
          <li>
            <b>accumFixed</b>:
            是否讓下一個凍結row/column接在上一個後面，若否則會蓋過去
          </li>
        </ul>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-7">
        <PitayaRoundBox>
          <PitayaTable2
            columns={columns2}
            datas={datas2}
            fixedColumns={['example', 'idiom']}
            fixedHeader={true}
            accumFixed={{
              row: boolean('accumulate on row', false),
              column: boolean('accumulate on column', true),
            }}
            style={{ maxHeight: '90vh' }}
          />
        </PitayaRoundBox>
      </PitayaGroup>
    </Layout>
  );
};
