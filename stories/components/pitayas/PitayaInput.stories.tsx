import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ReactMarkdown from 'react-markdown';

import CodeBlock from '@src/components/CodeBlock';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PitayaInput from '@src/components/pitayas/PitayaInput';
import PitayaSearch from '@src/components/pitayas/PitayaSearch';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { Layout } from '@stories/Layout';

export default {
  title: 'Pitaya / Input',
  decorators: [withKnobs],
};

const onChange = () => {};
const onDelete = () => {};

export const 總覽 = () => {
  const code = `
\`\`\`ts
// Column type
interface PitayaInput {
  id?: string;
  append?: any;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  invalid?: boolean;
  invalidContent?: string;
  inputDirection?: 'ltr' | 'rtl';
  inputRef?: RefObject<HTMLInputElement>;
  inputSize?: 'large' | 'medium' | 'small';
  isShowDelBtn?: boolean;
  label?: string;
  languageLabel?: string;
  inputType?: string;
  name?: string;
  noticeContent?: string;
  placeholder?: string;
  prepend?: any;
  warningContent?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
  onDelBtnClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}
\`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>總覽</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          append={text('後綴', '後綴')}
          prepend={text('前綴', '前綴')}
          inputSize="medium"
          warningContent={text('警示文字', '警告警告是警告')}
          noticeContent={text('提示文字', '提示提示是提示')}
          invalid={true}
          invalidContent={text('錯誤訊息', '錯誤錯誤錯誤')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 欄位尺寸 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    inputSize="medium"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5">
        <h3>尺寸 (inputSize: string)</h3>
        <p>共三種尺寸 large, medium, small (尺寸預設為large)</p>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6">
        <PitayaGroup>
          <PitayaInput
            label={text('標題', '預設標題')}
            placeholder={text('佔位文字', 'placeholder')}
            onChange={onChange}
          />
          <PitayaInput
            label={text('標題', '預設標題')}
            placeholder={text('佔位文字', 'placeholder')}
            inputSize="medium"
            onChange={onChange}
          />
          <PitayaInput
            label={text('標題', '預設標題')}
            placeholder={text('佔位文字', 'placeholder')}
            inputSize="small"
            onChange={onChange}
          />
        </PitayaGroup>
      </PitayaRoundBox>
    </Layout>
  );
};

export const 文字方向 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    inputDirection='ltr'
  />
);
  \`\`\``;
  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>文字方向 (inputDirection: string)</h3>
        <p>共兩種方向 ltr (左至右), rtl (右至左)</p>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaGroup>
          <PitayaInput
            label={text('標題', '預設標題')}
            placeholder="左至右"
            inputDirection="ltr"
            onChange={onChange}
          />
          <PitayaInput
            label={text('標題', '預設標題')}
            placeholder="右至左"
            inputDirection="rtl"
            onChange={onChange}
          />
        </PitayaGroup>
      </PitayaRoundBox>
    </Layout>
  );
};

export const 預設帶入文字 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    value="文字內容"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>預設文字 (value: string)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          value={text('文字內容', '文字內容')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 禁用輸入 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    disabled={true}
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>停用輸入 (disabled: boolean)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          disabled={true}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 顯示警告文字 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    warningContent="警告警告是警告"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>警示文字 (warningContent: string)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          warningContent={text('警示文字', '警告警告是警告')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 顯示提示文字 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    noticeContent="提示提示是提示"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>提示文字 (noticeContent: string)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          noticeContent={text('提示文字', '提示提示是提示')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 顯示錯誤訊息 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    invalid={true}
    invalidContent="輸入錯誤"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>錯誤訊息 (invalid: boolean, invalidContent: string)</h3>
        <p>若 invalid 為 true 時，須提供 invalidContent</p>
        <p>若輸入錯誤，錯誤訊息將會覆蓋警示文字</p>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          invalid={true}
          invalidContent={text('錯誤訊息', '錯誤錯誤錯誤')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 語言提示 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    languageLabel="繁體中文"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>語言提示(languageLabel: string)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          languageLabel={text('語言提示', '繁體中文')}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 刪除符號 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    isShowDelBtn={true}
    onDelBtnClick={() => void}
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>刪除按鍵(isShowDelBtn: boolean, onDelBtnClick: function)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          isShowDelBtn={true}
          onChange={onChange}
          onDelBtnClick={onDelete}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 追加元素 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaInput
    label="預設標題"
    placeholder="placeholder"
    prepend="前綴"
    append="後綴"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>追加元素(prepend: string, append: string)</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          prepend={text('前綴', '前綴')}
          onChange={onChange}
        />
        <PitayaInput
          label={text('標題', '預設標題')}
          placeholder={text('佔位文字', 'placeholder')}
          append={text('後綴', '後綴')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 必填 = () => {
  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>必填 (required: boolean)</h3>
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaInput
          label={text('標題', '預設標題')}
          required={boolean('required', true)}
          requiredText={text('requiredText', '(必填)')}
        />
      </PitayaRoundBox>
    </Layout>
  );
};

export const 搜尋 = () => {
  const code = `\`\`\`jsx
const Comp = () => (
  <PitayaSearch
    placeholder="搜尋"
  />
);
  \`\`\``;

  return (
    <Layout>
      <PitayaGroup className="col-lg-5 col-md-12">
        <h3>搜尋</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaRoundBox className="col-lg-6 col-md-12">
        <PitayaSearch
          placeholder={text('佔位文字', '搜尋')}
          onChange={onChange}
        />
      </PitayaRoundBox>
    </Layout>
  );
};
