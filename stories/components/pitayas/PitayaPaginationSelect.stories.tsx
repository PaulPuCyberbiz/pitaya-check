import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ReactMarkdown from 'react-markdown';

import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaPaginationSelect from '@src/components/pitayas/PitayaPaginationSelect';
import CodeBlock from '@src/components/CodeBlock';
import { OptionType } from '@src/features/product_search/types';

export default {
  title: 'Pitaya / PaginationSelect',
  decorators: [withKnobs],
};

export const Simple = () => {
  const code = `\`\`\`jsx
const options = [];
for (let i = 0; i < 50; ++i) {
  options.push({
    value: i + 1,
    label: \`Option \${i + 1}\`
  });
}

const sleep = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const loadOptions = async (search: string, page: number) => {
  await sleep(1000);

  const per = 10;
  const start = (page - 1) * per;
  const end = start + per;

  let filteredOptions;
  if (!search) {
    filteredOptions = options;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(searchLower)
    );
  }

  return filteredOptions.slice(start, end);
};
const [value, onChange] = useState(null);

<PitayaPaginationSelect
  value={value}
  loadOptions={loadOptions}
  onChange={onChange}
/>
\`\`\``;

  const options: OptionType[] = [];
  for (let i = 0; i < 50; ++i) {
    options.push({
      value: String(i + 1),
      label: `Option ${i + 1}`,
    });
  }

  const sleep = (ms: number) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });

  const loadOptions = async (search: string, page: number) => {
    await sleep(1000);

    const per = 10;
    const start = (page - 1) * per;
    const end = start + per;

    let filteredOptions;
    if (!search) {
      filteredOptions = options;
    } else {
      const searchLower = search.toLowerCase();

      filteredOptions = options.filter(({ label }) =>
        label.toLowerCase().includes(searchLower),
      );
    }

    return filteredOptions.slice(start, end);
  };
  const [value, onChange] = useState(null);

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <h3>PaginationSelect - Simple</h3>

      <PitayaPaginationSelect
        value={value}
        loadOptions={loadOptions}
        onChange={onChange}
      />
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
