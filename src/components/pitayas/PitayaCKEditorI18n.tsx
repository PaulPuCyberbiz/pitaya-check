import React, { useEffect, useState } from 'react';
import { Editable } from '@src/types/BaseTypes';
import { PitayaBulletLabel } from '@src/components/pitayas/PitayaBulletLabel';
import styles from '@src/assets/stylesheets/pitayas/PitayaCKEditorI18n.scss';
import i18next from 'i18next';
import { attribsRemover } from '@src/helpers/htmlAttributeRemover';

export interface PitayaCKEditorGlobalProps {
  id?: string;
  title?: React.ReactNode;
  language?: string;
  destroyWhenUnmount?: boolean;
  defaultValue?: string;
  reload?: boolean;
  height?: number;
  onChange: (str: string) => void;
  enqueueLoading?: () => void;
  dequeueLoading?: () => void;
  afterReload?: () => void;
}

export const PitayaCKEditorI18n = (props: PitayaCKEditorGlobalProps) => {
  const {
    id: ckeditorId = 'pitaya-ckeditor-i18n',
    title,
    language,
    defaultValue,
    reload,
    enqueueLoading,
    dequeueLoading,
    onChange,
    afterReload,
    height = 300,
  } = props;
  const [hasInstanceReady, setHasInstanceReady] = useState(false);

  const CKEDITOR = window.CKEDITOR;

  const setData = () => {
    const editor = CKEDITOR.instances[ckeditorId];
    editor.setData(defaultValue);
  };

  const updateData = (evt?: Editable) => {
    onChange(evt?.editor.getData() || '');
  };

  const initCKEDITOR = () => {
    const editor = window.CKEDITOR.replace(ckeditorId, {
      language: i18next.language,
      height,
    });

    enqueueLoading?.();
    editor.on('instanceReady', () => {
      setHasInstanceReady(true);
      dequeueLoading?.();
    });

    editor.on('mode', () => {
      if (editor.mode === 'source') {
        const editable = editor.editable();
        editable.attachListener(editable, 'input', () => {
          onChange(editable.editor.getData());
        });
      }
    });

    editor.on('beforeModeUnload', () => {
      if (editor.mode === 'source') {
        const editable = editor.editable();
        const newHtml = attribsRemover(editable.editor.getData());
        editable.editor.setData(newHtml);
      }
    });

    editor.on('key', updateData);
    editor.on('change', updateData);
    editor.on('afterInsertHtml', updateData);
  };

  useEffect(() => {
    initCKEDITOR();
  }, []);

  useEffect(() => {
    if (hasInstanceReady) {
      setData();
    }
  }, [hasInstanceReady]);

  useEffect(() => {
    setData();
  }, [language]);

  useEffect(() => {
    if (reload) {
      setData();
      afterReload?.();
    }
  }, [reload]);

  return (
    <div className={styles.pitayaCKEditorI18n}>
      <div className={`${styles.header} ckeEditor_header`}>
        {title && <label className="ckEditor_title">{title}</label>}
        {language && <PitayaBulletLabel label={language} />}
      </div>
      <textarea id={ckeditorId} />
    </div>
  );
};
