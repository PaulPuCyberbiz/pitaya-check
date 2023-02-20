import React from 'react';
import * as monacoEditor from 'monaco-editor';
import MonacoEditor, { MonacoEditorProps } from 'react-monaco-editor';
import styles from '@src/assets/stylesheets/pitayas/PitayaCodeEditor.module.scss';
import { LanguageName } from '@src/components/pitayas/PitayaCodeEditor/LanguageName';
import classNames from 'classnames';

type PitayaCodeEditorProps = MonacoEditorProps & {
  code: string;
  languageName?: LanguageName;
  title?: string;
  className?: string;
};

const defaultOptions: monacoEditor.editor.IEditorOptions = {
  minimap: {
    enabled: false,
  },
};

export const PitayaCodeEditor = (props: PitayaCodeEditorProps) => {
  const {
    code,
    height = '400',
    languageName,
    options = defaultOptions,
    theme = 'vs',
    title,
    className,
    ...rest
  } = props;

  return (
    <div className={classNames(styles['pitaya-code-editor'], className)}>
      {title && <p>{title}</p>}
      <MonacoEditor
        height={height}
        language={languageName}
        options={options}
        theme={theme}
        value={code}
        {...rest}
      />
    </div>
  );
};
