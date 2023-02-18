declare module '*.scss' {
  const content: { [className: string]: string };
  console.log({ content })
  export = content;
}

declare module 'react-composition-input' {
  type CInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  const CInput: (p: CInputProps) => JSX.Element;
  export = CInput;
}

declare module '*.jpg';

declare module '*.png';

declare module '*.svg';

declare module 'webfontloader';

declare module 'react-barcode-reader' {
  type BReaderProps = {
    onScan: (s: string) => void;
    onError?: (s: string) => void;
    onKeyDetect?: (e: KeyboardEvent) => void;
    timeBeforeScanTest?: number; // default value is 100
    avgTimeByChar?: number; // 30
    minLength?: number; // 6
    endChar?: number[]; // [9, 13]
    startChar?: number[]; // []
    scanButtonLongPressThreshold?: number; // 3
    stopPropagation?: boolean; // false
    preventDefault?: boolean; // false
  };
  const BReader: (p: BReaderProps) => JSX.Element;
  export = BReader;
}
