import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
// tslint:disable-next-line: no-submodule-imports
import 'highlight.js/styles/github.css';

type CodeBlockProps = {
  language: string;
  value: string;
};

export default function CodeBlock({ language, value }: CodeBlockProps) {
  const codeEle = useRef(null);

  useEffect(() => {
    (hljs.initHighlighting as any).called = false;
    hljs.initHighlighting();
  }, [codeEle]);

  return (
    <pre>
      <code ref={codeEle} className={`language-${language}`}>
        {value}
      </code>
    </pre>
  );
}
